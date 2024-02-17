console.log("created by Murtaza");

let sub = document.querySelector(".subscribers");
let like = document.querySelector(".likes");
let btn = document.querySelector("#btn");

sub.addEventListener( "click", () => {
    let selectedOption = event.target.value; // get the selected option value
    
    // switch(selectedOption) {
    //     case "1":
    //         btn.addEventListener("click", first);
    //         alert("you secect 1")
    //         break;
    //     case "2":  
    //     btn.addEventListener("click", second);
    //     alert("you secect 2")
    //     break;
    //     case "3" :
    //         btn.addEventListener("click", third);
    //         alert("you secect 3")
    //         break;
    //     case "4" :
    //     btn.addEventListener("click", forth);
    //     alert("you secect 4")
    //     break;    
    //     case "5" :
    //         btn.addEventListener("click", fifth);
    //         alert("you secect 5")
    //         break;
    //         case "6" :
    //           btn.addEventListener("click", sixth);
    //           alert("you secect 6")
    //           break;    
    //     default:
    //         alert = "invalid";
    // }

    if(selectedOption = '1'){
        btn.addEventListener("click", first);
    } else if(selectedOption = '2'){
        btn.addEventListener("click", second);
    } else if(selectedOption = '3'){
        btn.addEventListener("click", third);
    } else if(selectedOption = '4'){
        btn.addEventListener("click", forth);
    } else if(selectedOption = '5'){
        btn.addEventListener("click", fifth);
    }  else if(selectedOption = '6'){
      btn.addEventListener("click", fifth);
    }  else {
      alert('Invalid input');
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



      