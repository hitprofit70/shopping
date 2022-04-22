function myFunction() {
    let moreImage = document.getElementById("more");
    let btnImage = document.getElementById("myBtn");

    if (more.style.display === "none") {
        more.style.display = "inline";
        btnImage.innerHTML = "Show more";
        moreImage.style.display = "none";
    }   else {
        more.style.display = "none";
        btnImage.innerHTML = "Show less";
        moreImage.display = "inline";
    }
}