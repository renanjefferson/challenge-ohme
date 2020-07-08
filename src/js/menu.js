export function openNav() {
  document.getElementById("mySidenav").style.width = "90%";
  document.getElementById("mySidenav").style.padding = "30px";
  document.getElementById("background-opacity").style.display = "block";
}

export function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("mySidenav").style.padding = "0";
  document.getElementById("background-opacity").style.display = "none";
}
