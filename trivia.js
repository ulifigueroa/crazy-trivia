window.onload = () => {
    const questions = [
        "What's your favorite berverage?",
        "What's your dog's name? 🐕",
        "What's your favorite food?",
        "What's your favorite berverage?"];
    let cards;

    questions.sort(() => Math.random() - 0.5);

    questions.forEach((question, index) => {
        document.getElementById('cards').innerHTML += `<li class="card hidden" data-index="${index}" data-question="${question}">${index}</li>`;
    });

    cards = document.getElementsByClassName('card');

    for (let card of cards) {
        card.addEventListener('click', (question) => {
            if (card.classList.contains('hidden')) {
                card.innerHTML = question.target.getAttribute('data-question');
                card.classList.remove('hidden');
            } else {
                card.innerHTML = question.target.getAttribute('data-index');
                card.classList.add('hidden');
            }
        });
    }
};