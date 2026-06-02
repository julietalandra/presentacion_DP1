# ⏳ Coloquio: Deontología Profesional 1 
**Filosofía Moral y Fronteras Tecnológicas: Recorrido Cronológico del Ethos Profesional**

---

[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black&style=flat-square)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-3178C6?logo=typescript&logoColor=white&style=flat-square)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-6.0-646CFF?logo=vite&logoColor=white&style=flat-square)](https://vitejs.dev/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.0-F107A3?logo=framer&logoColor=white&style=flat-square)](https://motion.dev/)

Este repositorio aloja la estructura, el código fuente y los recursos interactivos de la presentación web desarrollada para el coloquio de promoción de la materia **Deontología Profesional 1** (5to semestre). 

El proyecto está diseñado como una **Línea de Tiempo Interactiva, Continua y Dinámica**, con el objetivo de ofrecer un recorrido visual, inmersivo y académico a través de la evolución histórica de la ética y la moral, conectando de forma orgánica el pensamiento clásico con los dilemas éticos y tecnológicos más críticos de la actualidad.

🎨 **Diseño Original de Figma:** [Ver en Figma](https://www.figma.com/design/7XYPzufjpwKLv1VClnKXFw/Presentaci%C3%B3n-para-coloquio)

---

## 🚀 Características Clave
* **Línea de tiempo fluida y no deformable:** Adaptada para resoluciones de pantalla ancha sin distorsiones en textos ni gráficos vectoriales.
* **Micro-animaciones fluidas:** Desarrolladas con Framer Motion (`motion/react`) para transiciones de diapositivas tipo carrusel, efectos de pulso en nodos y un barrido dinámico de la línea de tiempo.
* **Control interactivo por teclado:** Navegación optimizada mediante flechas direccionales (`←` `→`, `↑` `↓`) y barra espaciadora para una exposición oral sin fricciones.
* **Estética Cyber-Minimalista:** Paleta de colores en tonos oscuros profundos con acentos neón y efectos de resplandor (`glow`) para emular interfaces de tecnología avanzada.
* **Botón de retorno rápido:** Una diapositiva final interactiva de agradecimiento que permite reiniciar la exposición al instante con un solo clic.

---

## 📚 Estructura Temática de la Presentación
El contenido académico está estructurado siguiendo las unidades oficiales de la cátedra, permitiendo un hilo conductor que va desde los cimientos de la filosofía moral hasta la era del algoritmo:

### 🧩 Unidad 1: Cimientos Teóricos
* **La Complejidad de lo Moral:** La distinción técnica entre Moral (costumbres y normas) y Ética (reflexión filosófica racional), y la definición de los cuatro niveles de reflexión ética según Ricardo Maliandi.
* **El Nacimiento de la Ética Clásica:** Del relativismo ético combatido por Sócrates (Intelectualismo moral) a la ética de la virtud teleológica de Aristóteles (Eudaimonía, hábito y el término medio).

### ⚖️ Unidad 2: Éticas Normativas
* **La Ética del Deber (Immanuel Kant):** Giro deontológico, la buena voluntad como bien supremo, obrar por deber y la formulación del Imperativo Categórico.
* **El Utilitarismo (Bentham y Mill):** Filosofía consecuencialista guiada por el Principio de Utilidad: maximizar el bienestar colectivo y la mayor felicidad para el mayor número de personas.

### 🌐 Unidad 3: Evolución Social
* **Modernidad y Progreso:** La razón ilustrada, la tecnificación de la vida social y el surgimiento del mito del progreso indefinido.
* **Posmodernidad y Modernidad Líquida (Zygmunt Bauman):** Caída de los grandes relatos, fragmentación social, identidad de consumo y la flexibilización de los vínculos humanos.
* **Ética Aplicada y RSE:** La irrupción de la ética aplicada en las organizaciones y el rol de la Responsabilidad Social Empresarial frente al impacto ambiental y social.

### 💻 Unidad 4: Ética y Tecnología
* **La Ética de los Datos:** La digitalización total, la información como recurso económico primordial y la distinción ético-legal entre datos privados y sensibles.
* **Tecnología, Sesgos e IA:** Desmitificación del algoritmo como agente neutral; la automatización de sesgos humanos, la equidad en sistemas inteligentes y los desafíos legales/éticos en Propiedad Intelectual aplicados a la IA generativa.

---

## 🛠️ Tecnologías Utilizadas
La aplicación está construida sobre un stack moderno que asegura rendimiento, fluidez gráfica y portabilidad:
* **React 18** (arquitectura de componentes SPA).
* **Vite** (servidor de desarrollo y empaquetador veloz).
* **TypeScript** (tipado estricto para robustez del código).
* **Framer Motion** (motor de animaciones de alto rendimiento).
* **Tailwind CSS** (estilizado rápido, responsivo y flexible).

---

## 💻 Instrucciones para Ejecución Local

Si deseas clonar y ejecutar esta presentación en tu computadora:

### Pre-requisitos
Es necesario tener instalado **Node.js** (versión 18 o superior).

### Paso 1: Clonar e instalar dependencias
Entra en la carpeta raíz del proyecto y ejecuta:
```bash
npm install
```

### Paso 2: Iniciar servidor de desarrollo
Ejecuta el siguiente comando para abrir la presentación localmente:
```bash
npm run dev
```
La consola te indicará la URL local (usualmente `http://localhost:5173`) donde podrás ver y navegar la presentación.

### Paso 3: Compilar para producción
Para generar los archivos listos para subirse a un hosting web (Vercel, Netlify, GitHub Pages, etc.):
```bash
npm run build
```
Los archivos optimizados se guardarán en la carpeta `dist/`.

---

## 👩‍💻 Equipo de Trabajo (Expositoras)
* **Alegre, Gabriela**
* **Martinez, Ximena**
* **Vargas, Ana Clara**
* **Landra, Julieta**

---
*Coloquio realizado para la cátedra de Deontología Profesional 1.*