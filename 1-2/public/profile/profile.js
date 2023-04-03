const goToHomePage = () => {
  window.location.href = "/home";
};

$(() => {
  var url = window.location.href;
  var id = url.match(/profile\/(.*)/)[1];
  renderProfile(id);
});
