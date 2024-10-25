document.addEventListener('DOMContentLoaded', () => {
    const diceType = document.getElementById('dice-type');
    const rollButton = document.getElementById('roll-button');
    const showImageButton = document.getElementById('show-image-button');
    const resultDiv = document.getElementById('result');
    const diceImage = document.getElementById('dice-image');
    let rollResult = null;

    rollButton.addEventListener('click', () => {
        const selectedDice = diceType.value;
        rollResult = Math.floor(Math.random() * selectedDice) + 1;
        resultDiv.textContent = `You rolled a ${rollResult}`;

        diceImage.style.display = 'none';

        if (selectedDice === '6') {
            showImageButton.style.display = 'block';
        } else {
            showImageButton.style.display = 'none';
        }
    });

    showImageButton.addEventListener('click', () => {
        if (diceType.value === '6' && rollResult !== null) {
            diceImage.src = `images/dice${rollResult}.png`;
            diceImage.style.display = 'block';
        }
    });
});
