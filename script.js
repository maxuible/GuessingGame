let input = ''
let puzzle = ''
let guessNumber = 0
let response = ''

generatePuzzle()

function generatePuzzle() {
    puzzle = ''
    while (puzzle.length < 5) {
        puzzle += String.fromCharCode(Math.floor(Math.random() * 5 + 65))
    }

    if (guessNumber > 0) {
        for (let i = 0; i < 6; i++) {
            let row = '' + i
            for (let j = 0; j < 5; j++) {
                let rowcol = row + j
                this.document.getElementById(rowcol).innerHTML = '?'
                this.document.getElementById(rowcol).style.backgroundColor = 'grey'
            }
        }
    }

    guessNumber = 0
    input = ''
}


window.addEventListener('keydown', function (e) {

    if (input.length < 5) {

        if (e.key === 'a') {
            input += e.key
        }

        if (e.key === 'b') {
            input += e.key
        }

        if (e.key === 'c') {
            input += e.key
        }

        if (e.key === 'd') {
            input += e.key
        }

        if (e.key === 'e') {
            input += e.key
        }

    }
    if (e.key === 'f' && input.length === 5) {
        guess(input);
    }
    if (e.key === 'Backspace') {
        input = input.slice(0, -1);
    }

    update()
}, false);

function update() {

    let currentRow = '' + guessNumber

    if (guessNumber > 5) {
        //only 5 guesses allowed
        return -1;
    }

    for (let i = 0; i < 5; i++) {

        let currentRowCol = currentRow + i
        this.document.getElementById(currentRowCol).innerHTML = input[i]
        if (this.document.getElementById(currentRowCol).innerHTML == 'undefined') { //fixes undefined
            this.document.getElementById(currentRowCol).innerHTML = '?'

        }
        //top most bar
        let userInput = '-1' + i
        this.document.getElementById(userInput).innerHTML = input[i]
        if (this.document.getElementById(userInput).innerHTML == 'undefined') { //fixes undefined
            this.document.getElementById(userInput).innerHTML = '?'

        }

    }

}

function guess(guessInput) {
    response = ''
    guessInput = guessInput.toUpperCase()

    if (guessInput === puzzle) {
        return 1;
    }

    if (guessNumber > 5) {
        return -1;
    }

    let currentRow = '' + guessNumber
    for (let i = 0; i < guessInput.length; i++) {
        let currentRowCol = currentRow + i
        if (guessInput[i] == puzzle[i]) 
        {
            this.document.getElementById(currentRowCol).style.backgroundColor = 'green'
        }
        else if (puzzle.includes(guessInput[i])) 
        {
            this.document.getElementById(currentRowCol).style.backgroundColor = 'yellow';
        } else
        {
            this.document.getElementById(currentRowCol).style.backgroundColor = 'red';
        }
    }

    for (let i = 0; i < 5; i++) {
        let colum = '-1' + i
        this.document.getElementById(colum).innerHTML = '?'
    }

    guessNumber++;
    input = '';

}