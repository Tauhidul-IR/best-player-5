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

// 1st calculation
document.getElementById('calculate').addEventListener('click', function () {
    const perPlayerCost = document.getElementById('player-cost-input');
    const playerCostString = perPlayerCost.value;
    const playerCost = parseInt(playerCostString);


    const playerSelected = document.getElementById('playercount');
    const playerSelectedString = playerSelected.innerText;
    const selectedPlayer = parseInt(playerSelectedString);

    const playerexp = document.getElementById('player-exprenses');
    const totalExprenses = playerCost * selectedPlayer;
    playerexp.innerText = totalExprenses;


})

// final calculation
document.getElementById('total').addEventListener('click', function () {
    const managerCost = document.getElementById('manager-cost');
    const managerCostString = managerCost.value;
    const managerCostAmount = parseInt(managerCostString);
    // console.log(typeof managerCostAmount)


    const coachCost = document.getElementById('coach-cost');
    const coachCostString = coachCost.value;
    const coachCostAmount = parseInt(coachCostString);

    // console.log(typeof coachCostAmount)

    const playerExprensesCost = document.getElementById('player-exprenses');
    const playerExprensestCosString = playerExprensesCost.innerText;
    const totalpLayerExprenses = parseInt(playerExprensestCosString);

    // console.log(typeof totalpLayerExprenses)


    const finalCost = document.getElementById('finalCost');
    const allExprenses = managerCostAmount + coachCostAmount + totalpLayerExprenses;
    finalCost.innerText = allExprenses;


})


