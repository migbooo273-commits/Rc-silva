// Função para mudar o estilo da barra de navegação ao rolar a página
window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    // Se a rolagem passar de 50 pixels, adiciona a classe 'scrolled'
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Função para validar se o número de telefone foi configurado (Apenas para teste)
document.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.includes('5500000000000')) {
            console.warn("Atenção: Você ainda não configurou o número de WhatsApp no HTML!");
        }
    });
});