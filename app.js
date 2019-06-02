let convert = new showdown.Converter()

const addJot = event => {
  event.preventDefault();
  const templateStart = `<div class="tile is-child box">
    <a href="#" class="button is-danger is-outlined is-small is-pulled-right deleteButton">Delete</a>`;
  const templateEnd = '</p></div>';
  let markedContent = convert.makeHtml($(".textarea").val());
  $('#tileParent').append(`${templateStart}${markedContent}${templateEnd}`);
  $(".textarea").val('');
};

const removeJot = event => {
  event.preventDefault();
  $(event.target).closest('div').remove();
};

$('#submitButton').on('click', addJot);

$('#tileParent').on('click', 'a.deleteButton', removeJot);