function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   let searchingText = document.getElementById("searchField");
   let tableRows = document.querySelectorAll("tbody tr");


   function onClick() {
      
      for (const row of tableRows) {
         row.className = '';
      }

      for (const row of tableRows) {
         if(searchingText.value !== '' && row.innerHTML.includes(searchingText.value))
         {
            row.className = 'select';
         }
      }
      searchingText.value = '';

   }
}