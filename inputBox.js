// m数を選択する数値入力ボックス
const boardMeterBox = document.getElementById('boardMeterBox');
boardMeterBox.value = 15; // 初期値

// 線の色、文字の色を選ぶ色選択ボックス
const colorPickerL = document.getElementById('colorPickerL');
const colorPickerT = document.getElementById('colorPickerT');
// 初期値
colorPickerL.value = "#ffffff";
colorPickerT.value = "#ffffff";
// 線の色、文字の色を選ぶボタンを押した場合
function updateColorPicker(lineOrText, color) {
    if (lineOrText == 'line') {
        colorPickerL.value = color;
    } else {
        colorPickerT.value = color;
    }
}

// 以下、m数の数値ボックスのように修正。下記のコードはリアルタイムでの変更が必要だったcsv作成の時には役立ったが、
// 今回はリアルタイム更新ではなく、作成ボタンを押したときにボックスの中身を参照すればよいため、
// 一番上のやつみたいにすごくシンプルにできる。

// 線と線の間隔
const spacingBox = document.getElementById('spacingBox');
spacingBox.value = 48;

// 線の縦幅
const heightBox = document.getElementById('heightBox');
heightBox.value = 400;

// 線の太さ
const lineThickBox = document.getElementById('lineThickBox');
lineThickBox.value = 4;



