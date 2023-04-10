// Get the DOM elements
const quoteText = document.querySelector(".quote-text .quote");
const quoteAuthor = document.querySelector(".quote-author .author");
const loadingText = document.querySelectorAll(".loading-text");
const newQuoteButton = document.getElementById("new-quote");
const tweetQuoteButton = document.getElementById("tweet-quote");

// Show loading text
function showLoadingText() {
  loadingText.forEach((element) => {
    element.style.display = "inline";
  });
  quoteText.style.display = "none";
  quoteAuthor.style.display = "none";
}

// Hide loading text and show quote
function hideLoadingText() {
  loadingText.forEach((element) => {
    element.style.display = "none";
  });
  quoteText.style.display = "inline";
  quoteAuthor.style.display = "inline";
}

// Get a new quote from the API
async function getNewQuote() {
  showLoadingText();
  const response = await fetch("https://api.quotable.io/random?maxLength=100");
  const data = await response.json();
  quoteText.textContent = data.content;
  quoteAuthor.textContent = data.author;
  hideLoadingText();
}

// Load a random quote on page load
getNewQuote();

// Add click event listeners to buttons
newQuoteButton.addEventListener("click", getNewQuote);

tweetQuoteButton.addEventListener("click", () => {
  const quote = quoteText.textContent;
  const author = quoteAuthor.textContent;
  const tweetUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote}" - ${author}`
  )}`;
  window.open(tweetUrl, "_blank");
});

const copyButton = document.getElementById("copy-quote");
copyButton.addEventListener("click", () => {
  const quoteText = document.querySelector(".quote-text .quote").textContent;
  const authorText = document.querySelector(
    ".quote-author .author"
  ).textContent;
  const copyText = `${quoteText} - ${authorText}`;
  navigator.clipboard.writeText(copyText);
});

const fbShareButton = document.getElementById("fb-share");
fbShareButton.addEventListener("click", () => {
  const quoteText = document.querySelector(".quote-text .quote").textContent;
  const authorText = document.querySelector(
    ".quote-author .author"
  ).textContent;
  const url = encodeURIComponent(window.location.href);
  const quote = encodeURIComponent(`${quoteText} - ${authorText}`);
  const fbShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${url}&quote=${quote}`;
  window.open(fbShareUrl, "_blank");
});

const emailButton = document.getElementById("email-share");
emailButton.addEventListener("click", () => {
  const quoteText = document.querySelector(".quote-text .quote").textContent;
  const authorText = document.querySelector(
    ".quote-author .author"
  ).textContent;
  const emailBody = encodeURIComponent(
    `${quoteText} - ${authorText}\n\n\n\nSent from Quote of the Day`
  );
  emailButton.href = `mailto:?subject=Quote%20of%20the%20Day&body=${emailBody}`;
});

const pinterestButton = document.getElementById("pinterest-share");
pinterestButton.addEventListener("click", () => {
  const quoteText = document.querySelector(".quote-text .quote").textContent;
  const authorText = document.querySelector(
    ".quote-author .author"
  ).textContent;
  const mediaUrl = encodeURIComponent("https://www.example.com/image.jpg"); // replace with your image URL
  const pinterestUrl = `https://www.pinterest.com/pin/create/button/?url=${encodeURIComponent(
    window.location.href
  )}&description=${encodeURIComponent(
    `Example Quote: "${quoteText}" - ${authorText}`
  )}&media=${mediaUrl}`;
  window.open(pinterestUrl, "_blank");
});

const redditButton = document.querySelector("#reddit-quote");
redditButton.addEventListener("click", () => {
  const quote = encodeURIComponent(
    `"${quoteText.textContent}" - ${authorText.textContent}`
  );
  redditButton.href = `https://www.reddit.com/submit?url=&title=${quote}`;
});

const whatsappButton = document.getElementById("whatsapp-quote");
whatsappButton.addEventListener("click", () => {
  const quote = encodeURIComponent(
    `"${quoteText.textContent}" - ${authorText.textContent}`
  );
  whatsappButton.href = `https://wa.me/?text=${quote}`;
});

