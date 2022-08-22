let nameOfPlayer = [];


function showName() {

    let totalPlayers = 0;
    const Player = document.getElementById("playercount");
    Player.innerText = nameOfPlayer.length;

    const showNamw = document.getElementById('showplayerName');
    showNamw.innerText = '';
    for (let i = 0; i < nameOfPlayer.length; i++) {
        totalPlayers += nameOfPlayer[i];

        const ol = document.createElement("ol");
        ol.innerHTML = `
       <li>${i + 1}<spna> </spna> <spna>${nameOfPlayer[i]}</spna></li>
        `;
        showNamw.appendChild(ol);
        // <h2></h2>

    }


}

function getName(name) {
    const playerName = name.parentNode.parentNode.children[0].innerText;

    if (nameOfPlayer.length > 4) {
        alert('not able');
        return;
    }
    else {
        nameOfPlayer.push(playerName);
    }

    showName();
}


document.getElementById('calculate').addEventListener('click', function () {
    const perPlayerCost = document.getElementById('player-cost-input');
    const playerCost = perPlayerCost.value;


    const playerSelected = document.getElementById('playercount');
    const playerSelectedString = playerSelected.innerText;
    const selectedPlayer = parseInt(playerSelectedString);

    const playerexp = document.getElementById('player-exprenses');

    const totalExprenses = playerCost * selectedPlayer;

    playerexp.innerText = totalExprenses;


})


