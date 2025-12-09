# Catedral da Adoração - ChurchProject

Este projeto é uma aplicação web desenvolvida como atividade avaliativa para a disciplina de Desenvolvimento Web (Frontend). O sistema consiste em um site institucional para uma igreja, desenvolvido utilizando a biblioteca **React** e focado em componentização, performance e organização de código.

## 📋 Sobre o Projeto

O **ChurchProject** é uma Single Page Application (SPA) que apresenta a "Catedral da Adoração". O objetivo foi criar uma interface moderna, responsiva e de fácil navegação, onde os membros e visitantes podem visualizar horários de cultos, células, avisos e uma galeria de fotos interativa.

### 🚀 Tecnologias Utilizadas

* **React 19** (via Vite): Biblioteca principal para construção da interface.
* **React Router Dom**: Para gerenciamento de rotas e navegação SPA.
* **CSS Modules**: Para estilização modular e escopada, evitando conflitos de classes.
* **Lucide React**: Para ícones leves e modernos.
* **JavaScript (ES6+)**: Lógica de interação e manipulação de estado.

---

## ✅ Requisitos Acadêmicos Atendidos

Este projeto foi desenvolvido seguindo estritamente os requisitos da avaliação:

1.  **Utilização de Props (0,5)**:
    * Implementado na passagem de dados para componentes como o `Footer` (recebendo o ano dinamicamente via prop) e componentes de UI como `Icons` (recebendo propriedades de tamanho e cor).

2.  **Componentização e SPA (1,0)**:
    * O projeto utiliza `react-router-dom` configurado no arquivo `App.jsx`.
    * A navegação entre páginas (Início, Galeria, Ministérios, etc.) ocorre sem recarregar a página (comportamento SPA).
    * Uso de hooks como `useNavigate` e `useLocation` para gerenciar navegação interna (âncoras) e externa (rotas).

3.  **HTML, CSS e JavaScript (0,5)**:
    * Estrutura semântica (HTML5).
    * CSS moderno com variáveis globais (`src/styles/global.css`) para cores e espaçamentos.
    * JavaScript utilizado para lógica de scroll suave, controle do menu mobile e filtros de avisos.

4.  **Estrutura de Páginas (0,5)**:
    * O sistema conta com as rotas principais exigidas:
        1.  **Home** (`/`) - Composta por componentes: Hero, Avisos, Células e Agenda.
        2.  **Galeria** (`/gallery`)
        3.  **Sobre** (`/about`)
        4.  **Ministérios** (`/ministries`)
        5.  **Contato** (`/contact`)
    * **Navbar** e **Footer** são componentes fixos persistentes em todas as rotas.

5.  **Responsividade (0,5)**:
    * O layout é totalmente responsivo, adaptando-se a dispositivos móveis, tablets e desktops.
    * Implementação de Media Queries nos módulos CSS.
    * Menu de navegação se transforma em um "Menu Hambúrguer" interativo em telas menores.

6.  **Organização de Pastas (1,0)**:
    * `src/components`: Dividido logicamente em `common` (reutilizáveis), `layout` (estruturais) e `home` (seções específicas da página inicial).
    * `src/pages`: Uma pasta dedicada para cada página/rota da aplicação.
    * `src/styles`: Estilos globais e reset.

7.  **CSS Modules (1,0)**:
    * Todos os componentes possuem seus próprios arquivos de estilo (ex: `Navbar.module.css`, `Hero.module.css`), garantindo encapsulamento e manutenção.

---

## 📂 Estrutura do Projeto

```text
src/
├── assets/            # Imagens e logotipos (React SVG, Logo JPG)
├── components/
│   ├── common/        # Componentes genéricos (ex: Icons.jsx)
│   ├── home/          # Seções da Home (Hero, Cells, Schedule, NoticeBoard)
│   └── layout/        # Componentes fixos (Navbar, Footer)
├── pages/             # Páginas da aplicação (Home, Gallery, About, etc.)
├── styles/            # CSS Global e Variáveis de tema
├── App.jsx            # Configuração de Rotas e Layout Principal
└── main.jsx           # Ponto de entrada da aplicação
