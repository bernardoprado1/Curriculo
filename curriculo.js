function CarregarCurriculo(){

	CarregarCabecalho();
	CarregarObjetivo();
	CarregarEducacao();
	CarregarIdiomas();
	CarregarHabilidades();
	CarregarExperiencia();
	CarregarRotina();
	document.getElementById('area-form').style.border = "solid black";

}

function CarregarCabecalho(){

	document.getElementById('nomeCabecalho').innerHTML = "Bernardo Prado Silva";
	document.getElementById('enderecoCabecalho').innerHTML =
	 "Rua João Cardoso Aires, 327 , 1501 --Boa Viagem - Recife-- 51.130.300 --(81) 9.8188-9981 -- bernardoprado42@gmail.com";
}

function CarregarObjetivo(){

	document.getElementById('obj1').innerHTML = "Atuar com foco em desenvolvimento Web";
}

function CarregarEducacao(){

	document.getElementById('ed1').innerHTML = "Ensino Médio Completo --  Colégio Santa Maria (Concluinte 2012)";
	document.getElementById('ed2').innerHTML =
	"Graduando Ensino Superior -- Análise e Desenvolvimento de Sistemas --  Unibratec, concluindo graduação em  (12-2019)";

}

function CarregarIdiomas(){

	document.getElementById('id1').innerHTML = "Português -- Fluente";	
	document.getElementById('id2').innerHTML = "Inglês -- Intermediário / Avançado";	
}

function CarregarHabilidades(){

	document.getElementById('hb1').innerHTML = "Foco em atingir o objetivo final, visando preservar a imagem da empresa durante o processo";	
	document.getElementById('hb2').innerHTML = "Liderar Tarefas";	
	document.getElementById('hb3').innerHTML = "Capacidade de adaptação à novas tecnologias";	
	document.getElementById('hb4').innerHTML = "Desenvolvimento Orientado a Objetos";	
	document.getElementById('hb5').innerHTML = "Proativo";	
	document.getElementById('hb6').innerHTML = "Conhecimento prévio das linguagens de programação Java e C#";	
	document.getElementById('hb7').innerHTML = "Conhecimento prévio do framework Hibernate";	
	document.getElementById('hb8').innerHTML = "Capacidade de desenvolver em qualquer banco de dados relacional";	
	document.getElementById('hb9').innerHTML = "Conhecimento em desenvolvimento nas linguagens Angular e AndroidStudio";	
	document.getElementById('hb10').innerHTML = "Conhecimento em desenvolvimento na área de Testes de Software";	
}

function CarregarExperiencia(){

	document.getElementById('exp1').innerHTML = 
	"Planejamento de atividades das equipes, controle sob cronograma de montagem, alocação de recursos, controle de incidentes e plano de venda pós montagem, de acordo com variáveis inseridas na rotina, tais como:   ";	
	document.getElementById('exp2').innerHTML = "Recebimento de mercadorias vindo da transportadora";
	document.getElementById('exp3').innerHTML = "Disponibilidade das equipes, de acordo com o progresso do cronograma de montagem de cada equipe";
	document.getElementById('exp4').innerHTML = "Danos na obra do cliente(Furo em canos não previstos, por exemplo)";
	document.getElementById('exp5').innerHTML = "Peças que chegam danificadas de fábrica ou com diferença de medidas";
}

function CarregarRotina(){

	document.getElementById('rot1').innerHTML = "Após ser feito uma venda, monto o cronograma de montagem para o projeto";
	document.getElementById('rot2').innerHTML = "Aloco pessoas para recebimento das mercadorias vindo da fábrica, de acordo com a agenda da transportadora";
	document.getElementById('rot3').innerHTML = "Na data do recebimento, comunico ao cliente que as mercadorias já foram recebidas e agendo o início da montagem";
	document.getElementById('rot4').innerHTML = "Aloco pessoas para descarregar os móveis do cliente na data e local combinados";
	document.getElementById('rot5').innerHTML = "Verifico se o local de montagem está compatível com o projeto para que eu libere o ambiente para montagem (Existencia e distância dos pontos de luz, água, som, internet e qualquer tipo de instalação que possa ter interferência nos móveis)";
	document.getElementById('rot6').innerHTML = "Defino o fluxo das atividades  no projeto e passo o cronograma de montagem pro cliente";
	document.getElementById('rot7').innerHTML = "Aloco equipe(s) para o local para dar início à montagem, explicando as atividades que devem ser feitas e os limitadores para cada atividade";
	document.getElementById('rot8').innerHTML = "No fim do dia verifico o andamento do trabalho para ter controle sob o cronograma";
	document.getElementById('rot9').innerHTML = "De acordo com o briefing do cliente, penso alternativas em como usá-lo para prospectar negócios";
	document.getElementById('rot10').innerHTML = "Agendo com o cliente o recebimento dos móveis, pondo em ação o plano pós venda para prospectar mais negócios";
	document.getElementById('rot11').innerHTML = "Ao entregas os móveis, realoco as equipes em outros projetos, evitando ociosidade entre as equipes";

}



