const mainHeader = document.getElementById("main-header");
mainHeader?.addEventListener("click", () => {
  console.info(mainHeader);
});

const links = document.querySelectorAll(".navbar a");
console.info("Number of links in navbar:", links.length);
