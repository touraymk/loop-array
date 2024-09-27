/*Denne videoen viser hvordan man looper igjennom et array
  - og kan se ett og ett element i nettleserkonsollen. 
  Bruk en for loop og eksperimenter videre for å få til å 
  heller vise dette i viewet*/
const app = document.getElementById("app");
const pocketItems = ["mynter", "lommerusk", "lipgloss", "kvittering"];

updateView();
function updateView() {
  let htmlStr = ``;

  htmlStr += /*html*/ `
        <button onclick="seeWhatsInPocket()">Se hva jeg har i lomma</button>
        <div id="pocketContent"></div>
      `;

  app.innerHTML = htmlStr;
}

function seeWhatsInPocket() {
  let contentStr = "<h3>Innhold i lomma:</h3><ul>";

  for (let i = 0; i < pocketItems.length; i++) {
    contentStr += `<li>${pocketItems[i]}</li>`;
  }

  contentStr += "</ul>";

  document.getElementById("pocketContent").innerHTML = contentStr;
}
