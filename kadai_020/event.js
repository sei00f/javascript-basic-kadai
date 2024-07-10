document.addEventListener('DOMContentLoaded', (event) => {
  // 要素の取得
  const button = document.getElementById('btn');
  const textElement = document.getElementById('text');

  button.addEventListener('click', () => {
    textElement.textContent = 'ボタンをクリックしました';   // テキストの再代入
  });
});
