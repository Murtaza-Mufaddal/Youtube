console.log("created by Murtaza");



let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let  four = document.querySelector("#four");
let five = document.querySelector("#five");
let six = document.querySelector("#six");


one.addEventListener('click', function () {
  window.location.href = "first.html";
  alert('you click on 3Rs')
});

two.addEventListener('click', function () {
  window.location.href = "second.html";
  alert('you click on 9Rs')

});

three.addEventListener('click', function () {
  window.location.href = "third.html";
  alert('you click on 15Rs')
});

four.addEventListener('click', function () {
  window.location.href = "forth.html";
  alert('you click on 30Rs')
});

five.addEventListener('click', function () {
  window.location.href = "fifth.html";
  alert('you click on 45Rs')
});

six.addEventListener('click', function () {
  window.location.href = "sixth.html";
  alert('you click on 60Rs')
});


