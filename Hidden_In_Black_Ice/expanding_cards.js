let Characters = [];
const container = document.querySelector(".container");
class Character{
    imagePaths=[];
    bio=new Map();
    constructor(fullname,name,images,id){
        this.fullname = fullname;
        //TODO make an Array of names for different points in the story for different bios 
        this.name = name[0].toUpperCase()+name.slice(1);
        this.images = images;
        this.id = id;

        for(let pic of images){
            if(pic.includes(name)){
                //TODO tie bios to names
                this.bio.set(`./${name}${images.indexOf(pic)+1}.png`,"Needs to be added");
                //TODO swap imagePath with images 
                this.imagePaths.push(`./${name}${images.indexOf(pic)+1}.png`);
            }
        }
        Characters.push(this);
        container.innerHTML+=`
        <div class="panel" id="${name}" style="background-image: url(${this.imagePaths[0]})">
        <h3>${this.name}</h3>
        <p>${this.bio.get(this.imagePaths[0])}</p>
        </div>`;
        this.element = document.querySelector(id);
    }
}

function createPanel(Characters){
    console.log("Creating Panels")
    for(let character of Characters){
        if(character ===Characters[0]){
            // document.createElement("div").classList.add("panel","active").style.backgroundImage = `url(${character.imagePaths[0]})`;
            container.innerHTML=`
            <div class="panel active" style="background-image: url(${character.imagePaths[0]})">
                <h3>${character.fullname}</h3>
                <p>${character.bio.get(character.imagePaths[0])}</p>
                </div>`;
            }
            else{
                container.innerHTML+=`
                <div class="panel" style="background-image: url(${character.imagePaths[0]})">
                <h3>${character.fullname}</h3>
                <p>${character.bio.get(character.imagePaths[0])}</p>
                </div>`;
            }
        }
    }
let Edward = new Character("Edward","edward",["edward1.png","edward2.png"],"#edward");
let Rahim = new Character("Rahim","rahim",["rahim1.png"],"#rahim")
let Walter = new Character("Walter Stonewell","walter",["walter1.png"],"#walter");
Edward.bio.set(`./edward1.png`,"Edward is a ");
// createPanel(Characters);
const panels = document.querySelectorAll(".panel")
panels.forEach((panel)=>{
    function updatePanel(Character){
        panel.getElementsByTagName("h3")[0].innerHTML = Character.fullname;
        panel.getElementsByTagName("p")[0].innerHTML = Character.bio.get(Character.imagePaths[0]);
    }
    panel.addEventListener("click",()=>{
        panels.forEach((panel)=>{
            panel.classList.remove("active")
        })
        panel.classList.add("active")
        let info = "#"+panel.id;
        for(let character of Characters){
            if(character.id === info){
                character.element = panel;
                updatePanel(character);
            }
            // TODO Remove after creating skin selector
            if(character.imagePaths.length >1){
                character.element.addEventListener("click",()=>{
                    character.element.style.transition = "all 0.5s ease-in-out";
                    character.element.style.backgroundImage==`url("${character.imagePaths[0]}")`? 
                    character.element.style.backgroundImage = `url(${character.imagePaths[1]}`: 
                    character.element.style.backgroundImage = `url(${character.imagePaths[0]}` 
                })
            }
        }
    })
})
const edward = Edward.element;
const edwardPics = Edward.imagePaths;
// @ts-ignore
// Edward.element.addEventListener("click",()=>{
//     console.log(edward.style.backgroundImage)
//     edward.style.transition = "all 0.5s ease-in-out";
//     // edward.style.backgroundImage=='url("'+edwardPics[0]+'")'? 
//     edward.style.backgroundImage==`url("${edwardPics[0]}")`? 
//     edward.style.backgroundImage = `url(${edwardPics[1]}`: 
//     edward.style.backgroundImage = `url(${edwardPics[0]}`
// })