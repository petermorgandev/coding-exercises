let count = 25;
let after = "";

const getSubredditUrl = input => {
  let sub = input.val();
  let url = "https://www.reddit.com/r/" + sub + "/top.json?t=all";
  return url;
};

const formSubmit = event => {
  event.preventDefault();
  let searchInput = $("#searchForm");
  let url = getSubredditUrl(searchInput);
  $.getJSON(url, function(data) {
    after = data.data.after;
    let html = `<div class="columns" id="posts">`;
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
        <div class="column col-lg-12 col-xl-6 col-6 mb-2 singlePost" id="${item.data.id}">
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
  });
  // searchInput.val('');
}

$("#subSearch").on("submit", formSubmit);

const loadMoreData = () => {
  console.log("previous: " + after);
  let searchInput = $("#searchForm");
  let url = "https://www.reddit.com/r/" + searchInput.val() + "/top/.json?t=all&after=" + after;
  console.log(url);
  $.getJSON(url, function(data) {
    after = data.data.after;
    console.log("new: " + after);
    let html = "";
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
        <div class="column col-lg-12 col-xl-6 col-6 mb-2 singlePost" id="${item.data.id}">
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
    $("#posts").append(html);
  });
};

$(window).scroll(function () {
  if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
    loadMoreData(after);
  }
});