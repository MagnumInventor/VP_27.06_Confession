document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.card');
    const finalScreen = document.querySelector('.final-screen');
    const finalMessage = document.querySelector('.final-message');
    let currentCard = 0;


// ...existing code...

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        const mainDate = document.querySelector('.main-date');
        if (mainDate) {
            mainDate.style.transition = 'opacity 1s';
            mainDate.style.opacity = '0';
            setTimeout(() => {
                mainDate.style.display = 'none';
                const newContent = document.createElement('div');
                newContent.className = 'after-main-date';


                newContent.innerHTML = `<h2>Сподівюся ти ! 💗</h2>`;


                
                document.querySelector('.gradient').prepend(newContent);
                newContent.style.opacity = '0';
                newContent.style.transition = 'opacity 1s';
                setTimeout(() => {
                    newContent.style.opacity = '1';
                }, 50);
            }, 1000);
        }
    }, 5000);
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
});

    

