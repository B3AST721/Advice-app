const text = document.getElementById('quote');
const message = document.getElementById('message');

const getNewQuote = async () => 
{
    let url = 'https://type.fit/api/quotes';

    const response = await fetch(url);
    console.log(typeof response);

    const allQuotes = await response.json();

    const index = Math.floor(Math.random() * allQuotes.length);

    const quote = allQuotes[index].text;

    text.innerHTML = quote;
}

message.addEventListener('click', () => {
    getNewQuote()
})