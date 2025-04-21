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
export{Characters,Character,container}