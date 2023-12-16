window.addEventListener("load", solve);

function solve()
{
    const expenseInputElement = document.getElementById('expense');
    const amountInputElement = document.getElementById('amount');
    const dateinputElement = document.getElementById('date');
    const addBtnElement = document.getElementById('add-btn');
    const previewListUlElement = document.getElementById('preview-list');
    const expenseListUlElement = document.getElementById('expenses-list');
    const deleteBtn = document.getElementsByClassName('btn delete')[0];
    
    addBtnElement.addEventListener('click', () => {

        if (!expenseInputElement.value || !amountInputElement.value || !dateinputElement.value) {
            return;
        }

        const li = document.createElement('li');
        li.className = 'expense-item';

        const article = document.createElement('article');

        const foodTypeParagraph = document.createElement('p');
        foodTypeParagraph.textContent = `Type: ${expenseInputElement.value}`;

        const amountParagraph = document.createElement('p');
        amountParagraph.textContent = `Amount: ${amountInputElement.value}$`;

        const dateParagraph = document.createElement('p');
        dateParagraph.textContent = `Date: ${dateinputElement.value}`;

        const buttonsDiv = document.createElement('div');
        buttonsDiv.className = 'buttons';

        const editBtn = document.createElement('button');
        editBtn.classList = 'btn edit';
        editBtn.textContent = 'edit';

        editBtn.addEventListener('click', () => {
            expenseInputElement.value = foodTypeParagraph.textContent.split('Type: ')[1];
            amountInputElement.value = amountParagraph.textContent.split('Amount: ')[1].slice(0, -1);
            dateinputElement.value = dateParagraph.textContent.split('Date: ')[1];

            previewListUlElement.innerHTML = '';
            addBtnElement.removeAttribute("disabled");
        })

        const okBtn = document.createElement('button');
        okBtn.classList = 'btn ok';
        okBtn.textContent = 'ok';

        okBtn.addEventListener('click', () => {
            expenseListUlElement.appendChild(li);

            previewListUlElement.innerHTML = '';

            buttonsDiv.remove();

            addBtnElement.removeAttribute("disabled");
        })

        buttonsDiv.appendChild(editBtn);
        buttonsDiv.appendChild(okBtn);

        article.appendChild(foodTypeParagraph);
        article.appendChild(amountParagraph);
        article.appendChild(dateParagraph);

        
        li.appendChild(article);
        li.appendChild(buttonsDiv);

        previewListUlElement.appendChild(li);

        addBtnElement.disabled = true;
        clearInput();
    })
    
    deleteBtn.addEventListener('click', () => {
        location.reload(true);
    })

    function clearInput()
    {
        expenseInputElement.value = '';
        amountInputElement.value = '';
        dateinputElement.value = '';
    }


}