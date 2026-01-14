// 1. Efeito de transparência na barra de navegação ao rolar
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.background = '#0b0b64'; // Azul oficial ao descer
        navbar.style.transition = '0.5s';
        document.querySelector('.logo-nav span').style.color = 'white';
        document.querySelectorAll('.btn-entrar-contato').forEach(btn => {
            btn.style.color = 'white';
            btn.style.borderColor = 'white';
        });
    } else {
        navbar.style.background = 'white'; // Volta para branco no topo
        document.querySelector('.logo-nav span').style.color = '#0b0b64';
        document.querySelectorAll('.btn-entrar-contato').forEach(btn => {
            btn.style.color = '#0b0b64';
            btn.style.borderColor = '#0b0b64';
        });
    }
});

// 2. Mensagem de confirmação ao clicar no botão de currículo
const btnCV = document.querySelector('.btn-whatsapp-cv');
if (btnCV) {
    btnCV.addEventListener('click', () => {
        console.log("Redirecionando para o WhatsApp do RH da RC Silva...");
    });
}
