const formSubmit = event => {
  event.preventDefault();
  const searchInput = $("#searchForm")
  let sub = searchInput.val();
  let url = "https://www.reddit.com/r/" + sub + "/hot.json?jsonp=?";
  $.getJSON(url, function(data) {
    let html = `<div class="columns">`;
    $.each(data.data.children, function(i, item) {
      let img = "";
      if (
        item.data.url &&
        item.data.url.match(/\.(jpg|png|jpeg|bpm|gif)$/)
      ) {
        img = `<div class="card-image">
          <img src="${item.data.url}" class="img-responsive" />
          </div>`;
      }
      html += `
        <div class="column col-lg-12 col-xl-6 col-6 mb-2"">
          <div class="card">
            ${img}
            <div class="card-body">
              <span class="card-title">${item.data.title}</span>
            </div>
            <div class="card-footer">
              <a href="https://www.reddit.com${item.data.permalink}" target="_blank">Permalink</a>
            </div>
          </div>
        </div>`;
    });
    $("#app").html(html);
    searchInput.val('');
  });
}

$("#subSearch").on("submit", formSubmit);
