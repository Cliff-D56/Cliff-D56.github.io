let Characters = [];
const container = document.querySelector(".container");
class Character{
    //TODO Jsonify info for faster access
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
Edward.bio.set(`./edward1.png`,`Once upon a time was called Wrath the Furious, a weapon with no conscious thought and only desire was to destroy whatever was in it's path. 
    After gaining a conscious, Edward is wracked with guilt for the things he's done and is trying to move forward, well aware that the ghosts of his past are right behind him and making moves of their own.`);
Edward.bio.set(`./edward2.png`,`Since losing his abilities, Edward has become a shadow of himself. Spending his days working and drinking, the ghost of his failures haunting him at every turn.
    Denying everything even his name, Edward continues to work, keeping his distance from the people he loves.`)
Rahim.bio.set(`./rahim1.png`,`A warrior from Blackdust whose mother was killed right in front of him by the monster Wrath the Furious. This single act had set him down a path of pain 
    and revenge that has consumed every facet of his life and all but erased the happy child his mother protected. Now armed with a katana he forged with the sole purpose of vengence, Rahim will cut down anything in his path regardless if they be friend or foe.`)
Walter.bio.set(`./walter1.png`,`Walter Stonewell is a man born from the busom of war. There is no guilt or hesistation, only victory or death. With the birth of his daughter and the death of his wife, he aims to leave that past behind but any semblance of happiness has forever been wiped from his being.
    All that remains is his steadfast duty to defend his ward, ready and willing to destroy anything that threatens his charge, damning whatever consequences that follow.`)
// createPanel(Characters);
const panels = document.querySelectorAll(".panel")
panels.forEach((panel)=>{
    function updatePanel(Character){
        panel.getElementsByTagName("h3")[0].innerHTML = Character.fullname;
        // TODO have bio tied to corresponding picture/skin
        panel.getElementsByTagName("p")[0].innerHTML = Character.bio.get(Character.imagePaths[0]);
        // panel.getElementsByTagName("")[0].innerHTML 
    }
    panel.addEventListener("click",function clickSelector(){
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
            // TODO Replace with skin selector that has map tied to pic and bio
            // TODO Remove after creating skin selector
            if(character.imagePaths.length >1){
                // character.element.addEventListener("click",()=>{
                //     character.element.style.transition = "all 0.5s ease-in-out";
                //     character.element.style.backgroundImage==`url("${character.imagePaths[0]}")`? 
                //     character.element.style.backgroundImage = `url(${character.imagePaths[1]}`: 
                //     character.element.style.backgroundImage = `url(${character.imagePaths[0]}` 
                // })

                // TODO create toggle for event listener when clicked to another profile
                character.element.removeEventListener("click",clickSelector,false)
                skinSelector(character)
            }
        }
    })
})
// TODO find a place to put progress bar
// TODO have CSS put bar under photo
function skinSelector(character){
    if(!character.element.innerHTML.includes("progress")){
        character.element.innerHTML+=`
        <div class="skin selector">
        <div class="progress-container">
        <div class="progress" id="progress"></div>
        </div>
        <button class="btn" id="prev" disabled>Prev</button>
        <button class="btn" id="next" >Next</button>
        </div>`;
        const skinBar = document.querySelector(".progress-container")
        character.imagePaths.forEach(function(element,index){
            if(index==0){
                skinBar.innerHTML+=`<div class="circle active">${index+1}</div>`
            }
            else{
            skinBar.innerHTML+=`<div class="circle">${index+1}</div>`
            }
        })
    }
}
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