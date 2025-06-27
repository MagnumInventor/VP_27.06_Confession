document.addEventListener('DOMContentLoaded', () => {
    const yesButton = document.getElementById('yes');
    const noButton = document.getElementById('no');

    let enlargeStep = 0;

    noButton.addEventListener('click', () => {
        enlargeStep++;
        if (enlargeStep === 1) {
            yesButton.classList.add('enlarged');
            noButton.textContent = 'Вік це тільки цифра';
        } else if (enlargeStep === 2) {
            yesButton.classList.remove('enlarged');
            yesButton.classList.add('enlarged-2');
            noButton.textContent = 'Я прям ряльно урод?';
        } else if (enlargeStep === 3) {
        noButton.textContent = 'Ясн';
        noButton.disabled = true;
        setTimeout(() => {
            window.close();
        }, 1200); // Закриє сторінку через 1.2 секунди
    }
});

    yesButton.addEventListener('click', () => {
        // Create celebration effect
        const celebration = document.createElement('div');
        celebration.innerHTML = `
            <div style="position:fixed; top:0; left:0; width:100%; height:100%; 
                        background:rgba(0,0,0,0.7); z-index:100; display:flex; 
                        justify-content:center; align-items:center; flex-direction:column;">
                <h1 style="color:white; font-size:3rem; text-align:center; margin-bottom:2rem;">
                    Спс, скрін в пп! 😍
                </h1>
                <img src="https://media.tenor.com/3bgr0O8iCJ0AAAAM/happy-cat-happy.gif" 
                     style="max-width:300px; border-radius:15px;">
            </div>
        `;
        document.body.appendChild(celebration);
    });
});