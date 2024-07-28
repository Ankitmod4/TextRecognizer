document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('btn');
    const textarea = document.getElementById('textarea');

    if (btn && textarea) {
        btn.addEventListener('click', () => {
            const userInput = textarea.value;
            const speech = new SpeechSynthesisUtterance();
            speech.text = userInput;
            window.speechSynthesis.speak(speech);
        });
       
    }

    else {
        console.error('Button or textarea not found');
    }
});
