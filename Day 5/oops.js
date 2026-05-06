class Animal {

 constructor(name) {

 this.name = name;

 }

 speak() {

 console.log(`${this.name} makes a sound.`);

 }

}



const dog = new Animal("Jhonny");

const cat = new Animal("Whiskers");

dog.speak();

cat.speak();

//---------------------------------------------Example for OOPS-----------------------------------------------------------------------------------------------------

class Author {

  constructor(name) {
    this.name = name;
  }

  published() {
    console.log(`${this.name} is a writer.`);
  }

}

const TheDiscoveryOfIndia = new Author("Jawaharlal Nehru");
const IndiasStruggleAfterIndependence = new Author("Bipin Chandra");

TheDiscoveryOfIndia.published();
IndiasStruggleAfterIndependence.published();





//------------------------------------------------------Example for OOPS-----------------------------------------------------------------------------------------


class Student {

  constructor(name) {
    this.name = name;
  }

  study() {
    console.log(`${this.name} is studying.`);
  }

}

const s1 = new Student("Prabhav");
const s2 = new Student("Aryan");

s1.study();
s2.study();