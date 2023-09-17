window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      document.getElementById('button').style.display = 'block';
  } else {
      document.getElementById('button').style.display = 'none';
  }
};
function scrollToTop() {
  document.documentElement.scrollTop = 0;
}