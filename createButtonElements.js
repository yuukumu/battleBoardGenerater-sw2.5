// ボタン設定データのオブジェクトの配列
const colorDefinitions = [
  { label: "黒", className: "blackButton",  colorCode: "#000000" },
  { label: "白", className: "whiteButton",  colorCode: "#ffffff" },
  { label: "黄", className: "yellowButton", colorCode: "#ffff00" },
  { label: "赤", className: "redButton",    colorCode: "#ff0000" },
  { label: "橙", className: "orangeButton", colorCode: "#ee7800" },
  { label: "濃い茶", className: "darkbrownButton", colorCode: "#3e2e28" },
  { label: "暗い青", className: "darkblueButton",  colorCode: "#00008b" },
  { label: "暗い緑", className: "darkgreenButton", colorCode: "#006400" },
];


// ボタン生成
/**
 * ボタンを生成して指定の要素に追加する関数
 * @param {Array}  dataList 色データの配列
 * @param {String} containerId 親要素(li)のID
 * @param {String} targetType data-targetに入れる値
 */
function generateColorButtons(dataList, containerId, targetType) {
  // 親要素を取得
  const container = document.getElementById(containerId);
  
  // 親要素が見つからない場合は処理を中断（エラー防止）
  if (!container) return;

  // データの数だけループしてボタンを作る
  dataList.forEach(item => {
    // <input> 要素を作成
    const button = document.createElement("input");
    
    // 属性をセット
    button.type = "button";
    button.value = item.label;           // ボタンの文字
    button.className = item.className;   // クラス名
    
    // data属性をセット
    button.dataset.target = targetType;      // data-target
    button.dataset.colorCode = item.colorCode; // data-color-code
    
    // クリックイベントを設定 onclick="updateColorPicker(this)" となるように。
    button.setAttribute("onclick", "updateColorPicker(this)");

    // 親要素に追加
    container.appendChild(button);
  });
}

// 線の色用ボタンを生成
generateColorButtons(colorDefinitions, "chooseLineBasicColor", "line");

// 文字の色用ボタンを生成
generateColorButtons(colorDefinitions, "chooseTextBasicColor", "text");

// 文字の縁取りの色用ボタンを生成
generateColorButtons(colorDefinitions, "chooseTextStrokeColor", "textStroke")
