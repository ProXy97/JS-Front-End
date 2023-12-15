window.addEventListener("load", solve);

function solve() {

    const playerNameInputElement = document.getElementById('player');
    const scoreInputElement = document.getElementById('score');
    const roundInputElement = document.getElementById('round');
    const addBtnElement = document.getElementById('add-btn');
    const clearBtnElement = document.getElementsByClassName('btn clear')[0];
    const sureListElement = document.getElementById('sure-list');
    const scoreBoardListElement = document.getElementById(`scoreboard-list`);

    const editBtn = document.createElement('button');
    const okBtn = document.createElement('button');

    addBtnElement.addEventListener('click', () => {
      if (playerNameInputElement.value && scoreInputElement.value && roundInputElement.value) 
      {
        const li = document.createElement('li');

        editBtn.textContent = `edit`;
        editBtn.classList = `btn edit`;
        okBtn.textContent = `ok`;
        okBtn.classList = `btn ok`;

        li.className = 'dart-item';

        const article = document.createElement('article');
        const paragraphNameElement = document.createElement('p');
        const paragraphScoreElement = document.createElement('p');
        const paragraphRoundElement = document.createElement('p');

        paragraphNameElement.textContent = playerNameInputElement.value;
        paragraphScoreElement.textContent = `Score: ${scoreInputElement.value}`;
        paragraphRoundElement.textContent = `Round: ${roundInputElement.value}`;

        article.appendChild(paragraphNameElement);
        article.appendChild(paragraphScoreElement);
        article.appendChild(paragraphRoundElement);
        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(okBtn);
        sureListElement.appendChild(li);

        playerNameInputElement.value = ``;
        scoreInputElement.value = ``;
        roundInputElement.value = ``;
        addBtnElement.disabled = `true`;
      };

    });

    editBtn.addEventListener(`click`, () => {
      const playerDetails = Array.from(document.querySelectorAll('article p'));
      const playerName = playerDetails[0].textContent;
      const playerScore = playerDetails[1].textContent.split(`Score: `)[1];
      const playerRound = playerDetails[2].textContent.split(`Round: `)[1];

      playerNameInputElement.value = playerName;
      scoreInputElement.value = playerScore;
      roundInputElement.value = playerRound;

      addBtnElement.removeAttribute(`disabled`);
      sureListElement.innerHTML = ``;

      
    })
    okBtn.addEventListener(`click`, () => {

      const li = document.querySelectorAll('li')[0];

      scoreBoardListElement.appendChild(li);
      editBtn.remove();
      okBtn.remove();
      addBtnElement.removeAttribute(`disabled`);

    })

    clearBtnElement.addEventListener(`click`, () => {
      location.reload(true);
    })

}
