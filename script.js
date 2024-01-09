function selectHouse(house){
    let body = document.body;

    switch(house){
        case 'Grifinória':
            /**body.style.backgroundImage = 'url("/imagens/1.jpg")';**/
            displayHouseInfo('<font color="#740001">Grifinória</font>', 'A casa que foi fundada por Godric Gryffindor possui como símbolo um leão e suas cores são vermelho e dourado. As principais características dos alunos dessa casa são ousadia, coragem, bravura e determinação. <br><br>Alguns membros famosos da Grifinória são Harry Potter, a família Weasley, Hermione Granger, Minerva McGonagall e Alvo Dumbledore.');
            break;
        case 'Sonserina':
            /**body.style.backgroundImage = 'url("/imagens/1.jpg")';**/
            displayHouseInfo('<font color="#1a472a">Sonserina</font>', 'A casa que foi fundada por Salazar Slytherin possui como símbolo uma cobra e sua cores são verde e prata. As principais características dos alunos dessa casa são astúcia, ambição, determinação, orgulho e autopreservação. <br><br>Alguns membros famosos da Sonserina são Severus Snape, Voldemort, Draco Malfoy e Bellatrix Lestrange.');
            break;
        case 'Corvinal':
            /**body.style.backgroundImage = 'url("/imagens/1.jpg")';**/
            displayHouseInfo('<font color="#0e1a40">Corvinal</font>', 'A casa que foi fundada por Rowena Ravenclaw possui como símbolo uma águia e suas cores são azul e bronze. As principais características dos alunos dessa casa são sagacidade, aprendizagem, sabedoria, aceitação, inteligência e criatividade. <br><br>Alguns membros famosos da Corvinal são Luna Lovegood, Sibila Trelawney, Cho Chang e Murta Warren.');
            break;
        case 'Lufa-Lufa':
            /**body.style.backgroundImage = 'url("/imagens/1.jpg")';**/
            displayHouseInfo('<font color="#ecb939">Lufa-Lufa</font>', 'A casa que foi fundada por Helga Hufflepuff possui como símbolo um texugo e suas cores são amarelo e preto. As principais características dos alunos dessa casa são trabalho árduo, justiça, lealdade, paciência, sinceridade e modéstia. <br><br>Alguns membros famosos da Lufa-Lufa são Cedric Diggory, Ninfadora Tonks e Newton Scamander.');
            break;

    }
}

function displayHouseInfo(name, info) {
    let infoElement = document.createElement('div');
    infoElement.innerHTML = `<strong>${name}</strong>: ${info}`;
    infoElement.setAttribute('id', 'houseInfo'); 
    
    let existingInfo = document.getElementById('houseInfo');
    if (existingInfo) {
        existingInfo.remove();
    }

    document.body.appendChild(infoElement);
}
