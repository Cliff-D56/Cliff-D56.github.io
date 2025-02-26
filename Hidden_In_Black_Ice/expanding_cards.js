class Character{
    imagePaths=[];
    bio="";
    constructor(name,images,id){
        this.name = name;
        this.images = images;
        this.id = id;
        this.element = document.querySelector(id);

        let charArray = [];
        for(let i = 0; i<this.images.length; i++){
            if(this.images[i].includes(this.name)){
                console.log(this.images[i])
                charArray.push(`./${this.name}${i+1}.png`);
            }
        }
        this.imagePaths = charArray;
    }
    // getPics(){
    //     let charArray = [];
    //     for(let i = 0; i<this.images.length; i++){
    //         if(this.images[i].includes(this.name)){
    //             console.log(this.images[i])
    //             charArray.push(`./${this.name}${i+1}.png`);
    //         }
    //     }
    //     return charArray;
    // }
}
const panels = document.querySelectorAll(".panel")
panels.forEach((panel)=>{
    panel.addEventListener("click",()=>{
        panels.forEach((panel)=>{
            panel.classList.remove("active")
        })
        panel.classList.add("active")})
})
let Edward = new Character("edward",["edward1.png","edward2.png"],"#edward");
let Walter = new Character("walter",["walter1.png"],"#walter");

const edward = Edward.element;
const edwardPics = Edward.imagePaths;
const edwardJson = JSON.stringify(Edward);
console.log(edwardJson);
// @ts-ignore
edward.addEventListener("click",()=>{
    console.log(edward.style.backgroundImage)
    edward.style.transition = "all 0.5s ease-in-out";
    // edward.style.backgroundImage=='url("'+edwardPics[0]+'")'? 
    edward.style.backgroundImage==`url("${edwardPics[0]}")`? 
    edward.style.backgroundImage = `url(${edwardPics[1]}`: 
    edward.style.backgroundImage = `url(${edwardPics[0]}`
})