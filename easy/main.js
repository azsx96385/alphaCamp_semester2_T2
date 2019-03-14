const rgbPannel = document.getElementById("rgbpannel");
//取得三原色值
const red = document.getElementById("red");
const green = document.getElementById("green");
const blue = document.getElementById("blue");
//取得hex 輸出位置
const resultHex = document.getElementById("result_hex");
const outputPannel = document.getElementById("result_color").style;

//-------------------------------------------------------------
//監聽事件
rgbPannel.addEventListener("click", event => {
  if (event.target.id === "convert") {
    let colorArray = [];
    let r = parseInt(red.value);
    let g = parseInt(green.value);
    let b = parseInt(blue.value);
    colorArray.push(r, g, b);
    if (!isNaN(r) && !isNaN(g) && !isNaN(b)) {
      //驗證是否為數字
      if (r < 256 && g < 256 && b < 256 && r > -1 && g > -1 && b > -1) {
        //驗證是否超過範圍
        let hex = toHex(colorArray);
        resultHex.innerText = hex;
        outputPannel.backgroundColor = hex;
      } else {
        alert("你數字超過範圍喔!! 再檢查一下");
      }
    } else {
      alert("你有資料未填喔!! 再檢查一下");
    }
  }
});
//-------------------------------------------------------------
//轉換色碼函式
function toHex(array) {
  let hex = "#";
  array.forEach(element => {
    let result = element.toString(16);
    if (result.length === 1) {
      result = "0" + result;
    }
    hex += result;
  });

  return hex;
}
