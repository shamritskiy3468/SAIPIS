var lineUnderPicture = "TitleDefault";
var borderColor = "red";
var width = "400px";
var opacity = "0.9";
var pictureName = "PictureForLaba1.jpg";

var picture = {
  lineUnder: "TitleDefault",
  borderPic: "red",
  widthPic: "400px",
  opacityPic: "0.9",
  pictureName: "PictureForLaba1.jpg"
};


if (document.getElementById("selectBorderColor")) {
  document.getElementById("selectBorderColor").addEventListener("click", selectBorderColor);
}
function selectBorderColor() {
  borderColor = document.getElementById("selectBorderColor").value;
  picture.borderPic = borderColor;
}

if (document.getElementById("selectWidthOfPicture")) {
  document.getElementById("selectWidthOfPicture").addEventListener("click", selectWidthOfPicture);
}
function selectWidthOfPicture() {
  width = document.getElementById("selectWidthOfPicture").value;
  picture.widthPic = width;
}

if (document.getElementById("selectOpacity")) {
  document.getElementById("selectOpacity").addEventListener("click", selectOpacity);
}
function selectOpacity() {
  opacity = document.getElementById("selectOpacity").value;
  picture.opacityPic = opacity;
}

if (document.getElementById("selectPictureName")) {
  document.getElementById("selectPictureName").addEventListener("click", selectPictureName);
}
function selectPictureName() {
  pictureName = document.getElementById("selectPictureName").value;
  picture.pictureName = pictureName;
}

if (document.getElementById("selectLineUnderPicture")) {
  document.getElementById("selectLineUnderPicture").addEventListener("click", selectLine);
}
function selectLine() {
  lineUnderPicture = document.getElementById("selectLineUnderPicture").value;
  picture.lineUnder = lineUnderPicture;
}

if(document.getElementById("button1")){
  document.getElementById("button1").addEventListener("click", onClickSybmitText);
}
function onClickSybmitText() {
  console.log("<img src=\"../Resources/" + pictureName + "\" " + "alt=\"picture\" width=\"" + width + "\" style=\"border-color:" + borderColor + "; opacity: " + opacity + "\; border: 6px solid " + borderColor + ";\">");
  
  document.getElementById("underOutput").innerHTML = "<p>" + lineUnderPicture + "</p>"
  document.getElementById("output").innerHTML = "<img src=\"../Resources/" + pictureName + "\" " + "alt=\"picture\" width=\"" + width + "\" style=\"border-color:" + borderColor + "; opacity: " + opacity + "\; border: 6px solid " + borderColor + ";\">";
  
    var table = document.getElementById("tableIt");
    
    var row = table.insertRow(-1);
    
    var cell_1 = row.insertCell(0);
    var cell_2 = row.insertCell(1);
    var cell_3 = row.insertCell(2);
    var cell_4 = row.insertCell(3);
    var cell_5 = row.insertCell(4);
    
    cell_1.innerHTML = borderColor;
    cell_2.innerHTML = lineUnderPicture;
    cell_3.innerHTML = opacity;
    cell_4.innerHTML = pictureName;
    cell_5.innerHTML = width;
 
}