console.log("JS Loaded")

const canvas = document.getElementById("canvas")

const getWindowWidth = ()=> window.innerWidth 
const getWindowHeight = ()=> window.innerHeight 

const resizeCanvasToWindow = ()=>{
    canvas.width = getWindowWidth()
    canvas.height = getWindowHeight()
}

const ctx = canvas.getContext("2d")
resizeCanvasToWindow()
ctx.clearRect(0,0, canvas.width, canvas.height)

/*
window.addEventListener("resize", ()=>{
    resizeCanvasToWindow()
    ctx.clearRect(0,0, canvas.width, canvas.height)
    ctx.fillRect(0,0, canvas.width/2, canvas.height/2)

})
*/

/*
canvas.addEventListener("mousemove", (event)=>{
    ctx.clearRect(0,0, canvas.width, canvas.height)
    ctx.fillRect(0,0, event.clientX, event.clientY)

})
*/