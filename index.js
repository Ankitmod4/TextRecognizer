const speak = async() => {
    const utterance = new SpeechSynthesisUtterance();
    const dialogue = document.getElementById('textarea').value;
    utterance.text = dialogue;
   
    speechSynthesis.speak(utterance);
    
}
