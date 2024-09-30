document.addEventListener('DOMContentLoaded', function () {
    const botoesProximo = document.querySelectorAll('.btn-proximo');
    const passos = document.querySelectorAll('.passo');

    botoesProximo.forEach(function (botao) {
        botao.addEventListener('click', function () {
            const proximoPasso = this.getAttribute('data-proximo');

            // Remove a classe "ativo" de todos os passos
            passos.forEach(function (passo) {
                passo.classList.remove('ativo');
            });

            // Adiciona a classe "ativo" ao passo atual
            document.getElementById(`passo-${proximoPasso}`).classList.add('ativo');
        });
    });
});
