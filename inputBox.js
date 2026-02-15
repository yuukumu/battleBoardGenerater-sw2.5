// 長さ(メートル)の数値入力ボックス
const boardMeterBox = document.getElementById('boardMeterBox');

// ボードの開始番号、左端の数字
const startNumberBox = document.getElementById('startNumberBox');

// 色選択ボックス
const lineBasicColorPicker = document.getElementById('lineBasicColorPicker');
const textBasicColorPicker = document.getElementById('textBasicColorPicker');
const textStrokeColorPicker = document.getElementById('textStrokeColorPicker');

// 線の色、文字の色のボタンを押したとき、色選択ボックスの色を変更
function updateColorPicker(buttonElement) {
    // 1. 引数(buttonElement)から直接データを取得
    const targetType = buttonElement.dataset.target;     // "line" or "text"
    const colorCode = buttonElement.dataset.colorCode;   // "#000000" 等カラーコード

    // 2. 操作すべき変数を決定
    let targetPicker = null;
    if (targetType === "line") {
        targetPicker = lineBasicColorPicker;
    } else if (targetType === "text") {
        targetPicker = textBasicColorPicker;
    } else if (targetType === "textStroke") {
        targetPicker = textStrokeColorPicker;
    }

    // 3. 値を更新し、変更イベントを強制発火させる
    if (targetPicker) {
        targetPicker.value = colorCode;
        // "input" イベントと "change" を手動で起こし、カラーピッカーをクリックで操作した時と同じ挙動を再現。
        // あとで"input"や"change"イベントによりその場でキャンバスが更新されるような機能を作るときに役立つ。
        targetPicker.dispatchEvent(new Event('input', { bubbles: true }));
        targetPicker.dispatchEvent(new Event('change', { bubbles: true }));
    }
}


// 線と線の間隔
const spacingBox = document.getElementById('spacingBox');

// 線の縦幅
const heightBox = document.getElementById('heightBox');

// 線の太さ
const lineThickBox = document.getElementById('lineThickBox');

// テキスト縁取りの太さ
const textStrokeWidthBox = document.getElementById('textStrokeWidthBox');


// 縁取りのチェックボックス、数字の縁取りをするならチェックするもの
const strokeCheckBox = document.getElementById('strokeCheckBox');

// 表示・非表示を切り替えられるdiv要素
// 最初はチェックされている(HTML側で制御)。
const colorContainer = document.getElementById('strokeColorContainer');

// チェックボックスの状態が変わった時(change)の動作
strokeCheckBox.addEventListener('change', function () {

    if (this.checked) {
        // チェックが入ったら、表示する (block要素として表示)
        colorContainer.style.display = 'block';
    } else {
        // チェックが外れたら、隠す (none)
        colorContainer.style.display = 'none';
    }

});


// 数値ボックスに「e」を入力させない
// 指数表記ができないようにする。数値ボックスにeが入ると困惑するし。
document.querySelectorAll('input[type="number"]').forEach(input => {
    // 1. キーボードからの直接入力をブロック（基本の防衛）
    input.addEventListener('keydown', (e) => {
        if (['e', 'E'].includes(e.key)) {
            e.preventDefault();
        }
    });

    // 2. 貼り付けなどに対する保険（徹底的な防衛）
    input.addEventListener('input', () => {
        // eが含まれていた場合のみ、置換して書き戻す
        if (input.value.includes('e') || input.value.includes('E')) {
            input.value = input.value.replace(/[eE]/g, '');
        }
    });
});
