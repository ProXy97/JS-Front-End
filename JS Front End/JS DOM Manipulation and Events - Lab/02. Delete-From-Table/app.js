function deleteByEmail() {
    let input = document.querySelector('input[name="email"]');
    let tableRows = Array.from(document.querySelector("tbody").children);
    let isRemoved = false;
    let result = document.querySelector("#result");


    for (const row of tableRows) {
        const emailCell = row.children[1];

        if(emailCell.textContent === input.value){
            row.remove();
            isRemoved = true;
        }
    }

    if (isRemoved) {
        result.textContent = "Deleted.";
    }
    else {
        result.textContent = "Not Found.";
    }
}