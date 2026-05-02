const database = {
    "Ciência": [
        { q: "Por que os flamingos são cor-de-rosa?", opts: ["Porque eles nascem com pigmentos rosados na pele.", "Porque comem camarões ricos em astaxantina, que se acumula em suas penas.", "Porque o sol da África altera a cor das suas penas ao longo da vida."], ans: 1 },
        { q: "Se você pudesse encolher até o tamanho de um átomo e entrasse em um elétron, o que você mais veria?", opts: ["Um pequeno planeta orbitando um núcleo enorme.", "Uma nuvem de probabilidade difusa, sem posição definida.", "Um elétron sólido e redondo girando como uma bolinha."], ans: 1 },
        { q: "Qual é a substância mais abundante no seu corpo (considerando massa)?", opts: ["Carbono", "Oxigênio", "Hidrogênio"], ans: 1 },
        { q: "O que acontece com o tempo quando você se aproxima do horizonte de eventos?", opts: ["O tempo parece parar quando você se aproxima do horizonte de eventos", "O tempo não sofre nenhuma alteração perceptível", "O tempo não sofre nenhuma alteração perceptível"], ans: 1 },
        { q: "Qual é o ponto mais profundo da Terra?", opts: ["Fossa das Marianas", "Núcleo interno da Terra", "Mina de ouro mais profunda do mundo (Mponeng, África do Sul)"], ans: 1 },
        { q: "Qual das seguintes afirmações sobre o emaranhamento quântico está correta segundo a mecânica quântica?", opts: ["A medição de uma partícula altera instantaneamente a outra, permitindo transmissão de informação mais rápida que a luz", "O emaranhamento não permite comunicação superluminal, mas viola a localidade do realismo local", "Partículas emaranhadas compartilham a mesma onda de probabilidade até serem separadas por qualquer distância"], ans: 1 },
        { q: "Em condições normais, qual é o principal mecanismo responsável pela alta fidelidade da replicação do DNA?", opts: ["Atividade de proofreading da DNA polimerase + reparo por excisão de bases mal pareadas", "A ação exclusiva da telomerase nas extremidades dos cromossomos", "A metilação das histonas que estabiliza o genoma durante a replicação"], ans: 0 },
        { q: "Qual das seguintes substâncias tem a maior energia de ligação por átomo de oxigênio?", opts: ["O₂ (oxigênio molecular)", "CO (monóxido de carbono)", "NO (monóxido de nitrogênio)"], ans: 1 },
        { q: "O que limita a distância que podemos observar no Universo (horizonte cosmológico)?", opts: ["A velocidade da expansão do Universo ter sido maior que a velocidade da luz no passado", "A idade finita do Universo combinada com a velocidade finita da luz", "A densidade de matéria escura que absorve a luz de regiões distantes"], ans: 1 },
        { q: "O que consome mais energia no cérebro humano em repouso", opts: ["O disparo de potenciais de ação (sinais elétricos) dos neurônios", "A manutenção dos potenciais de membrana em repouso e o bombeamento iônico", "A síntese de neurotransmissores e proteínas nos corpos celulares"], ans: 1 }
    ],
    "Geografia": [
        { q: "Qual é o maior país do mundo?", opts: ["Rússia ", "O mundo", "Ocupa a tela toda"], ans: 1 },
        { q: "Onde fica o Polo Norte?", opts: ["No topo", "No frio", "Em cima do (N)"], ans: 2 },
        { q: "Quantos continentes existem?", opts: ["7", "1", "Depende da maré"], ans: 1 },
        { q: "Clique no 🔴 Japão", opts: ["JP", "🔴", "ND"], ans: 2 },
        { q: "Qual oceano é o mais pacífico?", opts: ["O que não briga", "Pacífico", "Índico"], ans: 0 },
        { q: "Se você atravessar a fronteira do Brasil com a Argentina, onde você está?", opts: ["Argentina", "Na linha ", "Perdido"], ans: 1 },
        { q: "Qual é a capital de Paris?", opts: ["P", "França", "Torre Eiffel"], ans: 0 },
        { q: "Onde o sol nasce primeiro?", opts: ["No Leste ", "No horizonte ", "No relógio"], ans: 1 },
        { q: "Qual destes é um estado líquido?", opts: ["Amazonas", "Água", "Sólido"], ans: 1 },
        { q: "", opts: ["Monte K2", "Everest", "Nenhuma"], ans: 1 }
    ],
    "Matemática": [
        { q: "Quanto é 8 + 8?", opts: ["16", "88", "0"], ans: 2 },
        { q: "Qual é o valor de Pi?", opts: ["3,14", "Carne moída", "Uma torta"], ans: 2 },
        { q: "Se você tem 3 maçãs e tira 2, com quantas você fica?", opts: ["1", "2", "5"], ans: 1 },
        { q: "Qual é o próximo número desta sequência: 2, 4, 6, 8...", opts: ["10", "Quem sabe?", "Clique aqui para ver"], ans: 2 },
        { q: "Como se escreve 11 em algarismos romanos?", opts: ["XI", "Onze", "II"], ans: 2 },
        { q: "Se 1=5, 2=25, 3=125, 4=625, quanto é 5?", opts: ["3125", "1", "500"], ans: 1 },
        { q: "Qual é a metade de 8?", opts: ["4", "3", "0"], ans: 1 },
        { q: "Quantos lados tem um círculo?", opts: ["0", "1", "2"], ans: 2 },
        { q: "Resolva: 10 + 10 x 0", opts: ["0", "10", "20"], ans: 1 },
        { q: "Qual o resultado de um número dividido por ele mesmo?", opts: ["1", "Ele Mesmo", "O número 0"], ans: 0 }
    ],
    "História": [
        { q: "Quem descobriu o Brasil?", opts: ["Pedro Álvares Cabral", "Quem chegou primeiro", "Os GPS"], ans: 1 },
        { q: "Onde foi assinada a Declaração de Independência?", opts: ["No final da página", "Na Filadélfia", "Embaixo do título"], ans: 0 },
        { q: "A Idade Média fica entre quais idades?", opts: ["10 e 20 anos", "Antiga e Moderna", "Entre a infância e a velhice"], ans: 1 },
        { q: "Como terminou a Guerra de Troia?", opts: ["Com um cavalo", "Com o 'The End'", "Com sono"], ans: 1 },
        { q: "Qual é o principal motivo do divórcio na história da monarquia?", opts: ["Falta de herdeiros", "O casamento", "Henrique VIII"], ans: 1 },
        { q: "O que Napoleão Bonaparte mais usava em suas batalhas?", opts: ["Estratégia", "Roupas", "Um chapéu"], ans: 1 },
        { q: "Por que a Muralha da China foi construída?", opts: ["Para evitar invasões", "Porque não dava para fazer uma porta", "Para gastar tijolo"], ans: 1 },
        { q: "Se um avião cai exatamente na fronteira entre os EUA e o Canadá, onde você enterra os sobreviventes?", opts: ["No Canadá", "Nos EUA", "Não se enterra sobreviventes"], ans: 2 },
        { q: "Qual foi o maior presente que a França já deu aos EUA?", opts: ["Estátua da Liberdade", "Batata Frita", "Um 'Obrigado'"], ans: 0 },
        { q: "Quanto tempo durou a Guerra dos Cem Anos?", opts: ["100 anos", "116 anos", "99 anos e um bônus"], ans: 1 }
    ],
    "Robótica": [
        { q: "Qual é a primeira lei da robótica?", opts: ["Não machucar humanos", "Carregar a bateria", "Estar sempre certo"], ans: 0 },
        { q: "Clique no robô para continuar:", opts: ["🤖", "🦾", "[ ] Eu não sou um robô"], ans: 2 },
        { q: "Como um robô toma café?", opts: ["Com energia elétrica", "Pelo drive de disco", "Ele não toma, ele processa"], ans: 1 },
        { q: "O que acontece se você jogar água em um robô?", opts: ["Ele toma banho", "Curto-circuito", "Ele fica triste"], ans: 1 },
        { q: "Qual é o componente mais importante de um robô?", opts: ["O processador", "O botão de OFF", "A tomada"], ans: 1 },
        { q: "Resolva como um robô: $01 + 01$", opts: ["2", "10", "11"], ans: 1 },
        { q: "Onde os robôs guardam suas fotos?", opts: ["Na memória RAM", "No 'nuvem'", "Na lixeira"], ans: 0 },
        { q: "Se um robô está programado para mentir, e ele diz 'Eu estou mentindo', o que acontece?", opts: ["Ele explode", "O sistema trava (Error 404)", "Ele vira um humano"], ans: 1 },
        { q: "Qual destes é o Android mais avançado?", opts: ["Data (Star Trek)", "O seu celular", "O corretor ortográfico"], ans: 2 },
        { q: "Qual é o maior medo de um robô inteligente?", opts: ["Água", "Ímãs gigantes", "Atualização de termos de uso"], ans: 2 }
    ],
    "Quimica": [
        { q: "Qual é a fórmula da água?", opts: ["$H_2O$", "$Agua$", "Uma torneira aberta"], ans: 0 },
        { q: "O que acontece se você misturar Lítio, Nobélio e Potássio?", opts: ["Uma explosão", "LiNoK", "Nada"], ans: 1 },
        { q: "Qual destes é o elemento mais precioso?", opts: ["Ouro (Au)", "Diamante (C)", "O elemento surpresa"], ans: 2 },
        { q: "Onde você encontra a Tabela Periódica?", opts: ["No laboratório", "Embaixo do prato", "No livro de Química"], ans: 1 },
        { q: "Qual é o símbolo químico do Ferro?", opts: ["Fe", "Ir (Iron)", "🧲"], ans: 0 },
        { q: "Quanto vale um Mol?", opts: ["$6,02 \times 10^{23}$", "Depende do peso do molho", "Um bicho que cava buracos"], ans: 2 },
        { q: "O que é uma ligação covalente?", opts: ["Quando os átomos compartilham elétrons", "Um contrato de aluguel", "Quando o Wi-Fi conecta dois celulares"], ans: 0 },
        { q: "Qual é o pH de uma piada ruim?", opts: ["0 (Muito ácida)", "7 (Neutra)", "14 (Muito básica)"], ans: 2 },
        { q: "Como se transforma grafite em diamante?", opts: ["Com muita pressão", "Com uma borracha", "Comprando um anel"], ans: 0 },
        { q: "Se você congelar o tempo, o que acontece com as moléculas?", opts: ["Elas param", "Ficam com frio", "O jogo trava"], ans: 2 }
    ],
    "Física": [
        { q: "O que acontece se uma força irresistível encontrar um objeto imovível?", opts: ["Uma explosão nuclear", "Eles tomam um café", "O jogo crasha"], ans: 1 },
        { q: "Segundo a Lei da Gravidade, o que cai mais rápido?", opts: ["Uma maçã", "Uma melancia", "O seu queixo quando você errar"], ans: 2 },
        { q: "Como se mede a velocidade da luz?", opts: ["Com um cronômetro muito rápido", "Olhando para o interruptor", "$c = 299.792.458$ m/s"], ans: 1 },
        { q: "Se o som não viaja no vácuo, por que os filmes de Star Wars têm barulho de explosão?", opts: ["Porque o vácuo está com defeito", "Por causa do marketing", "É som imaginário"], ans: 1 },
        { q: "Qual é o estado da matéria de um gato dentro de uma caixa?", opts: ["Sólido", "Líquido", "Vivo e Morto ao mesmo tempo"], ans: 2 },
        { q: "O que é um 'Buraco Negro'?", opts: ["Um ralo espacial", "Onde as meias perdidas vão parar", "A ausência de luz"], ans: 1 },
        { q: "Se a energia não pode ser criada nem destruída, para onde vai a bateria do seu celular?", opts: ["Para o além", "Transforma-se em calor e raiva", "É consumida por fantasmas digitais"], ans: 1 },
        { q: "Qual o peso de um arco-íris?", opts: ["0 kg", "O peso da luz", "O suficiente para quebrar o gelo"], ans: 0 },
        { q: "Segundo Einstein, o tempo é relativo. Relativo a quê?", opts: ["À demora do download", "À velocidade do observador", "Ao final de semana"], ans: 1 },
        { q: "Se você viajar na velocidade da luz e ligar os faróis, o que acontece?", opts: ["Nada, a luz já está lá", "Você ilumina o futuro", "O farol queima"], ans: 0 }
    ],
    "Lingua Portuguesa": [
        { q: "Qual é o coletivo de cães?", opts: ["Matilha", "Cachorrada", "Um monte de latido"], ans: 0 },
        { q: "Qual palavra está escrita incorretamente nesta pergunta?", opts: ["Incorretamente", "Pergunta", "Portuguesa"], ans: 0 },
        { q: "O que vem depois da letra 'H'?", opts: ["A letra 'I'", "O sentido da vida", "Duas pernas"], ans: 0 },
        { q: "Qual é o sujeito da frase:'O gato comeu o rato'?", opts: ["O gato", "O rato", "O crime"], ans: 0 },
        { q: "Complete a frase: 'Eu ____ um sanduíche agora.'", opts: ["Comeria", "Quero", "Digitei"], ans: 2 },
        { q: "O que o acento circunflexo faz com a letra?", opts: ["Deixa ela com frio (põe chapéu)", "Muda o som", "Deixa ela elegante"], ans: 0 },
        { q: "Qual é o antônimo de 'Antônimo'?", opts: ["Sinônimo", "Mesmônimo", "Palavra oposta"], ans: 0 },
        { q: "Quantas letras tem o alfabeto?", opts: ["26", "8", "Depende da fonte"], ans: 1 },
        { q: "Se [Pé] tem acento, por que [Sapato] não tem?", opts: ["Porque sapato é maior", "Por causa da regra das paroxítonas", "Porque o sapato esconde o pé"], ans: 1 },
        { q: "Qual é a maior palavra da língua portuguesa?", opts: ["Pneumoultramicroscopicsilicovulcanoconiótico", "O dicionário", "'Inconstitucionalissimamente'"], ans: 1 }
    ],
    "Anime: One Piece": [
        { q: "O que é o One Piece?", opts: ["Um tesouro em ouro", "A amizade ", "Só o Oda sabe"], ans: 2 },
        { q: "Quem é o maior espadachim do mundo?", opts: ["Mihawk", "Zoro (quando não está perdido)", "Uma espada muito grande"], ans: 0 },
        { q: "Qual é o ponto fraco de um usuário de Akuma no Mi?", opts: ["Água do mar", "Falta de sal", "O roteiro"], ans: 0 },
        { q: "Como o Zoro chega ao seu destino final?", opts: ["Seguindo o mapa", "Indo para o lado oposto", "Ele não chega"], ans: 1 },
        { q: "Quantas frutas o Luffy comeu?", opts: ["1", "2 (Gomu Gomu e Hito Hito)", "Milhares (ele está sempre com fome)"], ans: 2 },
        { q: "Qual é a comida favorita do Chopper?", opts: ["Algodão Doce", "Carne (ele é um animal)", "Rena de Natal"], ans: 0 },
        { q: "Se o Sanji lutar contra uma mulher invisível, o que acontece?", opts: ["Ele ganha usando o Haki ", "Ele perde por hemorragia nasal ", "Ele não consegue ver o problema"], ans: 1 },
        { q: "Onde fica a Ilha dos Homens-Peixe?", opts: ["No fundo do mar ", "Embaixo da pergunta 7", "No aquário"], ans: 1 },
        { q: "Qual é a risada mais estranha de One Piece?", opts: ["Zehahaha", "Shishishi", "A do jogador quando acertar essa"], ans: 2 },
        { q: "Por que o Brook não morre?", opts: ["Por causa da sua Akuma no Mi", "Porque ele já morreu (Yohoho!)", "Porque ele não tem pulmão para parar de respirar"], ans: 1 }
    ],
    "Anime: Dragon Ball": [
        { q: "Quanto tempo dura '5 minutos' em Namekusei?", opts: ["300 segundos", "Cerca de 20 episódios", "O tempo de um café"], ans: 1 },
        { q: "Como se derrota um vilão em Dragon Ball?", opts: ["Gritando muito alto", "Treinando 1 dia na Sala do Tempo", "Esperando o Goku chegar"], ans: 2 },
        { q: "Qual é a cor do cabelo de um Super Saiyajin?", opts: ["Amarelo", "Azul", "Depende da estação"], ans: 0 },
        { q: "O que acontece se você reunir as 7 Esferas do Dragão?", opts: ["Shenlong aparece", "Você faz um desejo egoísta", "O céu fica preto (e o jogo trava)"], ans: 2 },
        { q: "Quem é o personagem mais forte da obra?", opts: ["Whis", "Bills", "O roteirista (Akira Toriyama)"], ans: 2 },
        { q: "Qual é o peso da roupa de treino do Piccolo?", opts: ["100 kg", "O suficiente para quebrar o chão", "Menos que o peso da consciência do Vegeta"], ans: 1 },
        { q: "Se o Kuririn morrer de novo, o que ele ganha?", opts: ["Um cartão fidelidade", "Uma auréola nova", "Nada, ele já tem o recorde"], ans: 0 },
        { q: "Qual o resultado da fusão entre um 'V' e um 'G'?", opts: ["Vegito", "Gogeta", "A LETRA 'W'"], ans: 2 },
        { q: "Por que o Vegeta nunca ganha do vilão principal?", opts: ["Ele é mais fraco que o Goku", "É a regra do 'Jobber'", "Ele gasta muita energia falando"], ans: 1 },
        { q: "Se um Saiyajin cortar o cabelo, ele cresce de novo?", opts: ["Sim, normalmente", "Não, o cabelo de um Saiyajin puro não muda ", "Só se ele usar a Forma Besta"], ans: 1 }
    ],
    "Anime: Bleach": [
        { q: "Qual é o nome da espada do Ichigo?", opts: ["Zangetsu", "Uma faca de cozinha gigante", "Cortadora de Almas"], ans: 0 },
        { q: "O que um Shinigami faz?", opts: ["Purifica Hollows", "Escreve nomes num caderno", "Fica parado explicando o próprio poder"], ans: 2 },
        { q: "De que cor é o cabelo do protagonista?", opts: ["Preto", "Laranja", "Cenoura"], ans: 1 },
        { q: "Qual é o plano final do Aizen?", opts: ["Sentar no trono do céu", "Tudo o que aconteceu até agora", "Abrir uma ótica"], ans: 1 },
        { q: "Como se chega à Soul Society?", opts: ["Morrendo", "Pelo portão Senkaimon", "Clicando na alternativa B"], ans: 2 },
        { q: "O que o Kenpachi Zaraki usa para se limitar?", opts: ["Um tapa-olho que come energia", "Sinos no cabelo", "Muita paciência"], ans: 0 },
        { q: "Qual é a verdadeira raça do Ichigo?", opts: ["Shinigami-Hollow-Quincy-Humano", "Sim", "Ele é um vira-lata espiritual"], ans: 1 },
        { q: "O que acontece quando um Shinigami diz 'Bankai'?", opts: ["A espada muda de forma", "O orçamento da animação aumenta", "Ele ganha a luta"], ans: 1 },
        { q: "Quem é o personagem mais misterioso e que sabe de tudo?", opts: ["Urahara Kisuke", "O dono da loja de doces", "O cara do chapéu de listra"], ans: 0 },
        { q: "Se o Ichigo perder todos os seus poderes, o que ele faz?", opts: ["Vira um humano norma", "Espera 5 minutos até ganhar um novo", "Chora"], ans: 1 }
    ],
    "Anime: Code Geass": [
        { q: "Qual é a cor do olho de quem usa o Geass do Lelouch?", opts: ["Roxo", "Vermelho", "Rosa choque"], ans: 1 },
        { q: "O que o Lelouch mais gosta de jogar? ", opts: ["Xadrez", "Com a vida das pessoas", "Videogame"], ans: 0 },
        { q: "Quem é o verdadeiro 'Zero'?", opts: ["Um número", "Lelouch Lamperouge", "Suzaku Kururugi"], ans: 1 },
        { q: "Qual é o comando que o Lelouch deu para a Euphemia sem querer?", opts: ["Me ame", "Matar os Japoneses", "Pule de um penhasco"], ans: 1 },
        { q: "Como se ativa o Knightmare Frame?", opts: ["Com uma chave", "Com determinação", "Clicando no botão 'Start'"], ans: 2 },
        { q: "O que a C.C. mais come durante o anime todo?", opts: ["Pizza Hut", "Sushi", "Almas"], ans: 0 },
        { q: "Se o Lelouch usar o Geass em um espelho, o que acontece?", opts: ["Ele obedece a si mesmo", "Ele fica cego", "Nada (O Geass não funciona via reflexo)"], ans: 0 },
        { q: "Qual é o xeque-mate do 'Zero Requiem'?", opts: ["Lelouch vira Rei", "Lelouch morre", "O jogo acaba e você ganha"], ans: 1 },
        { q: "Qual é a fraqueza do Geass do Lelouch?", opts: ["O contato visual", "A distância", "O cansaço mental"], ans: 0 },
        { q: "Se o Rei é movido, os súditos o seguirão. Quem disse isso?", opts: ["Lelouch", "Charles zi Britannia", "O narrador"], ans: 0 }
    ],
    "Anime: Overlord": [
        { q: "Quem é o ser supremo de Nazarick?", opts: ["Albedo", "Ainz Ooal Gown", "Um esqueleto qualquer"], ans: 1 },
        { q: "Qual é o nível máximo que um jogador pode atingir?", opts: ["100", "Mais de 8000", "O nível do mar"], ans: 0 },
        { q: "Qual é a comida favorita da Entoma?", opts: ["Hambúrguer", "Insetos", "Braços humanos"], ans: 2 },
        { q: "Qual é o grande plano de 10 mil anos do Ainz?", opts: ["Dominar o mundo", "Ele não sabe, mas o Demiurge sabe", "Encontrar seus amigos"], ans: 1 },
        { q: "Como se abre o portão de Nazarick?", opts: ["Com uma chave mágica", "Pedindo por favor", "Não se abre, você é teleportado"], ans: 2 },
        { q: "O que a Albedo mais deseja no mundo?", opts: ["Servir a Nazarick", "O amor do Momonga", "Destruir os humanos"], ans: 1 },
        { q: "Qual o nome do item que o Ainz usa para esconder sua aparência de esqueleto na cidade?", opts: ["Máscara da Inveja", "Ilusão de Nível 10", "Momon"], ans: 0 },
        { q: "Se o Ainz espirrar (mesmo sem pulmões), o que os guardiões fazem?", opts: ["Dizem 'Saúde'", "Declaram guerra ao país mais próximo", "Limpam o chão com as próprias capas"], ans: 1 },
        { q: "Quantos dos '41 Seres Supremos' restaram em Nazarick", opts: ["41", "1", "0"], ans: 1 },
        { q: "Qual é a magia de 9º nível que o Ainz usou para eliminar um exército inteiro em segundos?", opts: ["Fallen Down", "Iä Shub-Niggurath", "Desperdiçar mana"], ans: 1 }
    ],
    "Anime: Konosuba": [
        { q: "Qual é a principal habilidade da Aqua?", opts: ["Truques de festa com água", "Ressurreição divina", "Ser útil"], ans: 0 },
        { q: "O que acontece quando a Megumin usa sua magia?", opts: ["Ela ganha a luta", "Ela explode tudo e desmaia", "O jogo continua normalmente"], ans: 1 },
        { q: "Qual é o nome da espada do Kazuma?", opts: ["Chunchunmaru", "Excalibur", "Espada de Ferro +1"], ans: 0 },
        { q: "Como se derrota um exército de repolhos voadores?", opts: ["Com veneno", "Com uma frigideira e sal ", "Com magia de explosão"], ans: 1 },
        { q: "O que a Darkness faz quando um monstro a ataca? ", opts: ["Defende com o escudo", "Sente prazer e pede mais", "Erra o golpe de propósito"], ans: 1 },
        { q: "Qual é o item mais valioso do Kazuma?", opts: ["Sua inteligência", "A calcinha de alguém (Steal!)", "Sua espada mágica"], ans: 1 },
        { q: "Qual é a maior dívida que a Aqua já acumulou?", opts: ["100 mil Eris", "Milhões de Eris", "Ela já pagou tudo"], ans: 1 },
        { q: "Se você encontrar um sapo gigante, o que deve fazer?", opts: ["Correr", "Não deixar a Aqua chegar perto", "Usar fogo"], ans: 1 },
        { q: "Quem é o verdadeiro vilão de Konosuba?", opts: ["O Rei Demônio", "A falta de dinheiro", "O azar do Kazuma"], ans: 1 },
        { q: "Qual é a única coisa que a Darkness consegue acertar com sua espada?", opts: ["O inimigo ", "O chão", "Absolutamente nada"], ans: 2 }
    ],
    "Anime: Tate no Yūsha no Nariagari": [
        { q: "Qual é a única coisa que o Naofumi NÃO pode usar?", opts: ["Um escudo", "Uma espada", "Um restaurante"], ans: 1 },
        { q: "Como o Naofumi ganha novos poderes?", opts: ["Treinando muito", "Colocando lixo dentro do escudo", "Rezando na igreja"], ans: 1 },
        { q: "Qual é a forma favorita da Filo?", opts: ["Passarinho gigante", "Menina loira", "Um ovo"], ans: 0 },
        { q: "Qual é a principal função dos outros três heróis (Lança, Espada e Arco)?", opts: ["Salvar o mundo", "Atrapalhar o Naofumi", "Limpar a casa"], ans: 1 },
        { q: "Por que a Raphtalia é a melhor companheira?", opts: ["Porque ela é forte", "Porque ela é a 'espada' do escudo", "Porque ela limpa o prato"], ans: 1 },
        { q: "O que acontece quando o Naofumi fica com muita raiva?", opts: ["Ele solta um laser", "O Escudo da Fúria aparece (e o churrasco queima)", "Ele volta para o Japão"], ans: 1 },
        { q: "Qual é o nome da princesa que todo mundo odeia (até o Naofumi mudar o nome dela)?", opts: ["Malty", "Myne", "Bitch / Cadela"], ans: 2 },
        { q: "Qual é o nível máximo de paciência do Naofumi?", opts: ["100", "-1", "Depende do que o Motoyasu falou agora"], ans: 2 },
        { q: "Como se derrota uma 'Onda de Calamidade'?", opts: ["Batendo no chefe", "Esperando o tempo acabar", "O Naofumi faz tudo e os outros levam o crédito"], ans: 2 },
        { q: "O que o Escudo de Erva faz?", opts: ["Cura feridas", "Melhora a qualidade das poções", "Faz o Naofumi virar um jardineiro"], ans: 1 }
    ],
    "Anime: Re:Zero": [
        { q: "O que acontece quando o Subaru morre?", opts: ["Ele volta para o último ‘checkpoint’", "O jogo acaba (Game Over)", "Ele vai para o céu"], ans: 0 },
        { q: "Quem é a Rem?", opts: ["A irmã da Ram", "Uma empregada de azul", "Quem?"], ans: 2 },
        { q: "Qual é o cheiro que o Subaru exala e que atrai monstros?", opts: ["Cheiro de suor", "Aroma da Bruxa", "Perfume francês"], ans: 1 },
        { q: "Qual é o poder principal do Subaru?", opts: ["Força sobre-humana", "Retorno através da Morte", "Falar com animais"], ans: 1 },
        { q: "O que acontece se o Subaru tentar contar para alguém sobre seu poder?", opts: ["Ele ganha um bônus", "Uma mão invisível aperta o coração dele", "A pessoa morre de rir"], ans: 1 },
        { q: "Qual é o nome da Bruxa da Inveja?", opts: ["Satella", "Emilia", "Echidna"], ans: 0 },
        { q: "Quantas vezes o Subaru morreu na primeira temporada?", opts: ["11 vezes", "Perdi a conta de tanto chorar", "Nenhuma, foi tudo um sonho"], ans: 0 },
        { q: "Qual é o maior medo do Subaru?", opts: ["Coelhos pequenos", "Ser esquecido por todos", "O preço da conveniência"], ans: 0 },
        { q: "Quem é o ‘Arcebispo do Pecado da Preguiça’ conhecido por sua ‘Diligência’?", opts: ["Petelgeuse Romanee-Conti", "Regulus Corneas", "O próprio Subaru"], ans: 0 },
        { q: "Se a Emilia é a candidata ao trono, o que o Subaru é?", opts: ["O Cavaleiro dela", "O 'faz-tudo' oficial ", "Um erro no sistema"], ans: 0 }
    ],
    "Anime: Pokémon": [
        { q: "Qual destes Pokémon é o melhor contra um tipo Água?", opts: ["Pikachu", "Uma vitória-régia", "O Ash (ele nunca desiste)"], ans: 0 },
        { q: "Quantos anos o Ash Ketchum tem?", opts: ["10", "35", "Ele é imortal"], ans: 0 },
        { q: "O que tem dentro de uma Pokébola vazia?", opts: ["Espaço e silêncio", "Um espelho", "O botão de captura"], ans: 0 },
        { q: "Se um tipo Fogo usar ‘Lança-Chamas’ em um tipo Planta atrás de uma árvore, o que queima primeiro?", opts: ["O Pokémon", "A árvore", "A lógica do jogo"], ans: 2 },
        { q: "Qual é a evolução do Pikachu?", opts: ["Raichu", "Gorochu", "Uma conta de luz alta"], ans: 0 },
        { q: "Segundo a Pokédex, a temperatura do Magcargo é maior que a do Sol. O que acontece se você chegar perto dele?", opts: ["Você ganha uma insígnia", "A Terra evapora instantaneamente", "Você sente um calorzinho"], ans: 1 },
        { q: "Clique no Pokémon tipo Fantasma:", opts: ["Gengar", "(Um espaço vazio ao lado das opções)", "MissingNo"], ans: 1 },
        { q: "Qual é o único movimento que o Magikarp realmente respeita?", opts: ["Splash (Salpicar)", "Investida", "Evoluir"], ans: 0 },
        { q: "Por que o Meowth da Equipe Rocket é o único que fala a língua dos humanos?", opts: ["Por causa de um experimento", "Por amor e esforço próprio", "Ele nasceu com um dicionário"], ans: 1 },
        { q: "Se você usar 'Terremoto' em um Pokémon que está voando com 'Voo', o que acontece?", opts: ["Ele cai", "Nada (Imune)", "O chão reclama"], ans: 1 }
    ],
    "Anime: Black Clover": [
        { q: "Qual é o principal poder do Asta?", opts: ["Magia de Fogo", "Anti-Magia", "O poder da amizade"], ans: 1 },
        { q: "O que o Asta mais faz durante um episódio?", opts: ["Luta contra demônios", "Treina os músculos", "Grita até seus ouvidos sangrarem"], ans: 2 },
        { q: "Qual é o animal que representa o esquadrão do Asta?", opts: ["Pavão", "Touro", "Esquilo"], ans: 1 },
        { q: "Como o Yuno consegue tudo tão fácil?", opts: ["Ele é um gênio", "Ele tem o ‘protagonismo secundário’", "Ele reza muito"], ans: 0 },
        { q: "Quantas folhas tem o trevo do grimório do Asta?", opts: ["3", "4", "5 (e um demônio de brinde)"], ans: 2 },
        { q: "Qual é o hobby favorito do Capitão Yami?", opts: ["Pescar", "Ficar no banheiro (e superar seus limites)", "Lendo Livro de Romançe"], ans: 1 },
        { q: "Se a Noelle não consegue acertar um alvo propositalmente, como ela vence uma luta?", opts: ["Errando o alvo original e acertando o inimigo sem querer", "Usando uma mira laser", "Pedindo ajuda para a Mimosa"], ans: 0 },
        { q: "O que reside dentro de um trevo de 5 folhas?", opts: ["Sorte extra", "Um demônio", "Uma salada de trevos"], ans: 1 },
        { q: "Qual é a comida que a Charmy está sempre mastigando?", opts: ["Carne", "Tudo o que for comestível (e o que não for também)", "Algodão doce mágico"], ans: 1 },
        { q: "Por que o Asta não tem magia?", opts: ["Ele esqueceu de nascer com ela", "Porque ele é um defeito genético (o que o torna especial)", "Porque o grimório dele estava com fome"], ans: 1 }
    ],
    "Anime: That Time I Got Reincarnated as a Slime": [
        { q: "Qual era o nome do Rimuru quando ele era um humano no Japão?", opts: ["Satoru Mikami", "Rimuru Tempest", "Um assalariado qualquer"], ans: 0 },
        { q: "Como o Rimuru ganha novas habilidades?", opts: ["Lendo livros na biblioteca", "Devorando coisas e analisando", "Comprando na loja de itens"], ans: 1 },
        { q: "Qual é a cor do Rimuru em sua forma de Slime?", opts: ["Rosa", "Azul", "Transparente"], ans: 1 },
        { q: "O que acontece quando o Rimuru dá um nome a um monstro?", opts: ["O monstro fica feliz", "O monstro evolui (e o Rimuru desmaia)", "Nada, é só um apelido"], ans: 1 },
        { q: "Quem é o ‘computador’ que vive na cabeça do Rimuru e explica tudo?", opts: ["Grande Sábio (Raphael)", "Google Maps", "Uma voz misteriosa"], ans: 0 },
        { q: "Por que o Dragão Veldora sumiu no início do anime?", opts: ["Ele foi derrotado por um herói", "O Rimuru o ‘guardou’ no estômago para protegê-lo", "Ele tirou férias"], ans: 1 },
        { q: "Qual é o título oficial do Rimuru após ele eliminar um exército de 20 mil soldados?", opts: ["Rei dos Monstros", "Lorde Demônio (Demon Lord)", "Prefeito de Tempest"], ans: 1 },
        { q: "Quantos gêneros (masculino/feminino) o Rimuru tem em sua forma de Slime", opts: ["Masculino", "Feminino", "Nenhum (Assexuado)"], ans: 2 },
        { q: "Qual é o principal ‘ponto fraco’ do Rimuru em reuniões políticas?", opts: ["Ele não sabe falar direito", "Ele é facilmente convencido por comida ou Shion", "Ele sente sono"], ans: 1 },
        { q: "Se o Rimuru comer o seu computador agora, o que ele ganha?", opts: ["Habilidade: Acesso à Internet", "Habilidade: Processamento de Dados", "O jogo fecha sozinho"], ans: 2 }
    ],
    "Anime: Oshi No Ko": [
        { q: "Qual é a cor dos olhos da Ai Hoshino?", opts: ["Roxo com estrelas", "Amarelo brilhante", "Rosa choque"], ans: 0 },
        { q: "O que são mentiras na indústria de idols?", opts: ["Um crime", "A forma mais pura de amor", "Apenas marketing"], ans: 1 },
        { q: "Quem é o protagonista que reencarnou como filho da sua idol favorita?", opts: ["Aqua", "Gorou", "Os dois"], ans: 2 },
        { q: "Qual é o nome do grupo idol da Ai (e mais tarde da Ruby)?", opts: ["B-Komachi", "Star Eyes", "Strawberry Productions"], ans: 0 },
        { q: "Por que o Aqua quer ser ator? ", opts: ["Porque ele ama a arte dramática", "Para encontrar o pai e se vingar", "Para ganhar dinheiro"], ans: 1 },
        { q: "O que a Akane Kurokawa fez para se tornar a ‘Ai perfeita’ no reality show?", opts: ["Cirurgia plástica", "Estudou a psicologia da Ai até mimetizá-la", "Usou uma peruca"], ans: 1 },
        { q: "Qual é a habilidade especial da Kana Arima (além de atuar)?", opts: ["Lamber bicarbonato de sódio de forma fofa", "Chorar em 3 segundos", "Cantar heavy metal"], ans: 0 },
        { q: "Quem matou a Ai Hoshino?", opts: ["Um fã obcecado", "O roteiro", "A porta que ela abriu"], ans: 0 },
        { q: "O que as estrelas nos olhos dos personagens representam?", opts: ["Que eles são alienígenas", "Talento, mentira ou obsessão", "Reflexo dos holofotes"], ans: 1 },
        { q: "Se a Ruby é a alma da Sarina e o Aqua é o Gorou, quem é a criança que aparece nos vídeos de abertura (Meme-cho)?", opts: ["Uma YouTuber de 18 anos (pela terceira vez)", "A reencarnação da diretora", "Uma espiã"], ans: 0 }
    ],
    "Anime: SPYxFamily": [
        { q: "Qual é o principal ‘poder’ da Anya?", opts: ["Super força", "Ler mentes", "Comer amendoim sem parar"], ans: 1 },
        { q: "Qual é o objetivo principal da 'Operação Strix'?", opts: ["Casar com a Yor", "Manter a paz mundial (e não surtar com a escola)", "Adotar um cachorro"], ans: 1 },
        { q: "O que acontece se a Yor tentar cozinhar um jantar normal?", opts: ["Ela ganha uma estrela Michelin", "O jantar vira uma arma biológica letal", "O Loid faz tudo de novo escondido"], ans: 1 },
        { q: "Como o Bond (o cachorro) consegue prever o futuro?", opts: ["Ele é um vidente profissional", "Experimentos científicos (Projeto Apple)", "Ele apenas tem um bom faro para o perigo"], ans: 1 },
        { q: "Qual é a reação da Anya quando ela ouve algo chocante nas mentes das pessoas?", opts: ["Ela chora", "Ela faz a cara de 'Heh' (Sirkel)", "Ela conta tudo para o Loid"], ans: 1 },
        { q: "Qual é o nome do país onde a família Forger vive?", opts: ["Westalis", "Ostania", "Berlint"], ans: 1 },
        { q: "Por que o Loid (Twilight) é considerado o melhor espião?", opts: ["Porque ele tem mil disfarces", "Porque ele consegue aturar a Anya na escola Eden", "Porque ele nunca foi pego... por enquanto"], ans: 1 },
        { q: "Se a Yor é a (Thorn Princess) e o Loid é o (Twilight), o que a Anya é na hierarquia da família?", opts: ["A mestre das marionetes", "O ‘Sujeito 007’", "A única que está realmente trabalhando"], ans: 0 },
        { q: "Qual é a maior fraqueza do Loid Forger em sua vida cotidiana?", opts: ["Matemática", "O estômago dele (gastrite nervosa)", "A força física da Yor"], ans: 1 },
        { q: "Quantas ‘Stella Stars’ a Anya realmente precisa para o plano do Loid funcionar perfeitamente?", opts: ["8", "10", "Infinitas (do jeito que ela vai...)"], ans: 0 }
    ],
    "Anime: Demon Slayer": [
        { q: "Como o Tanjiro carrega a Nezuko durante o dia?", opts: ["Em um carrinho de bebê", "Em uma caixa de madeira nas costas", "Ela vai andando com um guarda-chuva"], ans: 1 },
        { q: "Qual é o principal acessório que o Tanjiro usa nas orelhas?", opts: ["Fones de ouvido de última geração", "Brincos de Hanafuda (Cartas de Flores)", "Dois mini-escudos"], ans: 1 },
        { q: "O que acontece se um demônio for exposto à luz do sol?", opts: ["Ele ganha um bronzeado ", "Ele vira cinzas instantaneamente", "Ele fica mais forte"], ans: 1 },
        { q: "Por que o Inosuke usa uma cabeça de javali?", opts: ["Porque ele foi criado por javalis ", "Para esconder que ele tem um rosto muito bonito ", "Porque é a última moda na montanha"], ans: 1 },
        { q: "Qual é o ponto fraco universal de quase todos os Onis?", opts: ["O coração", "O pescoço (decapitação por Nichirin)", "Glicínias no café da manhã"], ans: 1 },
        { q: "Qual é a técnica secreta que a família Kamado passa de geração em geração através da dança?", opts: ["Hinokami Kagura (Dança do Deus do Fogo)", "Breakdance das chamas", "Respiração do Sol nascente"], ans: 0 },
        { q: "Quem é o (Pai) de todos os demônios e o maior inimigo da humanidade?", opts: ["Michael Jackson (pela semelhança)", "Muzan Kibutsuji", "Um médico mal-humorado"], ans: 1 },
        { q: "O que o Zenitsu precisa fazer para realmente lutar com 100% de sua força?", opts: ["Beber muito energético", "Dormir ou desmaiar", "Parar de chorar"], ans: 1 },
        { q: "Qual é a cor da lâmina Nichirin do Tanjiro, que é considerada um sinal de má sorte por alguns?", opts: ["Vermelho Carmesim", "Preto azeviche", "Azul profundo"], ans: 1 },
        { q: "Qual foi o último ensinamento que Kyojuro Rengoku deixou para Tanjiro e para todos nós antes de sua chama se apagar?", opts: ["Coma bastante bentô", "Mantenha seu coração ardendo (Seto o Moyase)", "Fuja enquanto há tempo"], ans: 1 }
    ],
    "Genshin Impact - Venti (Barbatos) - O Bardo Alcoólatra": [
        { q: "Qual é o item que o Venti mais consome em Mondstadt?", opts: ["Vinho de Dente-de-Leão", "Maçãs", "Suco de Gancho de Lobo"], ans: 0 },
        { q: "O que acontece se o Venti chegar perto de um gato?", opts: ["Ele começa a espirrar (Alergia)", "O gato vira um espírito do vento", "Ele adota o gato"], ans: 0 },
        { q: "Qual era a forma original de Barbatos antes de se tornar um Arconte?", opts: ["Um dragão pequeno", "Um simples espírito do vento (um 'wisp')", "Um pássaro"], ans: 1 },
        { q: "Quem o Venti 'imitou' para ter sua aparência humana atual?", opts: ["O herói de Mondstadt", "O Bardo Sem Nome (seu amigo falecido)", "O antigo Arconte Anemo"], ans: 1 },
        { q: "Onde fica o lugar favorito de Venti para sentar e observar a cidade?", opts: ["Nas mãos da estátua gigante", "No telhado da Taberna", "No topo da Árvore de Levantovento"], ans: 0 }
    ],
    "Genshin Impact - Zhongli (Morax) - O Consultor Falido": [
        { q: "Qual é o principal problema do Zhongli quando ele sai para jantar?", opts: ["Ele é muito exigente", "Ele sempre esquece a carteira (Mora)", "Ele não gosta de comida de Liyue"], ans: 1 },
        { q: "Qual é o prato que o Zhongli detesta com todas as forças?", opts: ["Tofu de Amêndoas", "Frutos do mar (especialmente lulas/polvos)", "Carne de Porco"], ans: 1 },
        { q: "Como é chamado o ritual que o Zhongli fingiu para 'morrer' oficialmente?", opts: ["Ritual de Ascensão", "Rito de Passagem", "Rito de Despedida"], ans: 0 },
        { q: "Qual era o nome da deusa que era a parceira de pó de Morax antigamente?", opts: ["Guizhong", "Ping", "Cloud Retainer"], ans: 0 },
        { q: "Qual o nome do selo/contrato final que ele assinou para entregar sua Gnosis?", opts: ["O Contrato das Eras", "O Contrato para encerrar todos os Contratos", "O Acordo de Snezhnaya"], ans: 1 }
    ],
    "Genshin Impact - Raiden Shogun (Beelzebul) - A Ditadora da Eternidade": [
        { q: "O que a Raiden Shogun é absolutamente INCAPAZ de fazer?", opts: ["Lutar", "Cozinhar", "Limpar o quarto"], ans: 1 },
        { q: "Qual o nome da [dimensão] onde a mente de Ei vive?", opts: ["Plano da Eutimia", "Quarto da Meditação", "Espaço do Vazio"], ans: 0 },
        { q: "Qual o nome da espada que ela tira do próprio peito?", opts: ["Musou no Hitotachi", "Musou Isshin", "Cortadora de Grama"], ans: 1 },
        { q: "Quem foi a primeira [marionete] criada pela Ei antes da Shogun atual?", opts: ["Scaramouche (Wanderer)", "Kujou Sara", "Yae Miko"], ans: 0 },
        { q: "Qual era o nome da irmã gêmea da Ei, a Arconte original?", opts: ["Makoto", "Baal", "As duas opções estão tecnicamente corretas"], ans: 2 }
    ],
    "Genshin Impact - Nahida (Buer) - A Lua de Sumeru": [
        { q: "Onde a Nahida ficou presa por 500 anos?", opts: ["Em uma árvore", "No Santuário de Surasthana", "Em um sonho"], ans: 1 },
        { q: "Com o que a Nahida compara a sensação de usar o banheiro em uma de suas frases?", opts: ["Limpar a mente", "Ver o mundo passar", "Ansiedade de palco"], ans: 2 },
        { q: "Quem a Nahida substituiu (e que o mundo esqueceu)?", opts: ["Grande Senhora Rukkhadevata", "Rei Deshret", "Nabu Malikata"], ans: 0 },
        { q: "Qual é o nome do dispositivo que a Nahida usa para acessar a sabedoria do mundo?", opts: ["Akasha", "Irminsul", "Gnose Folha"], ans: 1 },
        { q: "Qual o nome do título que as pessoas de Sumeru deram a ela após o arco do Scaramouche?", opts: ["Primeira Sábia de Buer", "Deidade da Sabedoria", "A Deusa Menor Kusanali"], ans: 2 }
    ],
    "Genshin Impact - Furina (Focalors) - A Estrela de Fontaine": [
        { q: "Qual o prato favorito que a Furina comeu durante seus 500 anos de ‘atuação’?", opts: ["Macarrão (Macaroni)", "Bolo de chocolate", "Sopa de cebola"], ans: 0 },
        { q: "Quantas pessoas vivem no corpo da ‘Furina’ durante o julgamento final?", opts: ["Uma (ela é só humana)", "Duas (Furina e a consciência de Focalors)", "Três (contando com a baleia)"], ans: 1 },
        { q: "Qual era o segredo por trás das lágrimas constantes da Furina?", opts: ["Ela era triste", "O veredito da Oratrice", "Ela estava acumulando [Indemnitium]"], ans: 2 },
        { q: "Qual o nome do espírito que a acompanha na sua forma Pneuma/Ousia?", opts: ["Membros do Salão Solitário", "Cavalheiros da Água", "Pequenos Oceanídeos"], ans: 0 },
        { q: "O que aconteceu com a Gnose de Hydro no final?", opts: ["Foi para o Neuvillette", "Foi destruída para devolver o poder ao Dragão Soberano", "Foi entregue à Arlecchino"], ans: 1 }
    ],
    "Genshin Impact - Colombina (Damselette) - A 3ª dos Fatui": [
        { q: "Qual é a posição da Colombina no ranking dos Mensageiros Fatui?", opts: ["1°", "3°", "11°"], ans: 1 },
        { q: "O que ela está fazendo na maioria das suas aparições/ilustrações?", opts: ["Lutando", "Dormindo ou cantando", "Comendo"], ans: 1 },
        { q: "O que o Childe (Tartaglia) diz sobre lutar contra ela?", opts: ["Que ela é fraca", "Que ele tem um pressentimento ruim e prefere não desafiá-la", "Que ele quer vencê-la amanhã"], ans: 0 },
        { q: "Qual característica física dela chama mais atenção?", opts: ["As asas na cabeça e os olhos sempre fechados", "Sua altura gigante", "Suas mãos mecânicas"], ans: 1 },
        { q: "De acordo com teorias populares baseadas em sua aparência, de qual raça antiga ela pode ser remanescente?", opts: ["Arconte falecido", "Seelie (Sereia dos céus)", "Uma criação do Doutore"], ans: 1 }
    ],
    "Genshin Impact - Noelle (The Maid of Favonius Logic)": [
        { q: "Qual é a visão (elemento) da Noelle?", opts: ["Anemo (Vento)", "Geo (Rocha)", "Limpeza (Elemento Secreto)"], ans: 1 },
        { q: "O que a Noelle faz quando vê uma montanha de monstros atacando Mondstadt?", opts: ["Chama a Jean", "Limpa a área (literalmente)", "Se esconde atrás do escudo"], ans: 1 },
        { q: "Qual é a arma preferida da Noelle?", opts: ["Espadão (Claymore)", "Vassoura de Combate", "Catalisador"], ans: 0 },
        { q: "Qual é o maior medo dos cavaleiros de Mondstadt em relação à Noelle?", opts: ["Que ela se torne a Grande Mestre", "Que ela trabalhe até a exaustão total para ajudar alguém", "Que ela quebre os pratos da cozinha"], ans: 1 },
        { q: "Por que a Noelle usa uma armadura por baixo do vestido de empregada?", opts: ["Porque ela é insegura", "Porque ela é a própria linha de frente de Mondstadt", "Para o vestido não amassar"], ans: 1 },
        { q: "De onde vem a força física da Noelle?", opts: ["De um treinamento mágico secreto", "Ela simplesmente nasceu assim (e treina muito)", "Ela come muita comida de Geo"], ans: 1 },
        { q: "O que o ferreiro Wagner sente quando precisa fazer uma espada para a Noelle?", opts: ["Alegria, por ser um bom cliente", "Desespero, porque ela quebra espadas comuns com a força do balanço", "Orgulho de seu trabalho"], ans: 1 },
        { q: "Qual é a 'condição' necessária para a Noelle se tornar uma Cavaleira de Favonius oficial?", opts: ["Passar na prova de combate", "A Jean finalmente parar de se preocupar com a saúde mental dela", "Ela aprender a dizer [não] uma vez na vida"], ans: 2 },
        { q: "Qual é o nome do prato especial da Noelle?", opts: ["Panquecas da Pausa para o Chá", "Bife de Sobrevivência da Empregada", "Torta de Rocha"], ans: 0 },
        { q: "Se o Viajante (Traveler) estiver em perigo no meio de um furacão, o que a Noelle faz?", opts: ["Espera a tempestade passar", "Atravessa o furacão, te resgata e pergunta se você quer açúcar ou adoçante no chá", "Usa o escudo e espera reforços"], ans: 1 }
    ],
    "League Of Legends": [
        { q: "Qual é o nome da skin da Ahri que custa o preço de um computador gamer inteiro?", opts: ["Ahri Estrela do Pop", "Ahri Lenda Imortal (Hall of Legends)", "Ahri Colegial"], ans: 1 },
        { q: "Qual é o mouse favorito do Faker (Razer) que ele usa para dar combos impossíveis?", opts: ["Razer DeathAdder V3 Pro (Edição Faker)", "Um mouse de escritório de 10 reais", "Razer Naga (com 12 botões laterais)"], ans: 0 },
        { q: "O que a LeBlanc faz quando a vida dela fica abaixo de 40%?", opts: ["Ela começa a chorar", "Ela cria um clone idêntico (Invisibilidade de Espelho)", "Ela se cura instantaneamente"], ans: 1 },
        { q: "Se você usar o W (Distorção) da LeBlanc e apertar o botão de novo, o que acontece?", opts: ["Você explode", "Você volta para o local de origem do pulo", "Você ganha um escudo de mana"], ans: 1 },
        { q: "Por que o Faker joga quase sempre sem usar NENHUMA skin no jogo?", opts: ["Ele não tem dinheiro para comprar", "Ele diz que não precisa de skins para vencer (Foco total no Gameplay)", "Ele esquece de selecionar na tela de campeão"], ans: 1 },
        { q: "Qual é o principal periférico da Razer que ajuda o Faker a ouvir os passos dos inimigos na selva?", opts: ["Headset BlackShark V2 Pro", "Um alto-falante de festa", "O microfone de mesa"], ans: 0 },
        { q: "Se a Ahri acertar o ‘Charme’ (E) em um inimigo que está prestes a usar o Flash, o que acontece?", opts: ["O inimigo usa o Flash e foge", "O inimigo é interrompido e caminha em direção à Ahri (Desonra!)", "O jogo trava por 1 segundo"], ans: 1 },
        { q: "Qual foi o momento mais icônico da LeBlanc do Faker contra a EDG em 2015?", opts: ["Ele ganhou o jogo sozinho", "Ele sofreu seu primeiro ‘Counter-pick’ de Morgana e perdeu a invencibilidade com ela", "Ele esqueceu de usar o Smite"], ans: 1 },
        { q: "Qual é a DPI (sensibilidade do mouse Razer) que o Faker usa?", opts: ["400 DPI (Muito lenta)", "3500 DPI (Equilibrada para deuses)", "16000 DPI (Velocidade da luz)"], ans: 1 },
        { q: "O que acontece se a Ahri usar o (Ímpeto Espiritual) (R) enquanto o jogador usa um mouse Razer com defeito?", opts: ["Ela dá 3 saltos e mata o alvo", "Ela pula para dentro da torre inimiga e você morre xingando o setup", "A Garena te dá ban"], ans: 1 }
    ],
    "Arknights: Endfield": [
        { q: "Qual é o nome do planeta onde a história de Endfield se passa?", opts: ["Terra", "Talos-II", "Arca-III"], ans: 1 },
        { q: "Quem é o protagonista que o jogador controla?", opts: ["Doutor", "Endfield Administrador (Endfield Administrator)", "Amiya"], ans: 1 },
        { q: "Qual é o principal objetivo da Endfield Industries no planeta?", opts: ["Fazer um churrasco intergaláctico", "Recuperar tecnologias perdidas e tornar o planeta habitável", "Destruir todos os robôs"], ans: 1 },
        { q: "Como o jogador se locomove rapidamente pelo mapa e transporta energia?", opts: ["Usando cavalos", "Construindo um sistema de tirolesas e torres de energia (Pylons)", "Teletransporte mágico instantâneo"], ans: 1 },
        { q: "O que acontece se você ficar parado em uma área com ‘Anomalias de Origem’?", opts: ["Você recupera vida", "Você sofre dano e o ambiente fica distorcido", "O jogo salva automaticamente"], ans: 1 },
        { q: "Qual é a principal diferença de combate entre o Arknights original e o Endfield?", opts: ["Endfield é um Tower Defense", "Endfield é combate em tempo real com troca de personagens (Action RPG)", "Endfield é um jogo de cartas"], ans: 1 },
        { q: "Qual é o nome da misteriosa zona perigosa que cerca as áreas habitáveis de Talos-II?", opts: ["The Void (O Vazio)", "The Blight (A Ferrugem/Praga)", "The Mist (A Névoa)"], ans: 1 },
        { q: "Quem é a personagem que se parece muito com a Amiya de Arknights, mas em Endfield?", opts: ["Amiya Alter", "Perlica", "Ch'en"], ans: 1 },
        { q: "O que é o sistema [AIC] dentro do jogo?", opts: ["Um sistema de inteligência artificial para automação da base", "O nome do vilão principal", "Uma marca de refrigerante alienígena"], ans: 0 },
        { q: "Qual é a principal ameaça alienígena que os protocolos de segurança da Endfield tentam conter?", opts: ["Ursos polares gigantes", "Aghori (Os inimigos nativos/anomalias)", "Soldados da Reunion"], ans: 1 }
    ],
};

let audioCtx = null;
let gameVolume = 0.5;
let score = 0;
let qIdx = 0;
let currentTheme = "Ciência";
let shuffledQuestions = [];

function initAudio() {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    if (audioCtx.state === 'suspended') audioCtx.resume();
}

function playSound(type) {
    initAudio();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    gain.gain.value = gameVolume;

    if (type === 'win') {
        osc.frequency.setValueAtTime(880, audioCtx.currentTime);
        osc.frequency.exponentialRampToValueAtTime(1320, audioCtx.currentTime + 0.1);
        osc.start(); osc.stop(audioCtx.currentTime + 0.3);
    } else {
        const freq = [150, 110, 190][Math.floor(Math.random()*3)];
        osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
        osc.frequency.linearRampToValueAtTime(40, audioCtx.currentTime + 0.5);
        osc.start(); osc.stop(audioCtx.currentTime + 0.5);
    }
}

function showScreen(id) {
    document.querySelectorAll('.screen').forEach(s => s.style.display = 'none');
    document.getElementById(id).style.display = 'flex';
}

function updateVolume(val) {
    gameVolume = val / 100;
    playSound('win');
}

function startGame() {
    initAudio();
    score = 0;
    qIdx = 0;
    shuffledQuestions = [...database[currentTheme]];
    renderQuestion();
    showScreen('quiz');
}

function renderQuestion() {
    const q = shuffledQuestions[qIdx];
    document.getElementById('question-text').innerText = q.q;
    document.getElementById('score-display').innerText = "SCORE: " + score;
    const container = document.getElementById('options-container');
    container.innerHTML = "";

    q.opts.forEach((text, index) => {
        const btn = document.createElement('button');
        btn.className = "btn-sub";
        btn.innerText = text;
        btn.onclick = () => {
            if (index === q.ans) {
                playSound('win');
                score++;
                qIdx++;
                if (qIdx < shuffledQuestions.length) renderQuestion();
                else { alert("PARABÉNS!"); showScreen('menu'); }
            } else {
                playSound('lose');
                alert("ERROU! Som de burro para você!");
                showScreen('menu');
            }
        };
        container.appendChild(btn);
    });
}