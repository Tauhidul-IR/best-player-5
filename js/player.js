let nameOfPlayer = [];


function showName() {
    let totalPlayers = 0;
    const Player = document.getElementById("playercount");
    Player.innerText = nameOfPlayer.length;

    const showName = document.getElementById('showplayerName');
    showName.innerText = '';
    for (let i = 0; i < nameOfPlayer.length; i++) {
        totalPlayers += nameOfPlayer[i];

        const ol = document.createElement("ol");
        ol.innerHTML = `
       <li>${i + 1}<spna> </spna> <spna>${nameOfPlayer[i]}</spna></li>
        `;
        showName.appendChild(ol);
    }
}



function getName(name) {
    const playerName = name.parentNode.parentNode.children[0].innerText;
    if (nameOfPlayer.length > 4) {
        alert('Not able to Add monre');
        return;
    }
    else {
        nameOfPlayer.push(playerName);
    }

    showName();
}


function getInputText(inputtext) {
    const textInput = document.getElementById(inputtext);
    const textInputString = textInput.innerText;
    const finalText = parseInt(textInputString);
    return finalText;
}


function getInputValue(inputValue) {
    const inputValus = document.getElementById(inputValue);
    const inputValueString = inputValus.value;
    const finalValue = parseInt(inputValueString);
    return finalValue;
}

// 1st calculation
document.getElementById('calculate').addEventListener('click', function () {
    const playerCost = getInputValue("player-cost-input");


    const selectedPlayer = getInputText('playercount');

    const playerexp = document.getElementById('player-exprenses');
    const totalExprenses = playerCost * selectedPlayer;
    playerexp.innerText = totalExprenses;


})

// final calculation
document.getElementById('total').addEventListener('click', function () {

    const managerCostAmount = getInputValue("manager-cost");


    const coachCostAmount = getInputValue('coach-cost');


    const totalpLayerExprenses = getInputText('player-exprenses');


    const finalCost = document.getElementById('finalCost');
    const allExprenses = managerCostAmount + coachCostAmount + totalpLayerExprenses;
    finalCost.innerText = allExprenses;


})


// button disable--
let SelectedBtnList = [];
function show(value) {
    const selectedBtn = value;
    SelectedBtnList.push(selectedBtn)
    for (let i = 0; i < SelectedBtnList.length; i++) {
        if (SelectedBtnList.length < 6) {
            selectedBtn.disabled = true;
        }
    }

}




