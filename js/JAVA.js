/* وقتی کاربر روی دکمه کلیک می کند،
گزینه ها پنهان و یا نمایش پیدا کند */
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// اگر کاربر خارج از آن کلیک کرد، منوی کشویی را ببندد
window.onclick = function(e) {
  if (!e.target.matches('.dropbtn')) {
  var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
      myDropdown.classList.remove('show');
    }
  }
}