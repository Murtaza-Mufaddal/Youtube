console.log("created by Murtaza");



let sub = document.querySelector(".subscribers");
let like = document.querySelector(".likes");
let btn = document.querySelector("#btn");

sub.addEventListener( "click", () => {
    let selectedOption = event.target.value; // get the selected option value
    
    switch(selectedOption) {
        case '1':
          function relod(){
            window.location.reload();
          } 
          //  setTimeout(relod,500);  
            btn.addEventListener("click", first);
            break;
        case '2':  
        btn.addEventListener("click", second);
        break;
        case '3' :
            btn.addEventListener("click", third);
            break;
        case '4' :
        btn.addEventListener("click", forth);
        break;    
        case '5' :
            btn.addEventListener("click", fifth);
            break;
            case '6':
              btn.addEventListener("click", sixth);
              break;    
        default:
            alert = "invalid";
    }



    
});
    
// function redirectToLink() {
//     window.location.href = "https://www.youtube.com/channel/UCuP2vJtq0VkxE3BHWaKlwQ";
//   }

function first() {
        window.location.href = "first.html";
      }
      

      function second() {
        window.location.href = "second.html";

      }
     

      function third() {
        window.location.href = "third.html";
      }
      

      function forth() {
        window.location.href = "forth.html";
      }
      


      function fifth() {
        window.location.href = "fifth.html";
      }
        
      function sixth() {
        window.location.href = "sixth.html";
      }


      // function for likes;;;!!!

      for(let i=1; i<=52; i++){
        console.log("Created By Murtaza")
      }



      