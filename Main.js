console.log("created by Murtaza");

let sub = document.querySelector(".subscribers");
let like = document.querySelector(".likes");
let btn = document.querySelector("#btn");

sub.addEventListener( "click", () => {
    let selectedOption = event.target.value; // get the selected option value
    
    switch(selectedOption) {
        case "1":
            btn.addEventListener("click", first);
            break;
        case "2":  
        btn.addEventListener("click", second);
        break;
        case "3" :
            btn.addEventListener("click", third);
            break;
        case "4" :
        btn.addEventListener("click", forth);
        break;    
        case "5" :
            btn.addEventListener("click", fifth);
            break;
            case "6" :
              btn.addEventListener("click", sixth);
              break;    
        default:
            alert = "invalid";
    }

    // if(selectedOption = '1'){
    //     btn.addEventListener("click", first);
    // } if(selectedOption = '2'){
    //     btn.addEventListener("click", second);
    // } if(selectedOption = '3'){
    //     btn.addEventListener("click", third);
    // } if(selectedOption = '4'){
    //     btn.addEventListener("click", forth);
    // } if(selectedOption = '5'){
    //     btn.addEventListener("click", fifth);
    // }
  
    // if (selectedOption == "1") {
    //     btn.addEventListener("click", redirectToLink);
      

    
});
    
// function redirectToLink() {
//     window.location.href = "https://www.youtube.com/channel/UCuP2vJtq0VkxE3BHWaKlwQ";
//   }

function first() {
        window.location.href = "first.html";
      }
      alert

      function second() {
        window.location.href = "second.html";
      }
      alert

      function third() {
        window.location.href = "third.html";
      }
      alert

      function forth() {
        window.location.href = "forth.html";
      }
      alert


      function fifth() {
        window.location.href = "fifth.html";
      }
      alert

      function sixth() {
        window.location.href = "sixth.html";
      }
      alert


      // function for likes;;;!!!

      for(let i=1; i<=52; i++){
        console.log("Created By Murtaza")
      }



      