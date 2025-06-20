# ⚙️ Oficina Mecânica Mapra - Site Projeto Fatec Informática para Negócios 06/2025

Este é um projeto de website moderno, minimalista, responsivo e acessível para uma oficina mecânica mapra, desenvolvido como parte do meu aprendizado em Front-end na faculdade.

---

## 🎯 **Objetivo do Projeto**

O principal objetivo deste projeto é demonstrar a construção de um website estático utilizando boas práticas de desenvolvimento web, com foco em:

- **Design Minimalista e Moderno:** Estética limpa, com cores neutras e espaçamento inteligente para uma experiência de usuário agradável.
- **Responsividade:** Adaptação perfeita para diferentes tamanhos de tela (desktop, tablet, mobile) utilizando o sistema de Grid do Bootstrap e CSS.
- **Acessibilidade:** Desenvolvido com semântica HTML e práticas de CSS que garantem a navegabilidade e compreensão por tecnologias assistivas (como leitores de tela).
- **Performance:** Otimização para carregamento rápido, usando CDNs e mantendo o código conciso.
- **Integração de Tecnologias:** Demonstração do uso combinado de HTML, CSS, Bootstrap, JavaScript e jQuery.

---

## ✨ **Funcionalidades Destaque**

- **Navegação Rápida:** Menu de navegação claro com rolagem suave para as seções da página.
- **Design Adaptável:** Layout que se ajusta automaticamente a qualquer dispositivo.
- **Animações de Entrada:** Seções que aparecem com um efeito suave ao rolar a página, adicionando um toque de dinamismo sem comprometer a leveza.
- **Formulário de Contato:** Estrutura de formulário visualmente integrada, pronta para ser conectada a um serviço de envio (ex: Netlify Forms, Formspree).
- **Base para PWA (Progressive Web App):** Inclui o arquivo `manifest.json`, que é a base para futuras implementações de funcionalidades PWA (como instalação na tela inicial e caching offline).

---

## 🚀 **Tecnologias Utilizadas**

- **HTML5:** Para a estrutura semântica e acessível do conteúdo.
- **CSS3:** Para toda a estilização, cores neutras, espaçamento e as animações de entrada.
- **Bootstrap 5.3:** Utilizado de forma estratégica para:
  - **Sistema de Grid Responsivo:** Para organizar o layout das seções e cards de serviço de forma eficiente em diferentes tamanhos de tela.
  - **Classes de Utilidade:** Para ajustes rápidos de espaçamento, alinhamento e display diretamente no HTML.
  - _Nota:_ As classes visuais padrão do Bootstrap foram **sobrescritas** pelo CSS personalizado para manter a estética minimalista e única do projeto.
- **JavaScript:** Para funcionalidades interativas e aprimoramento da experiência do usuário, como:
  - Animações de entrada de seções (via `IntersectionObserver`).
  - Comportamento do menu "hambúrguer" no mobile.
  - Feedback visual básico no formulário de contato.
- **jQuery 3.7.1:** Incluído para demonstrar seu uso conforme requisito da matéria, simplificando:
  - A rolagem suave para links internos.
  - Manipulação de eventos e classes no DOM.

---

## 📁 **Estrutura do Projeto**

/site-oficina-mapra/
├── index.html # Página principal do site
├── manifest.json # Arquivo de manifesto do PWA
├── favicon.ico # Ícone do site
├── css/
│ └── style.css # Estilos CSS personalizados e sobrescritas do Bootstrap
├── js/
│ └── script.js # Lógica JavaScript (com jQuery e JS nativo)
├── img/ # Imagens e ícones do projeto
│ └── fachada-oficina-mapra-400-300.jpg
│ └── par-pistoes-1500-600.jpg
│ └── logo-oficina-mapra.png
│ └── oficina-mapra-favicon.ico
└── service-worker.js # Script do Service Worker para funcionalidades PWA (futuro)

---

## ⚙️ **Como Visualizar Localmente**

1.  **Clone o Repositório:**

    ```bash
    git clone [https://github.com/MetalOmega/site-oficina-mapra](https://github.com/MetalOmega/site-oficina-mapra)
    ```

2.  **Navegue até a Pasta do Projeto:**
    ```bash
    cd SEU_REPOSITORIO
    ```
3.  **Abra o `index.html`:** Simplesmente abra o arquivo `index.html` no seu navegador favorito.

---

## 🌐 **Visualizar Online (Deploy com Surge.sh)**

Este projeto está hospedado gratuitamente utilizando o [Surge.sh](https://surge.sh/).

**URL do Projeto Online:** [http://oficina-mapra.surge.sh](http://oficina-mapra.surge.sh)

---

## 🤝 **Contribuição**

Sinta-se à vontade para explorar o código. Sugestões e feedback são bem-vindos!

---

## 📧 **Contato**

[Rafael Andrade Ferreira da Silveira]<br/>
[metalomega@gmail.com]

Grupo formado com os alunos:

Matheus Yokota Domingos<br/>
André Fabri Fernandes Silva

---
