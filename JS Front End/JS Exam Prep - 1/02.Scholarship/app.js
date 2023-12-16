window.addEventListener("load", solve);

function solve() {
    
    const studentNameInputElement = document.getElementById('student');
    const universityInputElement = document.getElementById('university');
    const scoreInputElement = document.getElementById('score');
    const nextBtnElement = document.getElementById('next-btn');
    const previewListUlElement = document.getElementById('preview-list');
    const candidateListUlElement = document.getElementById('candidates-list');

    nextBtnElement.addEventListener('click', () => {

      if (!studentNameInputElement.value || !universityInputElement.value || !scoreInputElement.value) {
        return;
      }

      const li = document.createElement('li');
      li.className = 'application';

      const article = document.createElement('article');
      const h4 = document.createElement('h4');
      h4.textContent = studentNameInputElement.value;

      const universityParagraph = document.createElement('p');
      universityParagraph.textContent = `University: ${universityInputElement.value}`;

      const scoreParagraph = document.createElement('p');
      scoreParagraph.textContent = `Score: ${scoreInputElement.value}`;

      const editBtn = document.createElement('button');
      editBtn.textContent = 'edit';
      editBtn.classList = 'action-btn edit';

      editBtn.addEventListener('click', () => {
        studentNameInputElement.value = h4.textContent;
        universityInputElement.value = universityParagraph.textContent.split('University: ')[1];
        scoreInputElement.value = scoreParagraph.textContent.split('Score: ')[1];

        previewListUlElement.innerHTML = '';
        nextBtnElement.removeAttribute('disabled');

      })
      
      const applyBtn = document.createElement('button');
      applyBtn.textContent = 'apply';
      applyBtn.classList = 'action-btn apply';

      applyBtn.addEventListener('click', () => {
        
        candidateListUlElement.appendChild(li);

        previewListUlElement.innerHTML = '';

        editBtn.remove();
        applyBtn.remove();

        nextBtnElement.removeAttribute('disabled');
      })

      article.appendChild(h4);
      article.appendChild(universityParagraph);
      article.appendChild(scoreParagraph);
      li.appendChild(article);
      li.appendChild(editBtn);
      li.appendChild(applyBtn);

      previewListUlElement.appendChild(li);
      nextBtnElement.disabled = "true";

      clearInputFields();

    });


  
    function clearInputFields()
    {
      studentNameInputElement.value = '';
      scoreInputElement.value = '';
      universityInputElement.value = '';
    }
  }
  