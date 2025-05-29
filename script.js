function func1() {
  document.getElementById("select-box1").style.display = "block";
  document.getElementById("select-box2").style.display = "none";
  document.getElementById("select-box3").style.display = "none";
}
function func2() {
  document.getElementById("select-box2").style.display = "block";
  document.getElementById("select-box1").style.display = "none";
  document.getElementById("select-box3").style.display = "none";
}
function func3() {
  document.getElementById("select-box3").style.display = "block";
  document.getElementById("select-box2").style.display = "none";
  document.getElementById("select-box1").style.display = "none";
}
function colorBox1() {
  document.getElementById("first-box").style.backgroundColor =
    "rgb(251, 224, 232)";
  document.getElementById("first-box").style.border =
    "2px solid rgb(247, 139, 173)";
  document.getElementById("second-box").style.backgroundColor = "unset";
  document.getElementById("third-box").style.backgroundColor = "unset";
  document.getElementById("second-box").style.border =
    "1px solid rgb(218, 208, 208)";
  document.getElementById("third-box").style.border =
    "1px solid rgb(218, 208, 208)";
}
function colorBox2() {
  document.getElementById("second-box").style.backgroundColor =
    "rgb(251, 224, 232)";
  document.getElementById("first-box").style.backgroundColor = "unset";
  document.getElementById("third-box").style.backgroundColor = "unset";
  document.getElementById("second-box").style.border =
    "2px solid rgb(247, 139, 173)";
  document.getElementById("first-box").style.border =
    "1px solid rgb(218, 208, 208)";
  document.getElementById("third-box").style.border =
    "1px solid rgb(218, 208, 208)";
}
function colorBox3() {
  document.getElementById("third-box").style.backgroundColor =
    "rgb(251, 224, 232)";
  document.getElementById("first-box").style.backgroundColor = "unset";
  document.getElementById("second-box").style.backgroundColor = "unset";
  document.getElementById("third-box").style.border =
    "2px solid rgb(247, 139, 173)";
  document.getElementById("first-box").style.border =
    "1px solid rgb(218, 208, 208)";
  document.getElementById("second-box").style.border =
    "1px solid rgb(218, 208, 208)";
}
function colorOutBox() {
  document.getElementById("first-box").style.backgroundColor = "unset";
  document.getElementById("second-box").style.backgroundColor = "unset";
  document.getElementById("third-box").style.backgroundColor = "unset";
  document.getElementById("first-box").style.border =
    "1px solid rgb(218, 208, 208)";
  document.getElementById("second-box").style.border =
    "1px solid rgb(218, 208, 208)";
  document.getElementById("third-box").style.border =
    "1px solid rgb(218, 208, 208)";
}
