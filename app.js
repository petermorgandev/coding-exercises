let convert = new showdown.Converter()

$('#submitButton').on('click', event => {
  event.preventDefault();
  let content =  $(".textarea");
  const tileParent = $('#tileParent');
  const templateStart = `<div class="tile is-child box"><a href="#" class="button is-danger is-outlined is-small is-pulled-right deleteButton">Delete</a>`;
  const templateEnd = '</p></div>'
  let markedContent = convert.makeHtml(content.val());
  tileParent.append(`${templateStart}${markedContent}${templateEnd}`);
  content.val('');
});

$('#tileParent').on('click', 'a.deleteButton', event => {
  event.preventDefault();
  $(event.target).closest('div').remove();
});