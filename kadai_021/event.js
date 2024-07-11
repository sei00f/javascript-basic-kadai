document.addEventListener('DOMContentLoaded', (event) => {
  // 要素の取得
  const button = document.getElementById('btn');
  const textElement = document.getElementById('text');

  // 2秒（2000ミリ秒）の待ち時間を設定し、非同期処理を実行する
  button.addEventListener('click', () => {
    setTimeout(() => {
      textElement.textContent = 'ボタンをクリックしました';
    }, 2000);
  });
});
