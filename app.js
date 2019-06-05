$("#subSearch").on("submit", function(event) {
  event.preventDefault();
  const searchInput = $("#search")
  let sub = searchInput.val();
  let url = "https://www.reddit.com/r/" + sub + "/hot.json?jsonp=?";
  $.getJSON(url, function(data) {
    let html = `<div class="row">`;
    $.each(data.data.children, function(i, item) {
      let img = "";
      if (
        item.data.url &&
        item.data.url.match(/\.(jpg|png|jpeg|bpm|gif)$/)
      ) {
        img = `<div class="card-image">
          <img src="${item.data.url}" />
          </div>`;
      }
      html += `
        <div class="col s8 offset-s2">
          <div class="card">
            ${img}
            <div class="card-content">
              <span class="card-title">${item.data.title}</span>
            </div>
            <div class="card-action">
              <a href="https://www.reddit.com${
                item.data.permalink
              }" target="_blank">Permalink</a>

              <i class="tiny material-icons">thumb_up</i> ${
                item.data.ups} <i class="tiny material-icons" style="margin-left: 24px;">thumb_down</i> ${item.data.downs}
            </div>
          </div>
        </div>`;
    });
    $("#app").html(html);
    searchInput.val('');
  });
});
