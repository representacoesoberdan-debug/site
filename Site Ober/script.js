document.addEventListener('DOMContentLoaded', () => {
    const reveals = document.querySelectorAll('.reveal');

    // Função para disparar a animação de entrada
    const triggerReveal = () => {
        reveals.forEach((el, index) => {
            setTimeout(() => {
                el.classList.add('active');
            }, index * 200); // Delay cascata entre os elementos
        });
    };

    // Inicia a animação assim que o DOM estiver pronto
    triggerReveal();

    // Exemplo de interação no botão principal
    const btnSolicitar = document.getElementById('btn-solicitar');
    btnSolicitar.addEventListener('click', (e) => {
        console.log("Usuário clicou para solicitar representação.");
        // Aqui poderíamos abrir um modal ou rolar para um formulário
    });
});

const toggle = document.getElementById('menu-toggle');
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => { toggle.checked = false; });
});