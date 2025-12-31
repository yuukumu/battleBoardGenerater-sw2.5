// キャンバス
const canvas = document.getElementById('boardCanvas');
const ctx = canvas.getContext('2d');

// 縦線の描画
function generateLine(color, width, height, meter, spacing) {
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    for (let i = 0; i <= (meter + 1); i++) {
        const LineStartX = i * spacing + 6; // それぞれの線のスタート地点のx座標。+6は余白のため。
        ctx.beginPath(); // パスの開始 
        ctx.moveTo(LineStartX, 0); // 開始点 (x, y)
        ctx.lineTo(LineStartX, height); // 終了点 (x, y)
        ctx.stroke(); // 線を描画
    }
}

// 数字の描画
function generateText(color, meter, spacing) {
    ctx.font = '20px Arial'; // あとでフォントも変えられるようにしたい。
    ctx.fillStyle = color;
    ctx.textAlign = 'center'; // 指定したX座標が文字の中央になるように文字を描画
    for (let i = 0; i <= meter; i++) {
        ctx.fillText(String(i), ((i + 1 / 2) * spacing + 6), 30); // x=数式, y=30にテキストを描画
    }
}

// キャンバスの更新
function generateObjects() {
    // 設定を取得
    const lineColor = colorPickerL.value;
    const textColor = colorPickerT.value;
    const lineThickness = parseInt(lineThickBox.value, 10);
    const lineHeight = parseInt(heightBox.value, 10);
    const boardMeter = parseInt(boardMeterBox.value, 10);
    const spacing = parseInt(spacingBox.value, 10);

    // キャンバス内のすべての要素を削除
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 描画する要素に合わせてキャンバスのリサイズ(横方向の余白12px)
    canvas.width = (boardMeter + 1) * spacing + 12;
    canvas.height = lineHeight;

    // 要素を生成
    generateLine(lineColor, lineThickness, lineHeight, boardMeter, spacing) // 縦線の描画
    generateText(textColor, boardMeter, spacing) // 数字の描画
}

generateObjects();


