document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const finalScreen = document.querySelector('.final-screen');
    const finalMessage = document.querySelector('.final-message');
    let currentCard = 0;

    function flipCard(card) {
        card.classList.toggle('flipped');
    }

    function showNextCard() {
        if (currentCard < cards.length) {
            flipCard(cards[currentCard]);
            currentCard++;
            if (currentCard === cards.length) {
                setTimeout(() => {
                    finalScreen.classList.add('visible');
                    wipeEffect();
                }, 1000);
            }
        }
    }

    function wipeEffect() {
        finalMessage.classList.add('visible');
    }

    cards.forEach(card => {
        card.addEventListener('click', showNextCard);
    });
});