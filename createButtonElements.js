// ボタン設定データのオブジェクトの配列
const colorDefinitions = [
  { colorCode: "#000000", text: "黒",     textColor: "snow"  },
  { colorCode: "#ffffff", text: "白",     textColor: "black" },
  { colorCode: "#ff0000", text: "赤",     textColor: "white" },
  { colorCode: "#ee7800", text: "橙",     textColor: "white" },
  { colorCode: "#ffff00", text: "黄",     textColor: "black" },
  { colorCode: "#006400", text: "暗い緑", textColor: "white" },
  { colorCode: "#00008b", text: "暗い青", textColor: "white" },
  { colorCode: "#3e2e28", text: "濃い茶", textColor: "white" },
];



/**
 * ボタンを生成して指定の要素に追加する関数
 * @param {Array}  dataList 色データの配列
 * @param {String} containerId 親要素(li)のID
 * @param {String} targetType data-targetに入れる値
 */
function generateColorButtons(dataList, containerId, targetType) {
  // 親要素を取得
  const container = document.getElementById(containerId);

  // 親要素が見つからない場合は処理を中断
  if (!container) return;

  dataList.forEach(item => {
    const button = document.createElement("button");

    button.type = "button";
    button.className = "color-btn";

    button.textContent = item.text; // ボタンの文字
    button.style.color = item.textColor; // ボタンの文字色
    button.style.backgroundColor = item.colorCode; // ボタンの色

    // data属性
    button.dataset.target = targetType;
    button.dataset.colorCode = item.colorCode;

    container.appendChild(button);
  });
}

// 線の色用ボタンを生成
generateColorButtons(colorDefinitions, "chooseLineBasicColor", "lineBasicColor");
// 線の縁取りの色用ボタンを生成
generateColorButtons(colorDefinitions, "chooseLineStrokeColor", "lineStrokeColor")

// 文字の色用ボタンを生成
generateColorButtons(colorDefinitions, "chooseTextBasicColor", "textBasicColor");
// 文字の縁取りの色用ボタンを生成
generateColorButtons(colorDefinitions, "chooseTextStrokeColor", "textStrokeColor")
