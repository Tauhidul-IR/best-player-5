let nameOfPlayer = [];


function showName() {
    const showNamw = document.getElementById('showplayerName');
    showNamw.innerText = '';
    for (let i = 0; i < nameOfPlayer.length; i++) {


        const ol = document.createElement("p");
        ol.innerHTML = `
        <h2>${i + 1}<spna> </spna> <spna>${nameOfPlayer[i]}</spna></h2>
        `;
        showNamw.appendChild(ol);


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


