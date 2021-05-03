var i = 0
var txt = "cd /interests | grep Web Development, DevOps, Virtualization, Operating Systems";
var speed = 85;
function typeWriter() {
    if (i < txt.length) {
      document.getElementById("interestsDemo").innerHTML += txt.charAt(i);
      i++;
      setTimeout(typeWriter, speed);
    }
  }
