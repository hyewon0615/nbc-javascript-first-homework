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

