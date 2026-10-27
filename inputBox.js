// --- 色選択 ---

// 線や文字の最初の色
const colors = {
    lineBasicColor: "#ffffff",
    lineStrokeColor: "#ee7800",
    textBasicColor: "#ffffff",
    textStrokeColor: "#ee7800"
};

// カラーピッカーをクラスの指定から取得し、それぞれに処理を行う
document.querySelectorAll('.color-picker').forEach(picker => {

    const target = picker.dataset.target;

    // 初期値反映
    picker.value = colors[target];

    // 変更時のイベント登録
    picker.addEventListener('input', e => {
        colors[target] = e.target.value;
    });

});

// ボタン要素を読み込み、クリック時のイベント登録
document.querySelectorAll('.color-btn').forEach(button => {

    button.addEventListener('click', () => {

        const target = button.dataset.target;
        const color = button.dataset.colorCode;

        // 色データ更新
        colors[target] = color;

        // 対応するカラーピッカーも更新
        const picker = document.querySelector(
            `.color-picker[data-target="${target}"]`
        );

        if (picker) {
            picker.value = color;
        }
    });

});




// --- 数値ボックス ---

// 数値ボックスの最初の数値
const numbers = {
    boardMeter: 15, // ボードの長さ
    startNumber: 1, // ボードの最初の数字
    spacing: 48,    // 線と線の間隔
    height: 400,    // ボードの縦幅
    lineThickness: 3,   // 線の太さ
    lineStrokeWidth: 1, // 線の縁取りの幅
    textStrokeWidth: 3 // テキスト縁取りの太さ
};

// 数値ボックスをクラスの指定から取得し、それぞれに処理を行う
document.querySelectorAll('.num-box').forEach(numBox => {

    const param = numBox.dataset.param;

    // 初期値反映
    numBox.value = numbers[param];

    // 変更時のイベント登録
    numBox.addEventListener('input', e => {
        numbers[param] = e.target.value;
    });

});



// --- CheckBox ---
document
    .querySelectorAll('.toggle-container')
    .forEach(checkBox => {

        function updateDisplay() {
            const targetId = checkBox.dataset.target;
            const target = document.getElementById(targetId);

            target.style.display = checkBox.checked ? 'block' : 'none';
        }

        checkBox.addEventListener('change', updateDisplay);

        // 初期状態を反映
        updateDisplay();
    });
