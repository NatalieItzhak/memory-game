document.addEventListener('DOMContentLoaded', () => {

    const cardArray = [
        {
            name: 'c1',
            img: 'img/star.png'
        },
        {
            name: 'c1',
            img: 'img/star.png'
        },
        {
            name: 'c2',
            img: 'img/prince.png'
        },
        {
            name: 'c2',
            img: 'img/prince.png'
        },
        {
            name: 'c3',
            img: 'img/pony.png'
        },
        {
            name: 'c3',
            img: 'img/pony.png'
        },
        {
            name: 'c4',
            img: 'img/dragon.png'
        },
        {
            name: 'c4',
            img: 'img/dragon.png'
        },
        {
            name: 'c5',
            img: 'img/dog.png'
        },
        {
            name: 'c5',
            img: 'img/dog.png'
        },
        {
            name: 'c6',
            img: 'img/castle.png'
        },
        {
            name: 'c6',
            img: 'img/castle.png'
        },
    ]

    cardArray.sort(() => 0.5 - Math.random())

    const grid = document.querySelector('.container')
    const resultDisplay = document.querySelector('#result')
    let cardsChosen = []
    let cardsChosenId = []
    let cardsWon = []

    function createBoard() {
        for (let i = 0; i < cardArray.length; i++) {
            const card = document.createElement('img')
            card.setAttribute('src', 'img/blank.png')
            card.setAttribute('data-id', i)
            card.addEventListener('click', flipCard)
            grid.appendChild(card)
        }
    }

    function checkForMatch() {
        const cards = document.querySelectorAll('img')
        const optionOneId = cardsChosenId[0]
        const optionTwoId = cardsChosenId[1]

        if (optionOneId == optionTwoId) {
            cards[optionOneId].setAttribute('src', 'img/blank.png')
            cards[optionTwoId].setAttribute('src', 'img/blank.png')
            alert('You have clicked the same image!')
        }
        else if (cardsChosen[0] === cardsChosen[1]) {
            alert('You found a match')
            cards[optionOneId].setAttribute('src', 'img/white.png')
            cards[optionTwoId].setAttribute('src', 'img/white.png')
            cards[optionOneId].removeEventListener('click', flipCard)
            cards[optionTwoId].removeEventListener('click', flipCard)
            cardsWon.push(cardsChosen)
        } else {
            cards[optionOneId].setAttribute('src', 'img/blank.png')
            cards[optionTwoId].setAttribute('src', 'img/blank.png')
            alert('Sorry, try again')
        }
        cardsChosen = []
        cardsChosenId = []
        resultDisplay.textContent = cardsWon.length
        if (cardsWon.length === cardArray.length / 2) {
            resultDisplay.textContent = 'Congratulations! You found all the matches!'
        }
    }


    function flipCard() {
        let cardId = this.getAttribute('data-id')
        cardsChosen.push(cardArray[cardId].name)
        cardsChosenId.push(cardId)
        this.setAttribute('src', cardArray[cardId].img)
        if (cardsChosen.length === 2) {
            setTimeout(checkForMatch, 500)
        }
    }

    createBoard()
})