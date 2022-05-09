function show(anythhing) {
    document.querySelector('.textBox1').value = anythhing;
}
function show2(anythhing) {
    document.querySelector('.textBox2').value = anythhing;
}
let dropdown1 = document.querySelector('.dropdown1');
dropdown1.onclick = function () {
    dropdown1.classList.toggle('active');
}
let dropdown2 = document.querySelector('.dropdown2')
dropdown2.onclick = function() {
    dropdown2.classList.toggle('active')
}