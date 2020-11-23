let btn1 = document.getElementById('btn1')
let btn2 = document.getElementById('btn2')
let btn3 = document.getElementById('btn3')
let btn4 = document.getElementById('btn4')
let body = document.body
let now = new Date()





console.log(now.getHours())


if ((now.getHours() > 0 && now.getHours() <= 6) && (now.getHours() >= 18 && now.getHours() <= 23)) {

    body.style.backgroundColor = '#222'



}



btn1.onclick = function () {

    window.location = 'https://leoportogtr86.github.io/domaior/'

}



btn2.onclick = function () {

    window.location = 'https://5fafd68606e72e307af07108--agitated-kepler-e8b02f.netlify.app/'

}



btn3.onclick = function () {

    window.location = 'https://5f22a3aa951d4c1837ff153e--leoportojam.netlify.app/'

}



btn4.onclick = function () {

    window.location = 'https://5faac89435e77c2b77b92133--competent-goldstine-d3c999.netlify.app/'

}