const load = () => {
    generateQuote();
  }
  
  window.onload = load;
  
  
  const generateQuote = () => {
    let quoteSize = quotes.length;
    let randomIndex = Math.floor(Math.random() * quoteSize);
    let randomData = quotes[randomIndex];
    let quote = quotes.quote;
    let author = quotes.author;
    
    let twitterURL = "https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=" +
        encodeURIComponent('"' + randomData.quote + '" ' + '- ' + randomData.author)
    
    
    document.getElementById("text").innerText =   randomData.quote;
    document.getElementById("author").innerText = randomData.author;
    document.getElementById("tweet-quote").href = twitterURL;
  }
  
  