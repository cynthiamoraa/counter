// document.getElementById(count).innerText
let counter = document.getElementById("counter")
let counterb = document.getElementById("counterb")
let save = document.getElementById("save")
let count = 0

let btn = document.getElementById("incrementbtn")
btn.addEventListener("click", function(){
count += 1
counter.innerText=count
console.log(counter.innerText)


let countb = count

let btnb = document.getElementById("decrementbtn")
btnb.addEventListener("click", function(){
countb -= 1

counterb.innerText = countb
counter.innerText = counterb.innerText
count = countb
console.log(count)
}) 
})

let btnc = document.getElementById("savebtn")
btnc.addEventListener("click", function(){
pestr = count + "-"
save.innerText += pestr 
console.log(save.innerText)
})
 let btnr = document.getElementById("reset")
 btnr.addEventListener("click", function(){
    counter.innerText = 0
    counterb.innerText = 0
    coountb = 0
    count = 0
 })





