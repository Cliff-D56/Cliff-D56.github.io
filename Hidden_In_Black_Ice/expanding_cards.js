
const panels = document.querySelectorAll(".panel")
panels.forEach((panel)=>{
    panel.addEventListener("click",()=>{
        panels.forEach((panel)=>{
            panel.classList.remove("active")
        })
        panel.classList.add("active")})
})
const images = ["edward1.png","edward2.png"]
const edward = document.querySelector("#edward")
const edwardPics = getPics("edward")
function getPics(name){
    let charArray = [];
    for(let i = 0; i<images.length; i++){
        if(images[i].includes(name)){
        console.log(images[i])
        charArray.push(`./${name}${i+1}.png`);
    }
}
    return charArray;
}
// @ts-ignore
edward.addEventListener("click",()=>{
    edward.style.transition = "all 0.5s ease-in-out";
    edward.style.backgroundImage=='url("'+edwardPics[0]+'")'? 
    edward.style.backgroundImage = `url(${edwardPics[1]}`: 
    edward.style.backgroundImage = `url(${edwardPics[0]}`
})