function viewAnswer(click_id) {
    var x = document.getElementById("a-"+click_id);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}