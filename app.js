var perguntas = [	{		pergunta: "Qual é a minha cor favorita?",		resposta: "azul",		opcoes: ["rosa", "azul", "verde"]
	},
	{
		pergunta: "Qual meu filme favorito?",
		resposta: "O ódio que você semeia",
		opcoes: ["Titanic", "O ódio que você semeia", "Taxi driver"]
	},
	{
		pergunta: "Qual é o meu lugar favorito para viajar?",
		resposta: "Paris",
		opcoes: ["Paris", "Nova York", "Tóquio"]
	},
    {
		pergunta: "Minha comida favorita",
		resposta: "Feijão, arroz e ovo",
		opcoes: ["Feijão, arroz e ovo", "Lasanha", "Macarrão com salsicha"]
	},
    {
		pergunta: "Qual o apelido que mais gosto de chamar você?",
		resposta: "Minha preta",
		opcoes: ["Historiadora gostosa", "Minha preta", "Fedorenta"]
	},
    {
		pergunta: "Qual o nome da nossa série?",
		resposta: "Dois homens e meio",
		opcoes: ["Dois homens e meio", "Dois homens e metade", "Alan e suas aventuras"]
	},
    {
		pergunta: "Qual a música que amo ouvir com você?",
		resposta: "Stay down",
		opcoes: ["The beach", "Stay down", "Clouded"]
	},
    {
		pergunta: "O que comemos no primeiro encontro",
		resposta: "Parmegiana",
		opcoes: ["Strogonoff", "Lasanha" , "Parmegiana"]
	},
    {
		pergunta: "Tenho mais medo de quê?",
		resposta: "Altura",
		opcoes: ["Ratos", "Baratas" , "Altura", "Andar de moto"]
	},
    {
		pergunta: "Onde foi nosso primeiro beijo",
		resposta: "Orla",
		opcoes: ["Na rua", "Em casa" , "Orla"]
	},
    {
		pergunta: "Você me ama?",
		resposta: "Sim",
		opcoes: ["Sim","Sim", "Sim"]
	},
];

var pontuacao = 0;
var indicePergunta = 0;
function mostrarPergunta() {
	var perguntaAtual = perguntas[indicePergunta];
	var perguntaHTML = document.createElement("p");
	perguntaHTML.textContent = perguntaAtual.pergunta;
	document.getElementById("jogo").appendChild(perguntaHTML);

	var opcoesResposta = document.createElement("div");
	opcoesResposta.id = "opcoes";
	document.getElementById("jogo").appendChild(opcoesResposta);

	for (var i = 0; i < 3; i++) {
		var botaoResposta = document.createElement("button");
		botaoResposta.textContent = perguntaAtual.opcoes[i];
		botaoResposta.addEventListener("click", verificarResposta);
		opcoesResposta.appendChild(botaoResposta);
	}
}

function verificarResposta(evento) {
	var respostaSelecionada = evento.target.textContent;
	var perguntaAtual = perguntas[indicePergunta];

	if (respostaSelecionada === perguntaAtual.resposta) {
		pontuacao++;
		document.getElementById("opcoes").innerHTML = "<p>Parabéns, você acertou! vai ganhar um beijo se continuar assim hein.</p>";
		document.getElementById("opcoes").innerHTML += "<button id='proxima'>Próxima Pergunta</button>";
		document.getElementById("proxima").addEventListener("click", proximaPergunta);
	} else {
		document.getElementById("opcoes").innerHTML = "<p>Ihhh, você errou! tá perdendo a chance de dar um beijo em mim</p>";
		document.getElementById("opcoes").innerHTML += "<button id='proxima'>Próxima Pergunta</button>";
		document.getElementById("proxima").addEventListener("click", proximaPergunta);
	}
}

function proximaPergunta() {
	if (indicePergunta < perguntas.length - 1) {
		indicePergunta++;
		document.getElementById("jogo").innerHTML = "";
		mostrarPergunta();
	} else {
		document.getElementById("jogo").innerHTML = "<p>Sua pontuação final é " + pontuacao + "!</p>";
		if (pontuacao === perguntas.length) {
			document.getElementById("jogo").innerHTML += "<p>Parabéns, você acertou todas as perguntas e ganhou um beijo meu!</p>";
		} else {
			document.getElementById("jogo").innerHTML += "<p>Ihhh, você perdeu a chance de me beijar desta vez, mas terá outra chance no próximo jogo!</p>";
		}
	}
}

document.getElementById("iniciar").addEventListener("click", mostrarPergunta);

	
