const addJot = event => {
  const convert = new showdown.Converter();
  const textBox = document.getElementById("textBox");
  const tileParent = document.getElementById("tileParent");
  event.preventDefault();
  let markedContent = convert.makeHtml(textBox.value);
  const template = 
    `<div class="tile is-child box content">
      <a href="#" class="button is-danger is-outlined is-small is-pulled-right deleteButton">Delete</a>
      ${markedContent}
    </div>`;
  tileParent.insertAdjacentHTML("beforeend", template);
  textBox.value = "";
  document.getElementById("submitButton").blur();
};

const removeJot = event => {
  event.preventDefault();
  event.target.closest('div').remove();
};

document.getElementById("submitButton").addEventListener("click", addJot);

document.getElementById("tileParent").addEventListener("click", removeJot);