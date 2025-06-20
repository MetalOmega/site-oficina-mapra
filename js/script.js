// Este código garante que o script só execute depois que o DOM (HTML) estiver completamente carregado.
// É uma prática comum e boa ao usar jQuery.
$(document).ready(function() {

    // 1. Rolagem Suave entre Seções (Âncoras) com jQuery
    // Seleciona todos os links na navegação que apontam para IDs na mesma página
    $('#main-nav a[href^="#"]').on('click', function(event) {
        event.preventDefault(); // Previne o comportamento padrão do link (salto abrupto)

        var targetId = $(this).attr('href'); // Pega o ID da seção alvo (ex: "#servicos")
        var targetOffset = $(targetId).offset().top; // Pega a posição vertical do elemento alvo

        // Anima a rolagem da página até o elemento alvo
        $('html, body').animate({
            scrollTop: targetOffset
        }, 800); // 800 milissegundos para a duração da animação

        // No mobile, após clicar em um link, esconde o menu hambúrguer
        if ($('#main-nav').hasClass('show-mobile-nav')) {
            $('#main-nav').removeClass('show-mobile-nav');
            // Você pode querer esconder o botão de toggle também se ele mudar de ícone
        }
    });

    // 2. Transições de Entrada de Seções ao Rolar (Intersection Observer - JS Nativo)
    // Usamos a API Intersection Observer (JavaScript nativo, pois é a forma mais eficiente)
    // para adicionar classes que disparam animações CSS.
    const sections = document.querySelectorAll('section'); // Seleciona todas as tags <section>

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Se a seção está visível, adiciona a classe 'show' e remove 'hide'
                // Usando jQuery para manipulação de classes aqui, mas poderia ser JS nativo
                $(entry.target).removeClass('hide').addClass('show');
                observer.unobserve(entry.target); // Para de observar a seção uma vez que ela apareceu
            }
        });
    }, {
        // Threshold: 0.1 significa que a callback será executada quando 10% da seção estiver visível
        // Ajuste esse valor conforme sua preferência
        threshold: 0.1
    });

    // Adiciona a classe 'hide' (esconde) a todas as seções no carregamento
    // E começa a observá-las
    sections.forEach(section => {
        $(section).addClass('hide'); // Adiciona a classe 'hide'
        observer.observe(section); // Inicia a observação
    });

    // 3. Menu Hambúrguer Responsivo (jQuery)
    // Ativa/desativa a visibilidade do menu de navegação no mobile
    $('#menu-toggle').on('click', function() {
        $('#main-nav').slideToggle(300, function() {
            // Adiciona/remove uma classe para controle de estado via CSS se necessário
            $(this).toggleClass('show-mobile-nav');
        });
    });

    // Esconde o menu hambúrguer ao redimensionar para desktop (se ele estiver aberto)
    $(window).on('resize', function() {
        if ($(window).width() > 767.98) { // Acima do breakpoint de mobile do Bootstrap
            $('#main-nav').css('display', ''); // Reseta o display para o padrão do CSS
            $('#main-nav').removeClass('show-mobile-nav');
        }
    });


    // 4. Feedback Básico do Formulário (jQuery - Exemplo)
    // Isso é apenas um exemplo visual, SEM ENVIO REAL dos dados para um servidor.
    // Para envio real, você precisaria de um backend ou um serviço de terceiros (como Netlify Forms).
    $('#contact-form').on('submit', function(event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        var submitButton = $(this).find('button[type="submit"]');
        var originalButtonText = submitButton.text();

        submitButton.prop('disabled', true).text('Enviando...'); // Desabilita e muda o texto

        // Simula um "envio" de 2 segundos (substitua pela sua lógica real)
        setTimeout(function() {
            alert('Mensagem enviada com sucesso! (Este é um exemplo visual)');
            submitButton.prop('disabled', false).text(originalButtonText); // Habilita e restaura o texto
            $('#contact-form')[0].reset(); // Limpa o formulário
        }, 2000);
    });

}); // Fim de $(document).ready
