// dropdown js
/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
        if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
        }
    }
}

// ---------------------------------back to top--------------------------------------
function backToTop() {
    const btn = document.querySelector(".back-to-top");
    const goToTop = () => {
        document.body.scrollIntoView({
            behavior: "smooth"
        });
    };
    btn.addEventListener("click", goToTop);
}

// ----------------------view-profile.html tabs--------------------------------------
function clickHandle(evt, userAndSaved) {
    let i, tabcontent, tablinks;
  
    // This is to clear the previous clicked content.
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Set the tab to be "active".
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Display the clicked tab and set it to active.
    document.getElementById(userAndSaved).style.display = "block";
    evt.currentTarget.className += " active";
  }

// ------------------------------ reply comment form ---------------------------------
// shows hidden comment form
function openForm() {
    document.getElementById("myForm").style.display = "flex";
}
// closes form
function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

// --------------------------------- hide nave bar ------------------------------------
// just give nav id of navbar
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
// var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "0";
//   } else {
//     document.getElementById("navbar").style.top = "-70px";
//   }
//   prevScrollpos = currentScrollPos;
// }