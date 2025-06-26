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
                // Додаємо новий вміст
                const newContent = document.createElement('div');
                newContent.className = 'after-main-date';
                newContent.innerHTML = `<h2>I'm so happy to know you! 💗</h2>`;
                document.querySelector('.gradient').prepend(newContent);
                newContent.style.opacity = '0';
                newContent.style.transition = 'opacity 1s';
                setTimeout(() => {
                    newContent.style.opacity = '1';
                    // Показати картки та фінальний екран по черзі
                    document.querySelector('.content-after-date').style.display = '';
                    revealCardsSequentially();
                }, 50);
            }, 1000);
        }
    }, 5000);

    function revealCardsSequentially() {
        const elements = [
            document.getElementById('card1'),
            document.getElementById('card2'),
            document.getElementById('card3'),
            document.getElementById('card5'),
            document.getElementById('finalScreen')
        ];
        let delays = [0, 4000, 5000, 4000, 5000]; // ms, adjust as you wish (3-10s)
        let totalDelay = 0;
        elements.forEach((el, idx) => {
            totalDelay += delays[idx];
            setTimeout(() => {
                if (el) {
                    el.style.display = '';
                    setTimeout(() => {
                        el.style.opacity = '1';
                    }, 50);
                }
            }, totalDelay);
        });
    }
});

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

    

