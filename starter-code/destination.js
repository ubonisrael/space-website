const destinationImage = document.querySelector(".destination-pic");
const destinationTabs = document.querySelector(".destination-tabs");
const destinationTitle = document.getElementsByTagName("h2")[0];
const destinationParagraph = document.querySelector(".paragraph");
const destinationAvgDistance = document.querySelector(".avg-distance");
const destinationTravelTime = document.querySelector(".travel-time");

async function fetchData(url) {
  return (data = await fetch(url).then((data) => data.json()));
}

destinationTabs.childNodes.forEach((child) => {
  child.addEventListener("click", (e) => {
    e.target.innerHTML.trim() === "moon"
      ? setDestination(0)
      : e.target.innerHTML.trim() === "mars"
      ? setDestination(1)
      : e.target.innerHTML.trim() === "europa"
      ? setDestination(2)
      : setDestination(3);

    destinationTabs.childNodes.forEach(
      (child) => (child.ariaSelected = "false")
    );

    child.ariaSelected = "true";
  });
});

function setDestination(dest) {
  fetchData("data.json").then((res) => {
    const { destinations } = res;

    destinationImage.firstElementChild.setAttribute(
      "srcset",
      destinations[dest].images.webp
    );
    destinationImage.lastElementChild.setAttribute(
      "src",
      destinations[dest].images.png
    );
    destinationImage.lastElementChild.setAttribute(
      "alt",
      destinations[dest].name
    );
    destinationImage.classList.add('fade')
    destinationImage.onanimationend = () => destinationImage.classList.remove('fade')

    destinationTitle.textContent = destinations[dest].name;

    destinationParagraph.textContent = destinations[dest].description;

    destinationAvgDistance.firstElementChild.textContent =
      destinations[dest].distance;

    destinationTravelTime.firstElementChild.textContent =
      destinations[dest].travel;

    destinationTitle.classList.add('slide')
    destinationParagraph.classList.add('slide')
    destinationAvgDistance.classList.add('slide')
    destinationTravelTime.classList.add('slide')

    destinationTitle.onanimationend = () => destinationTitle.classList.remove('slide')
    destinationParagraph.onanimationend = () => destinationParagraph.classList.remove('slide')
    destinationAvgDistance.onanimationend = () => destinationAvgDistance.classList.remove('slide')
    destinationTravelTime.onanimationend = () => destinationTravelTime.classList.remove('slide')
  
  });
}
