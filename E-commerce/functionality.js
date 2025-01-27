// On Scroll Event
window.onscroll = function () {
  highlightNav();
};

function highlightNav() {
  // Get the current scroll position
  let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;
  
  // Get all the sections
  let sections = document.querySelectorAll("div[id]");

  // Loop through the sections and check if the scroll position is within their range
  sections.forEach(section => {
    let sectionTop = section.offsetTop - 50; // Adjust as needed for header height
    let sectionBottom = sectionTop + section.offsetHeight;

    let link = document.querySelector(`a[href="#${section.id}"]`);

    if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
      link.classList.add("active"); // Add active class
    } else {
      link.classList.remove("active"); // Remove active class
    }
  });
}
