var items = document.getElementById("citelist").children;
function highlightItem(n) {
  for (var i = 0; i < items.length; i++) {
    items[i].className = "";
  }
  items[n].className = "highlighted";
}
