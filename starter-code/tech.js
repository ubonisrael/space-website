const techImage = document.querySelector(".tech-pic");
const techTabs = document.querySelector(".tech-tabs");
const techTitle = document.getElementsByTagName("h2")[0];
const techParagraph = document.querySelector(".paragraph");

async function fetchData(url) {
  return (data = await fetch(url).then((data) => data.json()));
}

techTabs.childNodes.forEach((child) => {
  child.addEventListener("click", (e) => {
    e.target.innerHTML.trim() === "1"
      ? setTech(0)
      : e.target.innerHTML.trim() === "2"
      ? setTech(1)
      : setTech(2);

    techTabs.childNodes.forEach(
      (child) => (child.ariaSelected = "false")
    );

    child.ariaSelected = "true";
  });
});

function setTech(num) {
  fetchData("data.json").then((res) => {
    const { technology } = res;

    techImage.firstElementChild.setAttribute(
      "srcset",
      technology[num].images.portrait
    );
    techImage.lastElementChild.setAttribute(
      "src",
      technology[num].images.landscape
    );
    techImage.lastElementChild.setAttribute(
      "alt",
      technology[num].name
    );

    techTitle.innerHTML = `<span>The terminology...</span>${technology[num].name}`;

    techParagraph.textContent = technology[num].description;
  });
}
