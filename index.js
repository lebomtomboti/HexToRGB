function convertRGBtoHex() {
    let redValue = parseInt(document.getElementById("red").value);
    let greenValue = parseInt(document.getElementById("green").value);
    let blueValue = parseInt(document.getElementById("blue").value);
  
    let redHex = redValue.toString(16).padStart(2, "0");
    let greenHex = greenValue.toString(16).padStart(2, "0");
    let blueHex = blueValue.toString(16).padStart(2, "0");
  
    
    let hexColor = "#" + redHex + greenHex + blueHex;
  
    document.getElementById("result").innerHTML = "Hexadecimal color: " + hexColor;
  }
  
  