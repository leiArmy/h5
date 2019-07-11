window.onload = function(){
    let mySwiper = new Swiper('.swiper-container',{
        loop : true,
        autoplay : 2000,
        pagination:{el : ".swiper-pagination"}
          
    })
}

function addZero(n){
    return n<10 ? `0${n}` : n
}

let tomorrowStr = new Date()
tomorrowStr.setTime(tomorrowStr.getTime() + 24*60*60*1000)//明天
const hourLimit = 10 //固定为10点钟
const endTimeStr = new Date(`${tomorrowStr.getFullYear()}-${tomorrowStr.getMonth()+1}-${tomorrowStr.getDate()} ${hourLimit}:00:00`)

function fn(){
    const str = endTimeStr.getTime() - Date.now(),
        sStr = Math.floor(str / 1000) % 60
        mStr = Math.floor(str /1000 /60) %60
        hStr = Math.floor(str / 1000 /60 /60) %60
    //let dS = document.getElementById("dS")
    // dS.innerText = addZero(sStr)
    // dM.innerText = addZero(mStr)
    // dH.innerText = addZero(hStr)
}

fn()
setInterval(fn,1000)

