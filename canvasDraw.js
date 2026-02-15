// キャンバス
const canvas = document.getElementById('boardCanvas');
const ctx = canvas.getContext('2d');

// 縦線の描画
/**
 * 線をキャンバスに描画する関数
 * @param {String} color  描画する線のカラーコード 
 * @param {Number} thickness 線の太さ(横幅)
 * @param {Number} height 線の長さ
 * @param {Number} meter  メートル単位でのボードの長さ。これによって線の個数が決まる。
 * @param {Number} spacing  線と線の間隔
 */
function drawLine(color, thickness, height, meter, spacing) {
    ctx.strokeStyle = color;
    ctx.lineWidth = thickness;
    for (let i = 0; i <= meter; i++) {
        const LineStartX = i * spacing + 6; // それぞれの線のスタート地点のx座標。+6はボードの余白のため。
        ctx.beginPath(); // パスの開始 
        ctx.moveTo(LineStartX, 0); // 開始点 (x, y)
        ctx.lineTo(LineStartX, height); // 終了点 (x, y)
        ctx.stroke(); // 線を描画
    }
}


// 数字の描画
/**
 * 数字を文字としてキャンバスに描画する関数
 * @param {String} color 描画する数字のカラーコード
 * @param {Number} meter メートル単位でのボードの長さ。これによって数字の個数が決まる。
 * @param {Number} startNumber 開始番号。左端の数字。
 * @param {Number} spacing 「線と線の間隔」の値。線の間隔に合わせて数字を入れる場所も変わる。
 * @param {Boolean} stroke 文字を縁取りするかどうか
 * @param {Number} strokeWidth 縁取り文字の線の太さ
 * @param {Number} strokeColor 縁取りの色
 */
function drawText(basicColor, meter, startNumber, spacing, stroke, strokeWidth, strokeColor) {
    // テキスト共通設定
    ctx.font = 'bold 24px Arial';
    ctx.fillStyle = basicColor;
    ctx.textAlign = 'center'; // 指定したX座標が文字の中央になるように文字を描画

    // 縁取りをする場合、その設定
    if (stroke) {
        ctx.strokeStyle = strokeColor;
        ctx.lineWidth = strokeWidth;
    }

    // 描画
    // 縁取り文字を描画して、その上に塗りつぶしてある文字を乗せる。
    // 塗りつぶし文字の描画を消せば、塗りつぶしなしの「縁のみ文字」にもできる拡張性あり。
    const textY = 30; // y座標
    for (let i = 0; i < meter; i++) {
        x = (i + 1 / 2) * spacing + 6; // x座標
        number = String(i + startNumber); // 文字として描画する数字

        // 縁取りをする場合、縁取り文字(線のみの文字)描画
        if (stroke) {
            ctx.strokeText(number, x, textY);
        }
        
        // 塗りつぶし文字
        ctx.fillText(number, x, textY);
    }
}


// キャンバスの更新
function updateCanvas() {
    // 色選択ボックスから設定を取得
    const lineColor = lineBasicColorPicker.value;
    const textColor = textBasicColorPicker.value;
    const textStrokeColor = textStrokeColorPicker.value;

    // 数値ボックスから設定を取得
    const lineThickness = parseInt(lineThickBox.value, 10);
    const lineHeight = parseInt(heightBox.value, 10);
    const boardMeter = parseInt(boardMeterBox.value, 10);
    const startNumber = parseInt(startNumberBox.value, 10);
    const spacing = parseInt(spacingBox.value, 10);
    const textStrokeWidth = parseInt(textStrokeWidthBox.value, 10);

    // チェックボックスの状態を取得
    const textStroke = strokeCheckBox.checked;

    // キャンバス内のすべての要素を削除
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    // 描画する要素に合わせてキャンバスのリサイズ(横方向の余白12px)
    canvas.width = boardMeter * spacing + 12;
    canvas.height = lineHeight;

    // 要素を生成
    drawLine(lineColor, lineThickness, lineHeight, boardMeter, spacing) // 縦線の描画
    drawText(textColor, boardMeter, startNumber, spacing, textStroke, textStrokeWidth, textStrokeColor) // 数字の描画
}

updateCanvas();


