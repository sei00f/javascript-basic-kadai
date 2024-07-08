// 祝日リスト
const holidays = ["正月", "成人の日", "建国記念日", "天皇誕生日", "春分の日", "昭和の日", "憲法記念日", "みどりの日", "こどもの日", "海の日", "山の日", "敬老の日", "秋分の日", "スポーツの日", "文化の日", "勤労感謝の日"]

// 1, for文で書く
for (let i = 0; i < holidays.length; i++) {
  console.log(holidays[i]);
}

// 2, while文で書く
let i = 0;            // 初期化は外部で
while (i < holidays.length) {
  console.log(holidays[i]);
  i++;
}
