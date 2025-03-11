const canvas = document.getElementById('gameCanvas');
        const ctx = canvas.getContext('2d');
        //por algum motivo ele buga pra iniciar no web view. obg visual code

        // Carregar a imagem da nave
        const naveImg = new Image();
        naveImg.src = 'nave.png'; // Substitua pelo caminho da sua imagem

        // Posição e velocidade da nave
        let nave = {
            x: canvas.width / 2,
            y: canvas.height - 50,
            speed: 5,
            width: 50,
            height: 50
        };

        // Controle de teclas
        let keys = {};
        window.addEventListener('keydown', (e) => keys[e.key] = true);
        window.addEventListener('keyup', (e) => keys[e.key] = false);

        // Função para atualizar o jogo
        function update() {
            // Movimentação da nave
            if (keys['ArrowLeft'] && nave.x > 0) nave.x -= nave.speed;
            if (keys['ArrowRight'] && nave.x < canvas.width - nave.width) nave.x += nave.speed;

            // Limpar o canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Desenhar a nave
            ctx.drawImage(naveImg, nave.x, nave.y, nave.width, nave.height);

            // Loop de animação
            requestAnimationFrame(update);
        }

        // Garantir que a imagem carregue antes de iniciar
        naveImg.onload = () => {
            update();
        };