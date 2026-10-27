const canvas = document.getElementById('boardCanvas');
const ctx = canvas.getContext('2d');


function drawLine(x, y) {
    ctx.beginPath(); // パスの開始 
    ctx.moveTo(x, 0); // 開始点
    ctx.lineTo(x, y); // 終了点
    ctx.stroke(); // 線を描画
}

function drawText(text, x, y, stroke) {
    if (stroke) {
        ctx.strokeText(text, x, y);
    }

    ctx.fillText(text, x, y);
}


function draw() {

    const meter = numbers.boardMeter;
    const height = numbers.height;
    const spacing = numbers.spacing;

    // キャンバスをととのえる
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = meter * spacing + 12; // +12は両端の線が見切れないようにするため
    canvas.height = height;
    ctx.translate(6, 0); // キャンバスの描画範囲をx方向に6ずらす

    // チェックボックスの状態を取得
    const useTextStroke = document.getElementById('textStrokeCheckBox').checked;
    const useLineStroke = document.getElementById('lineStrokeCheckBox').checked;



    // ボードの長さ(メートル)に従ってループし、要素を生成

    // 区切り線
    /* 
    - 縁取りあり
        縁取りに使いたい色で先に太い線を描画し、次に普通の線を描画
    - 縁取りなし
        普通の線を描画するだけ
    */
    if (useLineStroke) {

        ctx.strokeStyle = colors.lineStrokeColor;
        ctx.lineWidth = Number(numbers.lineThickness) + Number(numbers.lineStrokeWidth);
        for (let i = 0; i <= meter; i++) {
            drawLine(i * spacing, height);
        }

        ctx.strokeStyle = colors.lineBasicColor;
        ctx.lineWidth = numbers.lineThickness;
        for (let i = 0; i <= meter; i++) {
            drawLine(i * spacing, height);
        }

    } else {

        ctx.strokeStyle = colors.lineBasicColor;
        ctx.lineWidth = numbers.lineThickness;
        for (let i = 0; i <= meter; i++) {
            drawLine(i * spacing, height);
        }

    }



    // 数字
    ctx.font = 'bold 24px Arial';
    ctx.textAlign = 'center'; // 指定したX座標が文字の中央になるように文字を描画
    ctx.fillStyle = colors.textBasicColor;

    // 数字の位置
    let textY;
    switch (document.getElementById('numPositionSelect').value) {
        case "up":
            textY = 30;
            break;

        case "down":
            textY = height - 15;
            break;

        case "center":
            textY = height / 2;
            break;
    }

    // 縁取り、塗りつぶしにより読み込むものを変える
    // if文を取り払って全部読み込む形でも動く
    if (useTextStroke) {
        ctx.strokeStyle = colors.textStrokeColor;
        ctx.lineWidth = numbers.textStrokeWidth;
    }

    for (let i = 0, startNumber = numbers.startNumber; i < meter; i++, startNumber++) {
        drawText(
            String(startNumber),
            (i + 0.5) * spacing,
            textY,
            useTextStroke
        );
    }
}




// 設定欄の全体を覆うid="options"のdiv要素内での変更に対応して動かすようにする
// drawの実行回数が無駄に増えないようにrequestDraw()を使う

const options = document.getElementById('options');

let drawScheduled = false;

function requestDraw() {

    if (drawScheduled) {
        return;
    }

    drawScheduled = true;

    requestAnimationFrame(() => {
        draw();
        drawScheduled = false;
    });
}

options.addEventListener('input', requestDraw);
options.addEventListener('change', requestDraw);
// class="color-btn"ボタンに限りクリックでも動かす
options.addEventListener('click', event => {
    if (event.target.closest('.color-btn')) {
        requestDraw();
    }
});


// 初回
draw()

