document.addEventListener('DOMContentLoaded', () => {
    const stages = [
        document.getElementById('main-date'),
        document.getElementById('card1'),
        document.getElementById('card2'),
        document.getElementById('card3'),
        document.getElementById('finalScreen')
    ];
    
    const yesButton = document.getElementById('yes');
    const noButton = document.getElementById('no');
    let currentStage = 0;
    
    // Function to switch to the next stage
    function nextStage() {
        // Hide current stage
        stages[currentStage].classList.remove('active');
        
        // Move to next stage
        currentStage++;
        
        if (currentStage < stages.length) {
            // Show next stage after a delay
            setTimeout(() => {
                stages[currentStage].classList.add('active');
                
                // Set timeout for next stage except for the final screen
                if (currentStage < stages.length - 1) {
                    setTimeout(nextStage, 7500);
                }
            }, 1000);
        }
    }
    
    // Initialize the first stage
    stages[0].classList.add('active');
    
    // Start the sequence after 7.5 seconds on the first stage
    setTimeout(nextStage, 7500);
    
    // Button interactions
    noButton.addEventListener('click', () => {
        if (!yesButton.classList.contains('enlarged')) {
            yesButton.classList.add('enlarged');
            noButton.textContent = 'U sure?';
        } else if (yesButton.classList.contains('enlarged')) {
            yesButton.classList.remove('enlarged');
            yesButton.classList.add('enlarged-2');
            noButton.textContent = 'Really sure?';
        } else {
            yesButton.classList.remove('enlarged-2');
            yesButton.classList.add('enlarged-3');
            noButton.textContent = 'OK fine!';
            noButton.disabled = true;
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
                    YAY! You made me the happiest person! 😍
                </h1>
                <img src="https://media.tenor.com/3bgr0O8iCJ0AAAAM/happy-cat-happy.gif" 
                     style="max-width:300px; border-radius:15px;">
            </div>
        `;
        document.body.appendChild(celebration);
    });
});