const convert = new showdown.Converter();

const addJot = event => {
  event.preventDefault();
  let markedContent = convert.makeHtml($(".textarea").val());
  const template = 
    `<div class="tile is-child box content">
      <a href="#" class="button is-danger is-outlined is-small is-pulled-right deleteButton">Delete</a>
      ${markedContent}
    </div>`;
  $('#tileParent').append(template);
  $(".textarea").val('');
  $('#submitButton').blur();
};

const removeJot = event => {
  event.preventDefault();
  $(event.target).closest('div').remove();
};

$('#submitButton').on('click', addJot);

$('#tileParent').on('click', 'a.deleteButton', removeJot);