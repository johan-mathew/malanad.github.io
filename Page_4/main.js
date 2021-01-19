// The debounce function receives our function as a parameter
const debounce = (fn) => {

    // This holds the requestAnimationFrame reference, so we can cancel it if we wish
    let frame;
  
    // The debounce function returns a new function that can receive a variable number of arguments
    return (...params) => {
      
      // If the frame variable has been defined, clear it now, and queue for next frame
      if (frame) { 
        cancelAnimationFrame(frame);
      }
  
      // Queue our function call for the next frame
      frame = requestAnimationFrame(() => {
        
        // Call our function and pass any params we received
        fn(...params);
      });
  
    } 
  };
  
  
  // Reads out the scroll position and stores it in the data attribute
  // so we can use it in our stylesheets
  const storeScroll = () => {
    document.documentElement.dataset.scroll = window.scrollY;
  }
  
  // Listen for new scroll events, here we debounce our `storeScroll` function
  document.addEventListener('scroll', debounce(storeScroll), { passive: true });
  
  // Update scroll position for first time
  storeScroll();
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
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  function viewAnswer(click_id) {
    var x = document.getElementById("a-"+click_id);
    var plus = document.querySelector("#"+ click_id + " .faq-plus");
    if (x.style.display === "none") {
      x.style.display = "block";
      plus.innerHTML = "-";
    } else {
      x.style.display = "none";
      plus.innerHTML = "+";
    }
  }
