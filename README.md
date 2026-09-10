<div align="center">
  <img src="public/imagen redmi.jpg" alt="Disney App Preview" width="100%"/>

  <h1>✨ 🔮 Galería Disney Animada 🔮 ✨</h1>
</div>

---

## 🏰 Bienvenida a la Disney App
Te damos la bienvenida a **Disney App**, una plataforma interactiva y moderna inspirada en el universo animado de Disney. Este proyecto recopila y exhibe de forma dinámica una amplia galería de personajes clásicos y modernos, permitiendo explorar sus detalles, tarjetas informativas y universos de manera fluida y atractiva.

---

## 🚀 Características Principales
* **Diseño Responsivo:** Adaptado completamente para dispositivos móviles, tablets y ordenadores de escritorio.
* **Interfaz Dinámica:** Navegación fluida y componentes interactivos construidos con React.
* **Consumo de API:** Integración eficiente de datos mediante Axios para mostrar la información detallada de cada personaje en tiempo real.
* **Estilos Modernos:** Maquetación limpia y atractiva utilizando Tailwind CSS.

---

## 📄 Páginas de la Aplicación

### 1. 👥 Página de Personajes Disney
Basada en la interfaz principal mostrada en la aplicación, esta sección incluye un listado completo en formato de tarjetas con los personajes de Disney (como *Achilles*, *Abigail the Cow*, *.GIFfany*, *Ahadi*, entre otros), mostrando sus respectivos identificadores únicos (**ID**) y avatares detallados extraídos directamente del catálogo oficial.

### 2. 💻 Sobre Mí (Desarrollador Freelance)
Una sección personal y profesional dedicada a presentar mi perfil como **desarrollador frontend freelance**, destacando la experiencia técnica adquirida en el desarrollo web moderno, la pasión por la creación de interfaces interactivas y la resolución de problemas enfocada en la experiencia de usuario.

---

## 🛠️ Herramientas y Tecnologías Usadas

| Tecnología / Herramienta | Logotipo / Badge | Propósito Principal |
| :--- | :---: | :--- |
| **React** | ![React](https://img.shields.io/badge/React-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) | Librería principal para la construcción de componentes reutilizables. |
| **JavaScript (ES6+)** | ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) | Lógica de programación y gestión de estados de la aplicación. |
| **Tailwind CSS** | ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white) | Framework de estilos CSS para un diseño ágil y adaptable. |
| **Axios** | ![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white) | Cliente HTTP basado en promesas para consumir la API de personajes. |
| **HTML5** | ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) | Estructura semántica base de las páginas web. |
| **Git** | ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) | Sistema de control de versiones local. |
| **GitHub** | ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) | Repositorio remoto y colaboración en código fuente. |
| **Vercel** | ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white) | Plataforma de despliegue continuo y hosting web. |
| **Visual Studio Code** | ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white) | Entorno de desarrollo integrado (IDE) principal. |

---

## 📂 Estructura y Carpeteo del Proyecto

```text
disney-app/
├── public/
│   ├── favicon.ico
│   └── assets/
│       ├── imagen redmi.jpg
│       └── pagina disney.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── CharacterCard.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── CharactersPage.jsx
│   │   └── AboutMePage.jsx
│   ├── services/
│   │   └── api.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── package.json
├── tailwind.config.js
└── README.md

## 📫 Perfiles Profesionales y Contacto

Puedes conectar conmigo o revisar más sobre mi trabajo a través de los siguientes enlaces:

* **GitHub:** [![GitHub](https://img.shields.io/badge/GitHub-JhojannSossa-181717?style=for-the-badge&logo=github)](https://github.com/JhojannSossa)
* **LinkedIn:** [![LinkedIn](https://img.shields.io/badge/LinkedIn-Jhojann_Sossa-0A66C2?style=for-the-badge&logo=linkedin)](https://www.linkedin.com/in/jhojannsossa)

## ⚙️ Instalación y Puesta en Marcha

Sigue estos sencillos pasos para clonar, configurar y ejecutar este proyecto localmente en **Visual Studio Code**:

### 1. Prerrequisitos
Asegúrate de tener instalado en tu equipo:
* [Node.js](https://nodejs.org/) (versión 16.0 o superior recomendada).
* [Git](https://git-scm.com/) para el control de versiones.

### 2. Clonar el Repositorio
Abre tu terminal (o la terminal integrada de Visual Studio Code) y ejecuta el siguiente comando:

```bash
git clone [https://github.com/JhojannSossa/disney-app.git](https://github.com/JhojannSossa/disney-app.git)

3. Abrir el Proyecto en Visual Studio Code
Navega a la carpeta del proyecto e ábrela en tu editor:

Bash
cd disney-app
code .

4. Instalar Dependencias
Una vez dentro de Visual Studio Code, abre la terminal integrada (Ctrl + Shift + ~ o `Ctrl + ~`) y ejecuta el comando para instalar las dependencias mediante npm:

Bash
npm install

5. Ejecutar el Servidor de Desarrollo
Para poner en marcha la aplicación en modo de desarrollo local (normalmente en http://localhost:5173 si usas Vite, o http://localhost:3000 con React Scripts), ejecuta:

Bash
npm run dev