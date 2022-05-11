// document.querySelector(".overlay") {

// }
document.querySelector(".overlay").click(function(){    	
    if (document.getElementsByClassName("burger")[0].classList.contains("active-burger")) {
        document.querySelector( ".burger" ).classList.remove("active-burger"); 
        document.querySelector( ".overlay" ).style.display = "none";
    }
  });
document.querySelector(".overlay").click(function () {
    if (document.getElementsByClassName("burger")[0].classList.contains("active-burger")) {
        document.querySelector(".burger").classList.remove("active-burger");
        document.querySelector(".overlay").style.display = "none";
    }
});
document.querySelector(".burger i").click(function () {
    document.querySelector(".overlay").style.display = "block";
});

document.querySelector(".burger > i").click(function () {
    document.querySelector(".overlay").style.display = "none";
});