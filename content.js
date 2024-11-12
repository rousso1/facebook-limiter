(function () {
  if (window.hasRunFacebookLimiter) {
    return;
  }

  window.hasRunFacebookLimiter = true;

  const navigateAway = () => {
    window.location.replace('about:blank');
  };

  let postCount = 0;
  let postLimit = parseInt(window.prompt('How many posts do you intend to scroll?', '10'));

  if (isNaN(postLimit) || postLimit <= 0) {
    navigateAway();
    return;
  }

  const observer = new MutationObserver(() => {
    const posts = document.querySelectorAll(
      '.html-h3.xdj266r.x11i5rnm.xat24cr.x1mh8g0r.xexx8yu.x4uap5.x18d9i69.xkhd6sd.x1vvkbs.x1heor9g.x1qlqyl8.x1pd3egz.x1a2a7pz.xzpqnlu.x1hyvwdk.xjm9jq1.x6ikm8r.x10wlt62.x10l6tqk.x1i1rx1s + div + div > .x1lliihq'
    );
    if (posts.length > postCount) {
      postCount = posts.length;
      console.log(`postCount: ${postCount}`);
    }
    if (postCount >= postLimit + 5) {
      navigateAway();
    }
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });
})();
