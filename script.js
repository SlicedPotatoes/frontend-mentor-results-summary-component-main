const filePath = "./data.json";
const card = document.getElementById("detail-card");

fetch(filePath)
  .then((response) => response.text())
  .then((fileData) => {
    for (const obj of fileData) {
      const div = document.createElement("div");
      const spanIcon = document.createElement("span");
      const icon = document.createElement("img");
      const spanText = document.createElement("span");
      const p = document.createElement("p");
      div.classList.add(["item", obj.category]);
      spanText.textContent = obj.category;
      p.textContent = obj.score + " / 100";
      icon.src = obj.icon;
      icon.alt = obj.category;
      spanIcon.appendChild(icon);
      div.appendChild(spanIcon);
      div.appendChild(spanText);
      div.appendChild(p);
      card.appendChild(div);
    }
  });
