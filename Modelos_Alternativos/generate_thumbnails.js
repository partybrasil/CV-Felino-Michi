const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');
const cheerio = require('cheerio');

const DIRECTORY = __dirname;
const INDEX_FILE = path.join(DIRECTORY, 'index.html');

// Define known styles/tags for the variants based on filenames
const METADATA_MAP = {
    'index-bootstrap.html': { title: 'Bootstrap 5', badge: 'Clásico', desc: 'Versión robusta y corporativa usando los componentes tradicionales de Bootstrap 5.' },
    'index-daisyui-cyberpunk.html': { title: 'Cyberpunk', badge: 'DaisyUI', desc: 'Estética distópica, colorida y atrevida de neón de la mano del tema Cyberpunk nativo.' },
    'index-retro-nes.html': { title: 'NES 8-Bits', badge: 'Nostalgia', desc: 'Diseño pixel-art recordando a las aventuras de la consola clásica de Nintendo gracias a NES.css.' },
    'index-tailwindcss.html': { title: 'Tailwind CSS', badge: 'Moderno', desc: 'Diseño estructurado y limpio usando clases utilitarias de Tailwind. Balance perfecto entre espaciado y legibilidad.' },
    'index-terminal-hacker.html': { title: 'Terminal Hacker', badge: 'Geek', desc: 'Para los caseros devs. Un currículum minimalista que simula la ventana de código de una terminal UNIX.' },
    'index-windows98.html': { title: 'Windows 98', badge: 'Vintage', desc: 'Ventanas grises, botones táctiles y estética de PC de los 90 para los amantes de 98.css.' }
};

// Generate an aesthetic fallback if unknown variant
const getMetadata = (filename) => {
    if (METADATA_MAP[filename]) return METADATA_MAP[filename];
    
    // Auto-generate for new files (e.g., "index-materialize.html" -> "Materialize")
    let rawName = filename.replace('index-', '').replace('.html', '');
    let title = rawName.charAt(0).toUpperCase() + rawName.slice(1);
    
    return {
        title: title,
        badge: 'Nuevo',
        desc: `Diseño alternativo basado en ${title}.`
    };
};

async function generateThumbnailsAndUpdateIndex() {
    console.log('Iniciando proceso de actualización de miniaturas e índice...');

    // 1. Get all alternative HTML files (exclude index.html)
    const files = fs.readdirSync(DIRECTORY).filter(file => file.endsWith('.html') && file !== 'index.html');
    
    if (files.length === 0) {
        console.log('No se encontraron variantes .html.');
        return;
    }

    // 2. Start Puppeteer
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    // Simulate a standard desktop screen for the screenshot
    await page.setViewport({ width: 1280, height: 800 });

    const generatedCardsHtml = [];

    // 3. Process each variant
    for (const file of files) {
        console.log(`Procesando: ${file}...`);
        const filePath = path.join(DIRECTORY, file);
        const fileUrl = `file://${filePath}`;
        
        // Define screenshot output path (e.g. thumb-index-bootstrap.jpg)
        const thumbName = `thumb-${file.replace('.html', '.jpg')}`;
        const thumbPath = path.join(DIRECTORY, thumbName);

        try {
            // Load page and wait for network/dom to settle
            await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 10000 });
            
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
                    <img src="${thumbName}" alt="Miniatura de ${meta.title}" class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500">
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

    // 4. Update index.html
    console.log('Actualizando index.html con el nuevo grid...');
    if (fs.existsSync(INDEX_FILE)) {
        const indexHtml = fs.readFileSync(INDEX_FILE, 'utf-8');
        const $ = cheerio.load(indexHtml);

        // We assume the grid container has this specific class structure based on previous generation:
        // Or we just find the grid container inside main
        const gridContainer = $('main .grid');
        
        if (gridContainer.length > 0) {
            // Empty existing cards
            gridContainer.empty();
            // Append new generated cards
            gridContainer.append(generatedCardsHtml.join('\n'));
            
            // Write back
            fs.writeFileSync(INDEX_FILE, $.html());
            console.log('✅ index.html actualizado exitosamente.');
        } else {
            console.error('❌ No se encontró el contenedor del grid (<div class="grid...">) en index.html');
        }
    } else {
         console.error('❌ index.html no existe en la carpeta Modelos_Alternativos.');
    }

    console.log('Proceso finalizado.');
}

generateThumbnailsAndUpdateIndex().catch(console.error);
