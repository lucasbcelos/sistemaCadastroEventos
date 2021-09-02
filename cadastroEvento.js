//Inicio do Código - Armazenando Data atual e em seguida a data do evento

const dataAtual = new Date();
let dataEvento = new Date('2021-10-01 14:00:00');

// Comparar as datas, caso a dataEvento > dataAtual, permitir

if (dataEvento.getTime() <= dataAtual.getTime()) {

    console.log("Evento não Permitido, Data Inválida");

} else {
    console.log("Evento Permitido! Qual o Nome do Evento?");

    // Armazenar Nome do Evento e Palestrante

    const nomeEvento = ("Evento 1");
    console.log(nomeEvento);

    const nomePalestrante = ("Palestrante A");
    console.log(nomePalestrante);

    // Adicionando Participantes até o limite de 100 pessoas

    const listaParticipantes = []

    const idadeParticipante = []
    let contador = 0

    //Inicio do Laço, aqui será armazenado 100 Participantes acima de 18 anos

    do {
        //Aqui teria uma entrada de dados do usuario pra inserir a idade a cada laço

        idadeParticipante.push("21");

        if (idadeParticipante[contador] < 18) {
            console.log("Cadastro não Permitido, menor de Idade")
        } else {
            console.log("Cadastro Permitido! Informe o nome do Participante");

            // Aqui teria uma entrada de dados do usuario sobre o nome do participante a cada laço

            listaParticipantes.push("Nome do Participante")
            console.log(listaParticipantes[contador])

            contador++
        }
    } while (listaParticipantes.length < 100);

    // Escrever o nome do Evento e do Palestrante

    console.log("Limite de Participantes Alcançado!");
    console.log("Evento: " + nomeEvento + " !");
    console.log("O Palestrante é " + nomePalestrante + ".");

    //Escrever a posição do participante, o nome e sua idade

    for (let index = 0; index < listaParticipantes.length; index++) {
        let cont2 = index + 1;
        console.log("Participante " + cont2 + " : " + listaParticipantes[index] + " Tem " + idadeParticipante[index] + " Anos");

    }
}
