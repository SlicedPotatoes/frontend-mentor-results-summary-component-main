const filePath = "./data.json";

fetch(filePath)
  .then((response) => response.text())
  .then((fileData) => {
    console.log(fileData);
  });
