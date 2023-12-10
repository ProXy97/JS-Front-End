function search() {
   let list = Array.from(document.querySelectorAll("li"));
   let searching = document.getElementById("searchText").value;
   let result = document.getElementById("result");
   let matches = 0;

   for (const town of list) 
   {
      
         town.style.textDecoration = '';
         town.style.fontWeight = '';

   }

   for (const town of list) 
   {
      if(town.textContent.includes(searching))
      {
         matches++;
         town.style.textDecoration = "underline";
         town.style.fontWeight = "bold";
      }
   }

   result.textContent = `${matches} matches found`;
   
}
