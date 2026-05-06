class CoffeMachine {
    #waterTemperature = 90;
 
    #boilWater() {
        return `Boiling water to ${this.#waterTemperature} degrees.`;
    }
 
    #grindBeans() {
        return "Grinding beans.";
    }
 
    brew() {
        const boilMessage = this.#boilWater();
        const grindMessage = this.#grindBeans();
        return `${boilMessage} ${grindMessage} Brewing coffee.`;
    }
}
 
const myCoffeMachine = new CoffeMachine();
console.log(myCoffeMachine.brew());
 



//------------------------Example for Abstraction-------------------------------------------------------------------------------------------------------------------------


class BookPublisher {
    #authorName = "Jawaharlal Nehru";

    #writeBook() {
        return `${this.#authorName} is writing the book.`;
    }

    #publishBook() {
        return "Publishing the book.";
    }

    releaseBook() {
        const writeMessage = this.#writeBook();
        const publishMessage = this.#publishBook();

        return `${writeMessage} ${publishMessage} Book is now available for readers.`;
    }
}

const myBook = new BookPublisher();

console.log(myBook.releaseBook());