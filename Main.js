console.log("created by Murtaza");

let sub = document.querySelector(".subscribers");
let like = document.querySelector(".likes");
let btn = document.querySelector("#btn");

sub.addEventListener("change", () => {
    let selectedOption = sub.value; // get the selected option value

    switch (selectedOption) {
        case "1":
            btn.addEventListener("click", first);
            alert("you selected 1");
            break;
        case "2":
            btn.addEventListener("click", second);
            alert("you selected 2");
            break;
        case "3":
            btn.addEventListener("click", third);
            alert("you selected 3");
            break;
        case "4":
            btn.addEventListener("click", forth);
            alert("you selected 4");
            break;
        case "5":
            btn.addEventListener("click", fifth);
            alert("you selected 5");
            break;
        case "6":
            btn.addEventListener("click", sixth);
            alert("you selected 6");
            break;
        default:
            alert("invalid");
    }
});

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

// function for likes;!!!