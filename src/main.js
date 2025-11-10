// Select Header
const mainHeader = document.getElementById("main-header");
mainHeader?.addEventListener("click", () => {
  console.info(mainHeader);
});

// get number of nav links
const links = document.querySelectorAll(".navbar a");
console.info("Number of links in navbar:", links.length);

// Select internal links (those starting with /) and append " [internal]" to their text.
const internalLinks = document.querySelectorAll('a[href^="/"]');
internalLinks.forEach((link) => {
  link.textContent += " [internal]";
});

// Select required inputs and add yellow outline
const requiredInputs = document.querySelectorAll("input[required]");
requiredInputs.forEach((input) => {
  input.style.outline = "2px solid gold";
});

// Select all card and add data viewed
const cards = document.querySelectorAll(".card");
cards.forEach((card) => {
  card.setAttribute("data-viewed", "true");
});
