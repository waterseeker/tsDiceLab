let dieContainer: HTMLElement;

var counter = 0;

document.addEventListener('DOMContentLoaded', () => {
    dieContainer = document.getElementById('dieContainer')

});

function generateRandomNumber(): string {
    return String(Math.floor(Math.random() * 6) + 1);
}

class Die {
    div: HTMLElement;
    id : number;
    constructor() {
        this.div = document.createElement('div');
        this.div.className = 'die';
        this.div.innerHTML = generateRandomNumber();
        this.insertDie();
        this.div.addEventListener('dblclick', () => {
            this.div.remove();
            // assign an id to each die as it is created
            // run a for loop through the array to find that id
            // remove that id from the array
        })
    }
    rollDie() {
        this.div.innerHTML = generateRandomNumber();
    }

    insertDie() {
        dieContainer.appendChild(this.div);
    }

}

let dieArray: Array<Die> = [];

function addDie() {
    let die = new Die();
    dieArray.push(die);
    counter ++;
    die.id = counter;
}

function rollAllDice () {
    for ( let i = 0; i < dieArray.length; i++) {
        dieArray[i].rollDie();
    }
}
    function sumDice() {
        let sum: number = 0;
        for (let i = 0; i < dieArray.length; i++) {
            sum += Number(dieArray[i].div.innerHTML);
        }
        alert ("This is the sum of the dice: " + (sum));
    }

    function removeDie() {

    }
//     rollDie(){
//         //rolls your dice
//     }

//     removeDie(){
//         //removes this instance of a dice
//     }
// }

// class DieCreator {
//     addDie(){
//     }
// }

// interface IDie {
//     value: number;
//     class?: string; 
//     // if you use a question mark after the key, it is an optional key as far as expected shape of the object is concerned
//     // interfaces set the expected value type of keys of an object
    
// }
// this.div.remove will remove the div on dblclick
// // let variables only exist inside the closest block, var variables are in the entire funciton. 