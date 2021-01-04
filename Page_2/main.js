
function openSidebar(){
  document.getElementById("sidebar").style.right = 0;
}

function closeSidebar(){
  document.getElementById("sidebar").style.right = "-100vw";
}
function viewAnswer(click_id) {
    var x = document.getElementById("a-"+click_id);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 0,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });

function viewAnswer(click_id) {
    var x = document.getElementById("a-"+click_id);
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }