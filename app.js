let state = {
  after: '',
  posts: [],
  searchInput: '',
  subreddit: '',
  url: '',
  getSubredditUrl: function(){
    this.subreddit = this.searchInput.val();
    this.url = `https://www.reddit.com/r/${this.searchInput.val()}/top.json?t=all`;
  },
  getPosts: async function(){
    await fetch(this.url)
    .then(res => res.json())
    .then(json => {
      let {after, children} = json.data;
      this.after = after;
      this.posts = children;
      this.url += `&after=${this.after}`
    })
  },
  formatPosts: function(){
    let html = `<div class="columns">`;
    $.each(this.posts, function(i, item) {
      let {url, id, title, permalink} = item.data;
      let img = "";
      if (
        url &&
        url.match(/\.(jpg|png|jpeg|bpm|gif)$/)
      ) {
        img = `<div class="card-image">
          <a href="${url}"><img src="${url}" class="img-responsive" /></a>
          </div>`;
      }
      html += `
        <div class="column col-lg-12 col-xl-6 col-6 mb-2 singlePost" id="${id}">
          <div class="card">
            ${img}
            <div class="card-body">
              <span class="card-title">${title}</span>
            </div>
            <div class="card-footer">
              <a href="https://www.reddit.com${permalink}" target="_blank">Comments</a>
            </div>
          </div>
        </div>`;
    });
    html += `</div>`;
    $("#app").append(html);
  },
  formSubmit: async function(event){
    event.preventDefault();
    $("#app").html('');
    this.searchInput = $("#searchForm");
    this.searchInput.blur();
    await this.getSubredditUrl();
    await this.getPosts();
    this.formatPosts();
    this.searchInput.val('');
  },
  loadMorePosts: async function(){
    if ($(window).scrollTop() + $(window).height() >= $(document).height()) {
      await this.getPosts();
      this.formatPosts();
    }
  }
};

$("#subSearch").on("submit", function(){
  state.formSubmit(event);
});


$(window).on("scroll", function () {
  state.loadMorePosts();
});