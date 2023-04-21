const crewImage = document.querySelector(".crew-pic");
const crewTabs = document.querySelector(".crew-tabs");
const crewTitle = document.getElementsByTagName("h2")[0];
const crewParagraph = document.querySelector(".paragraph");
const crewMember = document.querySelector(".crew-member");

async function fetchData(url) {
  return (data = await fetch(url).then((data) => data.json()));
}

crewTabs.childNodes.forEach((child) => {
  child.addEventListener("click", (e) => {
    e.target.dataset.id === "1"
      ? setCrew(0)
      : e.target.dataset.id === "2"
      ? setCrew(1)
      : e.target.dataset.id === "3"
      ? setCrew(2)
      : setCrew(3);

    crewTabs.childNodes.forEach((child) => (child.ariaSelected = "false"));

    child.ariaSelected = "true";
  });
});

function setCrew(num) {
  fetchData("data.json").then((res) => {
    const { crew } = res;

    crewImage.firstElementChild.setAttribute("srcset", crew[num].images.webp);
    crewImage.lastElementChild.setAttribute("src", crew[num].images.png);
    crewImage.lastElementChild.setAttribute("alt", crew[num].name);
    crewImage.classList.add("fade");
    crewImage.onanimationend = () => crewImage.classList.remove("fade");

    crewTitle.innerHTML = `<span>${crew[num].role}</span>${crew[num].name}`;

    crewParagraph.textContent = crew[num].bio;
    crewMember.classList.add('slide')
    crewMember.onanimationend = () => crewMember.classList.remove('slide')
  });
}
