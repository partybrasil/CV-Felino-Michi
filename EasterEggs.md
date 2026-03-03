# 🐾 Guía de Easter Eggs: CV Felino de Michi

¡Bienvenido al manual secreto del CV de Michi! Aquí encontrarás todas las sorpresas ocultas, interacciones divertidas y modos especiales que hemos implementado. 

---

## 🖱️ Interacciones Base & UI Diferente

### 1. 🐾 Rastro de Huellas (Tracker 3D)
Michi nunca le quita el ojo de encima a las visitas.
- **PC:** Mientras mueves el ratón, irán apareciendo pequeñas **huellas de garritas** (🐾) que se desvanecen. Además, la cabeza de Michi (el avatar principal) seguirá tu movimiento en 3D (`rotateX` / `rotateY`).
- **Móvil:** Si deslizas tu dedo por la pantalla (`touchmove`), verás aparecer el rastro de huellitas.

### 2. 👋 Spam de Caricias (El Límite de la Paciencia)
A Michi le gustan los mimos, pero tiene un límite.
- **Acción:** Haz clic o toca rápidamente 5 veces seguidas sobre la foto de Michi.
- **Efecto:** Michi se enfadará, se dará la vuelta (animación 3D) y aparecerá un bocadillo de texto quejándose: *"¡Basta de mimos, estoy ocupado cazando moscas!"*. Solo durará 3 segundos antes de volver a la normalidad.

---

## ⌨️ Códigos Secretos & Poderes

### 3. 🐈 El Súper Poder "MIAU"
Michi puede hacer vibrar tu dispositivo con un solo maullido.
- **Teclado (PC):** Escribe literalmente la palabra **`miau`** en cualquier momento.
- **Táctil (Móvil):** Mantén pulsada la foto del avatar ininterrumpidamente durante 2 segundos.
- **Efecto:** Sonará un maullido fuerte, toda la pantalla temblará (`shake`) y un gran cartel negro te anunciará: *"¡Súper Poder Activado! 🐱💥"*.

### 4. 🔦 Modo Visión Nocturna / Caza Nocturna
La oscuridad es el hábitat natural de Michi...
- **Teclado (Konami Code):** Pulsa la clásica secuencia: `Arriba, Arriba, Abajo, Abajo, Izquierda, Derecha, Izquierda, Derecha, B, A`.
- **Táctil (Móvil):** Toca 7 veces seguidas y rápido el título principal ("Michi: Inquilino Senior...").
- **Efecto:** La pantalla entera se volverá negra. Tu cursor (o dedo) se convertirá en una linterna con radio luminoso que dejará ver el contenido. Además, la "linterna" revelará recortes de garras invisibles en el fondo.

---

## ⌨️ Teclas Inmediatas

### 5. 🔴 Modo Gatito con Láser (Pulsar Tecla `L`)
Activa el modo persecución extrema.
- **Acción:** Pulsa la tecla **`L`** en tu teclado.
- **Efecto:** Tu ratón se vuelve el puntero láser (y lo puedes apagar pulsándolo de nuevo). **Bonus interactivo:** Si pasas el láser por encima de las cajas *"Salud Total"* o *"Solvencia Humana"*, Michi arqueará mucho más el cuello hacia ellas, con un ligero zoom, como si fuera a saltar y cazarlas.

### 6. 🌌 Efecto Gravedad Cero (Pulsar Tecla `G`)
La física de Newton vs Michi tirando cosas.
- **Acción:** Pulsa la tecla **`G`** en tu teclado.
- **Efecto:** Se carga el motor *Matter.js*. De repente, todas las `.card` y módulos flotantes de la página caen de golpe bajo el efecto de la gravedad. ¡Usa el ratón para arrastrarlas y tirarlas por la pantalla! Arriba aparecerá un botón rojo para "Recargar para salir".

---

## 🔥 Modos Visuales y Scroll

### 7. ⚠️ Modo Caos & Limpieza
Simula un salto repentino a tu escritorio.
- **Acción:** Hay un pequeño botón rojo anclado arriba a la derecha que dice **"⚠️ Modo Caos"**. Al tocarlo, todos los elementos (tarjetas, párrafos, viñetas) giran, se inclinan y se desencajan aleatoriamente de la cuadrícula. 
- **Reparación:** El botón rojo desaparecerá y surgirá uno verde de **"🧹 Limpiar desastre"** para restablecer todo a su lugar y rotación normal de inmediato.

### 8. 😴 El "Modo Siesta"
Los gatos duermen 16 horas. La web también.
- **Acción:** No muevas el ratón, no hagas scroll, ni toques la pantalla táctil durante **10 segundos** de absoluta e ininterrumpida inactividad.
- **Efecto:** Una capa oscura tenue cubrirá la web, y un encantador **`Zzz`** animado e intermitente empezará a salir de la foto de perfil de Michi. ¡Al menor movimiento tuyo, se despertará asustado y con los ojos grandes (con un zoom `surprised-cat`).

### 9. 🥐 Amasadores Laterales (Scroll)
Contador de velocidad visual de tus dedos.
- **Acción:** Haz scroll rápido por la página web.
- **Efecto:** En el lado derecho verás la silueta semi-transparente de dos patitas. Cuanto más rápido gires la rueda del ratón o hagas el gesto de bajar, ¡más velozmente animarán y amasarán las patitas sincronizadas!

### 10. 😻 Barra de Ronroneo (Footer)
Progreso amigable de validación.
- **Efecto:** Fíjate arriba del todo. Hay una barrita de progreso degradada de rosa a azul. Se va llenando a medida que bajas por la web. Cuando haces scroll hasta el fondo absoluto, aparecerá de golpe un cartel de estatus de ronroneo: *"Nivel de satisfacción humana: Máximo"*.

---

## 🎭 UI Dinámica (Sorpresas Inesperadas)

### 11. 🐾 Ataque de Patita a los Botones
Michi odia el letargo y la inacción.
- **Acción (Hover/Long Press):** Si mantienes el cursor quieto (o pulsas de forma prolongada en móvil) durante **0.5 segundos** sobre un botón importante (EJ: "Contactar a mi humano"), se lanzará el ataque inmediatamente.
- **Acción (Click/Tap):** Si tocas o haces clic en el botón de forma normal, el enlace se interceptará mostrando una cómica cuenta atrás de "3... 2... 1...".
- **Efecto:** De golpe, una pata negra lateral saldrá disparada para empujar la UI del botón con fuerza (`shake`), dándole un manotazo rápido y escondiéndose inmediatamente de nuevo. Irá acompañado del texto: *"¡Si no lo vas a pulsar tú, lo pulso yo!"* flotando sutilmente sobre el botón. Si activaste el modo Click/Tap, **se abrirá el enlace deseado justo después del zarpazo**.

### 12. 🌐 Traductor Michi-Humano (Toggle)

La web no está solo para humanos.
- **Acción:** Arriba a la izquierda, hay un elegante interruptor/deslizador estilo iOS llamado *"Miau Mode"*.
- **Efecto:** Al encenderlo, literalmente **todos** los textos legibles, párrafos, subtítulos y celdas de tabla se reescriben a nivel script generativo en repetidos "Miau", "Prrr" y "Mraw". Todo sigue en su mismo formato pero en lenguaje felino puro. Puedes desactivarlo y la web restaurará y recordará lo que decía la versión en español de forma mágica.

### 13. 📦 Caja de Schrödinger (Pie de Página)
Un botón misterio al más puro estilo de física cuántica y gatos.
- **Acción:** Debajo del aviso legal hay un ícono fijo: **📦❓**. Cada vez que lo pinchas o tocas tirará unos dados, arrojando 1 de 4 resultados:
  1. Aparece un pez de la nada y se va volando (`🐟`).
  2. Suena un bufido de gato enojado a través de los altavoces de sorpresa.
  3. ¡Puff! Aparece el ícono de viento ráfaga/humo de la nada (`💨`); estabas equivocado, no hay gato dentro de la caja.
  4. La caja ha derivado a otro universo web, y lanza en una pestaña nueva un famoso video gracioso en YouTube sobre clips gatunos. 

---

## 🛠️ Extras para Desarrolladores & Debugging

### 14. 🕵️ Falso 404 (La Gravedad)
- **Acción:** Hay un texto ultra-pequeño casi invisible cerca de LinkedIn que dice "No hacer clic aquí (Archivo súper secreto)" que lleva a un enlace falso. Ocurriría si el usuario pulsase algún otro link `#404`. 
- **Efecto:** Se bloqueará el DOM con un modal negro gigante y revelará el famosísimo GIF del gatito tirando un vaso de la mesa intencionadamente, junto a la célebre frase: *"Yo no he sido, ha sido la gravedad"*.

### 15. ⌨️ Log / Consola y ASCII Art
Solo para inspectores curiosos y devs perspicaces.
- **Código Fuente (HTML):** Presionando Ctrl+U en PC, se verá de inmediato en la cabecera un ASCII enorme y bonito de Michi saludando a los curiosos del front-end.
- **Consola JS (F12):** La consola imprime un mensaje en azul corporativo bien grande: *"¿Buscando bugs? Aquí solo hay pulgas y código limpio. ¡Contrátame miau!"*.

---

## 🚀 Futuros Easter Eggs (Backlog de Ideas)
*Una selección de ideas y mecánicas que implementar algún día, documentadas para no perder la inspiración.*

**1. El "Radar de Orejas" (Interacción con Audio)**
- **La idea:** Si el usuario tiene el micrófono activado (con permiso), usar una librería pequeña de análisis de audio.
- **El efecto:** Si el usuario hace un ruido fuerte o le habla a la pantalla, la foto de Michi cambia a una versión con las orejas hacia atrás (alerta) o los ojos muy dilatados.
- **Toque Cómic:** Un bocadillo que diga: *"¡¿Has oído eso?! ¡Seguro que es una lata abriéndose!"*.

**2. "Zoom de Pupila" (Efecto Óptico)**
- **La idea:** Usar la posición del ratón.
- **El efecto:** Cuando el ratón está lejos de la foto, las pupilas son finas (día). A medida que el ratón se acerca a su cara, las pupilas se agrandan (modo ataque) hasta ocupar todo el ojo.

**3. El "Efecto Zoomies" (Velocidad de Scroll)**
- **La idea:** Detectar la velocidad extrema del scroll del usuario.
- **El efecto:** Si el usuario hace scroll arriba y abajo muy rápido y de forma errática, se activa el "Modo Zoomies". La pantalla empieza a vibrar, los colores se saturan y aparecen emojis de gatos corriendo por toda la interfaz con el mensaje: *"¡A las 3 de la mañana me entra la locura!"*.

**4. "La Trampa del Teclado" (Bloqueo Divertido)**
- **La idea:** Si el usuario intenta escribir o pulsa teclas al azar en cualquier parte del CV.
- **El efecto:** Se bloquea visualmente la interacción y aparece una pata de gato "dormida" tapando el puntero o una cola cruzando la pantalla. 
- **Mensaje:** *"Lo siento, el gato se ha sentado sobre el teclado. Vuelve a intentarlo cuando se despierte"*.

**5. "Marcado de Territorio" (Local Storage)**
- **La idea:** Usar el `localStorage` del navegador para recordar.
- **El efecto:** Si el usuario vuelve a visitar la web al día siguiente, Michi le recibe diferente: *"Veo que has vuelto a mi territorio... ¿Has traído chuches?"*. El color de las cajas del CV podría cambiar permanentemente según alguna interacción previa.

**6. "La Caza del Puntero" (Vibración de salto)**
- **La idea:** Al dejar el cursor quieto cerca del avatar.
- **El efecto:** Michi empieza a "menear el pompis" (animación CSS de vibración suave preparándose para saltar). Si el usuario mueve el ratón de repente, lanza un zarpazo visual que deja un rasguño temporal en la pantalla.

**7. "El Escáner de Rayos X" (Hover Técnico)**
- **La idea:** Un botón oculto o atajo.
- **El efecto:** Al activarlo, el cursor es un círculo-lupa que, al pasar sobre el CV, muestra el esqueleto (etiquetas HTML/CSS crudas, o una vista "wireframe" técnica).

**8. "El Reflejo en el Tazón"**
- **La idea:** Dibujo de un tazón de agua escondido en el footer.
- **El efecto:** Al pincharlo (pidiendo permiso de webcam), muestra el feed de la cámara web del usuario dentro del tazón de agua pero con un filtro de ondas/distorsión muy fuerte, como si el visitante se estuviera asomando al agua.

**9. El "Filtro de Lengua" (Textura Interactiva)**
- **La idea:** Al hacer hover profundo o seleccionar ciertos textos.
- **El efecto:** El fondo del texto cambia a una textura rosada (una lengua de gato) y suena un lametón.

**10. "Gravedad Selectiva" (Click & Drag)**
- **La idea:** Permitir agarrar módulos individuales y lanzarlos.
- **El efecto:** Si el usuario arrastra la tarjeta de "Salud Total" cerca de un borde, la caja se "cae" del viewport, empujada fuera de la mesa.

**11. El "Modo Pan de Molde" (Responsive Divertido)**
- **La idea:** Dependiente del tamaño de la ventana (`resize`).
- **El efecto:** Si el usuario hace la ventana ridículamente estrecha, la foto cambia a un gato acurrucado como pan de molde y dice: *"Si quepo, me quedo"*.

**12. "Invasión de Puntos Láser" (Multi-click vacío)**
- **La idea:** Hacer 5 clics rápidos en zonas del fondo donde no hay nada.
- **El efecto:** Comienzan a brotar pequeños puntos rojos aleatorios que corretean por todo el viewport. Si el usuario hace clic sobre ellos, explotan con un `"pop"`.

**13. El "Traductor de Párrafos" (Selección)**
- **La idea:** Al sombrear texto con el ratón.
- **El efecto:** Aparece un tooltip "traduciendo" al gatuno. Si selecciona "Experiencia en JavaScript", el tooltip dice *"Experiencia en cazar bichos (bugs) rojos"*.

**14. "Regalo en la Puerta" (Retorno a la web)**
- **La idea:** Otra interacción con `localStorage` tras unas horas.
- **El efecto:** Al volver a entrar, hay un emoji gigante de un ratón muerto 🐭 o pájaro 🐦 tirado abajo a la izquierda. Mensaje: *"Te he traído un regalo por volver. No me des las gracias"*.

**15. "El Gato de Cheshire" (Page Visibility API)**
- **La idea:** El usuario se va a otra pestaña y olvida el CV abierto.
- **El efecto:** La web entera reduce su opacidad al `0.1` (casi imperceptible), excepto la sonrisa y los ojos del avatar. En cuanto el usuario vuelve a enfocar la ventana, ¡boom!, todo regresa rápido a opacidad `1`.

**16. "Efecto Amasado en Botones" (Long-Press)**
- **La idea:** Mejorar el long-press.
- **El efecto:** El botón no interactúa, sino que empieza a hundirse y elevarse rítmicamente por los lados, emulando un amasado, acompañado de sonido de ronroneo.

**17. "Inspector de Bigotes" (Zoom Level)**
- **La idea:** Detectar uso masivo de `Ctrl + "+"` .
- **El efecto:** Aparecen unos inmensos bigotes de gato desde los bordes del navegador tapando la pantalla con un mensaje: *"¡Vaya vista! Mis bigotes detectan a un reclutador sumamente perfeccionista"*.

**18. "Modo Catnip" (Filtro Psicodélico)**
- **La idea:** Un cheatcode escribiendo `catnip`.
- **El efecto:** La web se ondula y los colores invierten/saturan en modo `hue-rotate` loco durante 10 segundos, simulando el colocón de la hierba gatera.

**19. El "Efecto Impresora" (Print Mode)**
- **La idea:** Regla `@media print` en el CSS para los despistados que intentan imprimir o pasar a PDF el CV digital.
- **El efecto:** En el papel impreso saldrá misteriosamente una enorme huella de café/polvo pisando el texto, o un mensaje quemado en el documento: *"¿Papel? Yo prefiero las cajas de cartón"*.

**20. El "Termómetro de Ronroneo" (Battery API)**
- **La idea:** Usar la API nativa de batería del portátil/móvil.
- **El efecto:** Si tienes un 100% o carga, el Michi tiene rayos alrededor (`box-shadow` dinámica). Si queda menos del 20%, sale cansado y un letrero avisa: *"Me queda poca energía... Necesito mi siesta (y tú un cargador de pared)"*.