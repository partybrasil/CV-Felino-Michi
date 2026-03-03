const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const DIRECTORY = __dirname;
const INDEX_FILE = path.join(DIRECTORY, 'index.html');

// Helper para convertir el nombre del archivo (ej. index-windows98.html) a Título Legible
const getMetadata = (filename) => {
    let rawName = filename.replace('index-', '').replace('.html', '');
    
    // Capitalización simple de palabras separadas por guión
    let titleParts = rawName.split('-');
    let title = titleParts.map(p => p.charAt(0).toUpperCase() + p.slice(1)).join(' ');
    
    // Correcciones especiales para nombres muy técnicos o feos
    if (title.toLowerCase() === 'windows98') title = 'Windows 98';
    if (title.toLowerCase() === 'tailwindcss') title = 'Tailwind CSS';
    if (title.toLowerCase() === 'sakuracss') title = 'Sakura CSS';
    if (title.toLowerCase() === 'watercss') title = 'Water CSS';
    if (title.toLowerCase() === 'mvpcss') title = 'MVP CSS';
    if (title.toLowerCase() === 'semanticui') title = 'Semantic UI';
    if (title.toLowerCase() === 'retro nes') title = 'Retro NES 8-bit';
    if (title.toLowerCase() === 'dos crt') title = 'MS-DOS Retro';
    if (title.toLowerCase() === '1990s') title = 'Vintage 1990s Web';
    if (title.toLowerCase() === 'uikit dark') title = 'UIkit Dark Mode';

    return {
        title: title,
        badge: 'Diseño',
        desc: `Diseño generativo inspirado en ${title}, perfecto para destacar en cualquier escenario.`
    };
};

async function generateThumbnailsAndUpdateIndex() {
    console.log('Iniciando proceso permanente de actualización de miniaturas e índice...');

    // 1. Obtiene todas las variantes HTML (excluyendo el index de la galería principal)
    const files = fs.readdirSync(DIRECTORY).filter(file => file.endsWith('.html') && file !== 'index.html');
    
    if (files.length === 0) {
        console.log('No se encontraron variantes .html.');
        return;
    }

    // 2. Levanta Puppeteer invisible
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    // Simulate a standard desktop screen for the screenshot
    await page.setViewport({ width: 1280, height: 800 });

    const generatedCardsHtml = [];

    // 3. Itera por cada archivo, carga y captura
    for (const file of files) {
        console.log(`Procesando: ${file}...`);
        const filePath = path.join(DIRECTORY, file);
        const fileUrl = `file://${filePath}`;
        
        // Define screenshot output path (e.g. thumb-index-bootstrap.jpg)
        const thumbName = `thumb-${file.replace('.html', '.jpg')}`;
        const thumbPath = path.join(DIRECTORY, thumbName);

        try {
            // Load page and wait for network/dom to settle
            await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 15000 });
            
            // Take screenshot
            await page.screenshot({ 
                path: thumbPath, 
                type: 'jpeg',
                quality: 80,
                // Clip the top portion of the page for the thumbnail
                clip: { x: 0, y: 0, width: 1280, height: 800 } 
            });
            console.log(`  📸 Captura guardada: ${thumbName}`);

            // Get metadata for the card
            const meta = getMetadata(file);

            // Create HTML snippet for this variant using the screenshot
            const cardHtml = `
            <a href="${file}" class="group block bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 overflow-hidden border border-slate-100 variant-card">
                <div class="h-48 relative flex items-center justify-center bg-gray-100 overflow-hidden">
                    <img src="${thumbName}" alt="Miniatura de ${meta.title}" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://images.unsplash.com/photo-1555685812-4b943f1cb0eb?auto=format&fit=crop&w=800&q=80'">
                    <div class="absolute inset-0 bg-indigo-900/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div class="p-6">
                    <div class="flex items-center justify-between mb-2">
                        <h3 class="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">${meta.title}</h3>
                        <span class="px-2.5 py-1 bg-indigo-100 text-indigo-700 text-xs font-semibold rounded-full">${meta.badge}</span>
                    </div>
                    <p class="text-slate-600 text-sm line-clamp-2">
                        ${meta.desc}
                    </p>
                </div>
            </a>`;
            
            generatedCardsHtml.push(cardHtml);
        } catch (err) {
            console.error(`  ❌ Error capturando ${file}:`, err.message);
        }
    }

    await browser.close();

    // 4. Inyecta todo el código en el index.html principal
    console.log('Actualizando index.html con el nuevo grid...');
    if (fs.existsSync(INDEX_FILE)) {
        const indexHtml = fs.readFileSync(INDEX_FILE, 'utf-8');
        const $ = cheerio.load(indexHtml);

        // We assume the grid container has this specific class structure based on previous generation:
        const gridContainer = $('main .grid');
        
        if (gridContainer.length > 0) {
            // Empty existing cards
            gridContainer.empty();
            // Append new generated cards
            gridContainer.append(generatedCardsHtml.join('\n'));
            
            // Write back
            fs.writeFileSync(INDEX_FILE, $.html());
            console.log('✅ index.html actualizado exitosamente con ' + files.length + ' diseños.');
        } else {
            console.error('❌ No se encontró el contenedor del grid (<div class="grid...">) en index.html');
        }
    } else {
         console.error('❌ index.html no existe en la carpeta Modelos_Alternativos.');
    }

    console.log('Proceso de miniaturas finalizado.');
}

generateThumbnailsAndUpdateIndex().catch(console.error);
