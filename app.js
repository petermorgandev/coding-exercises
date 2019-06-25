let state = {
  app: $("#app"),
  after: null,
  posts: null,
  searchInput: $("#searchForm"),
  subreddit: null,
  url: null,
  selectSortBy: $("#sortBy"),
  mode: null,
  getSubredditUrl: function() {
    this.subreddit = this.searchInput.val();
    this.mode = this.selectSortBy.val();
    this.url = `https://www.reddit.com/r/${this.subreddit}/${this.mode}`;
  },
  getPosts: async function() {
    const req = await fetch(this.url);
    const json = await req.json();
    this.after = json.data.after;
    this.posts = json.data.children;
  },
  contentEmbed: function(url) {
    if (url && url.match(/\.(jpg|png|jpeg|bpm|gif)$/)) {
      content = `<div class="card-image">
        <a href="${url}"><img src="${url}" class="img-responsive" /></a>
        </div>`;
      return content;
    } else if (url && url.match(/\.(gifv)$/)) {
        let newURL = url.replace(".gifv", ".mp4");
        content = `<div class="card-image">
        <video src="${newURL}" style="max-width: 100%" autoplay loop />
        </div>`;
      return content;
    } else {
        return "";
    }
  },
  formatPosts: function() {
    let html = `<div class="columns">`;
    $.each(this.posts, function(i, item) {
      let { url, id, title, permalink } = item.data;
      let content = state.contentEmbed(url);
      html += `
        <div class="column col-lg-12 col-xl-6 col-6 mb-2 singlePost" id="${id}">
          <div class="card">
            ${content}
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
    this.app.append(html);
  },
  updateURL: function() {
    if (this.mode === "hot.json" || this.mode === "new.json" || this.mode === "rising.json") {
      this.url = `https://www.reddit.com/r/${this.subreddit}/${this.mode
      }?after=${this.after}`;
    } else {
      this.url = `https://www.reddit.com/r/${this.subreddit}/${this.mode}&after=${this.after}`;
    }
  },
  formSubmit: async function(event) {
    event.preventDefault();
    this.app.html("");
    this.searchInput.blur();
    await this.getSubredditUrl();
    await this.getPosts();
    this.formatPosts();
    this.updateURL();
  },
  loadMorePosts: async function() {
    let condition = ($(window).scrollTop() + $(window).height() >= $(document).height()) && (this.after !== null);
    if (condition) {
      await this.getPosts();
      this.formatPosts();
      this.updateURL();
    }
  }
};

$("#subSearch").on("submit", function() {
  state.formSubmit(event);
});

$(window).on("scroll", function() {
  state.loadMorePosts();
});