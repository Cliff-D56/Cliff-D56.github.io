import { Character,Characters,container } from "../character_module";

let Edward = new Character("Edward","edward",["edward1.png","edward2.png"],"#edward");
Edward.bio.set(`./edward1.png`,`Once upon a time was called Wrath the Furious, a weapon with no conscious thought and only desire was to destroy whatever was in it's path. 
    After gaining a conscious, Edward is wracked with guilt for the things he's done and is trying to move forward, well aware that the ghosts of his past are right behind him and making moves of their own.`);
Edward.bio.set(`./edward2.png`,`Since losing his abilities, Edward has become a shadow of himself. Spending his days working and drinking, the ghost of his failures haunting him at every turn.
    Denying everything even his name, Edward continues to work, keeping his distance from the people he loves.`)

let EdwardJSON = JSON.stringify(Edward)
export {Edward};