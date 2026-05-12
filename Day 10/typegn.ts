function format(input: string | number) {
    if(typeof input === "string") {
        return input.toUpperCase(); 
    }
    return input.toFixed(2); 
}



interface Bird { fly: () => void, species: string }
interface Fish { swim: () => void }

function move(animal: Bird | Fish) {
    if("fly" in animal) {
        animal.fly(); 
    } else {
        animal.swim();
    }
}

function isValidBird(bird: Bird): bird is Bird {
    return bird && typeof bird.species === "string";
}

const b1 = {fly: () => {}, species: "aerial"}
if(isValidBird(b1)) {
    console.log(b1.species); 
}