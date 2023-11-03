document.querySelector('.heading').innerHTML ='제목입니다.'
document.querySelector('img').alt ='개발자'
document.querySelector('.btn').addEventListener('click', ()=>{
    alert(prompt("아무거나 입력하세요"))
});

let console9Btn = document.querySelector('.conBtn')

function conBtn(){
    console.log('안녕하세요.')
}

console9Btn.addEventListener('click', conBtn)

function mutiply(a){
    console.log(a*2)
}

document.querySelector('.multiplyTwo').addEventListener('click', ()=>{
    const multiPa = prompt('무얼 곱해볼까')
    mutiply(multiPa)
});

let date =new Date()
let hour = date.getHours();

document.querySelector('.time').addEventListener('click', ()=>{
    if(hour<10){
        console.log("good morning")
    }else if(hour<18){
        console.log("good afternoon")
    }else if(hour<3){
        console.log("good evening")
    }
});