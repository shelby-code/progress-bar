const circles = document.querySelectorAll('.circle')
const progress = document.getElementById('progress')
const next = document.getElementById('next')
const prev = document.getElementById('prev')

let value = 1

next.addEventListener('click', ()=> {
    value++

    if(value > circles.length){
        value = circles.length
    }
    
    update()
})

prev.addEventListener('click', ()=> {
    value--

    if(value < 1){
        value = 1
    }
    update()
})

function update(){
    const actives = document.querySelectorAll('.active')


    circles.forEach((circle, index)=>{
        if(index < value){
            circle.classList.add('active')
        }else{
            circle.classList.remove('active')
        }
        
    })
    progress.style.width = (value -1) / (circles.length-1) * 100 + '%'

    if(value === 1){
        prev.disabled = true
    }else if(value === circles.length){
        next.disabled = true
    }else {
        prev.disabled = false
        next.disabled = false
    }
}