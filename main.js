const rgbPannel = document.getElementById("rgbPannel");
const pannel = document.getElementById("pannel").style;
//slider & slider output
const input_r = document.getElementById("input_r");
const display_r = document.getElementById("item_number_r");
const input_g = document.getElementById("input_g");
const display_g = document.getElementById("item_number_g");
const input_b = document.getElementById("input_b");
const display_b = document.getElementById("item_number_b");
//hex result
const result_hex = document.getElementById("result_hex");
//-------------------------------------------------------------
//監聽事件
rgbPannel.addEventListener("mousemove", event => {
  let hex_result = [];
  if (event.target.id === "input_r") {
    display_r.innerText = input_r.value;
  } else if (event.target.id === "input_g") {
    display_g.innerText = input_g.value;
  } else if (event.target.id === "input_b") {
    display_b.innerText = input_b.value;
  }
  hex_result.push(
    display_r.innerText,
    display_g.innerText,
    display_b.innerText
  );
  result_hex.innerText = toHex(hex_result);
  pannel.backgroundColor = toHex(hex_result);
});
//-------------------------------------------------------------
//轉換色碼函式
function toHex(array) {
  let hex = "#";
  array.forEach(element => {
    let result = parseInt(element).toString(16);
    if (result.length === 1) {
      result = "0" + result;
    }
    hex += result;
  });
  return hex;
}
