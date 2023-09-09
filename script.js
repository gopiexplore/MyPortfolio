document.addEventListener("DOMContentLoaded", function() {
    const certificates = ['./images/Certificate/Certificate1.jpeg',
    './images/Certificate/Certificate2.jpeg', './images/Certificate/Certificate3.jpeg',
    './images/Certificate/Certificate4.jpeg', './images/Certificate/Certificate5.jpeg', './images/Certificate/Certificate6.jpeg', './images/Certificate/Certificate7.jpeg', './images/Certificate/Certificate8.jpeg','./images/Certificate/Certificate9.jpeg'];
const matter = ['Programming, Data Structures and Algorithms Using Python', 'Introduction to Programming in C', 'Programmin in Java', 'InternShip Certificate', 'CodeJam', 'Python ', 'Basics of Java', 'Research Paper presentation','Coding Contest'];
var currentCertificate = 0;
document.getElementById('next').onclick = nexCertificate;
document.getElementById('previous').onclick = previousCertificate;
function previousCertificate() {
    currentCertificate--;
    if (currentCertificate < 0) {
        currentCertificate = certificates.length - 1;
    }
    updateImageAndDescription();
}
function nexCertificate() {
    currentCertificate++;
    if (currentCertificate > certificates.length - 1) {
        currentCertificate = 0;
    }
    updateImageAndDescription();
}
function updateImageAndDescription() {
    document.getElementById('certificate').src = certificates[currentCertificate];
    document.getElementById('imageDescription').textContent = matter[currentCertificate];

}

  });
  document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.getElementById("menu");
  
    menuToggle.addEventListener("click", function () {
      if (menu.style.display === "none" || menu.style.display === "") {
        menu.style.display = "flex";
      } else {
        menu.style.display = "none";
      }
    });
  });
  