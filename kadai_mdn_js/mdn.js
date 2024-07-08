// 現在の日付を取得
const today = new Date();

// 年、月、日を取得
const year = today.getFullYear();
const month = today.getMonth() + 1; // 0は1月なので+1
const day = today.getDate();

// 日付を表示
const formattedDate = `${year}年${month}月${day}日`;

// コンソールに表示
console.log(formattedDate);
