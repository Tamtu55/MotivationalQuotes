fetch('https://type.fit/api/quotes')
    .then(response => response.json())
    .then(data => {
        const randomIndex = Math.floor(Math.random() * data.length);
        const randomQuote = data[randomIndex].text;
        document.getElementById('motivationalElement').innerText = randomQuote;
    })
    .catch(error => {
        console.error('Error fetching motivational quote:', error);
    });
