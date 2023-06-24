export type Categories =
  | "All"
  | "General"
  | "Type"
  | "String"
  | "Math"
  | "Data";

export type Item = {
  category: Categories;
  name: string;
  code: string;
};

export const cheatSheetData: Item[] = [
  {
    category: "General",
    name: "出力",
    code: `
console.log("text"); // 改行あり
process.stdout.write("text"); // 改行なし
console.error("text"); // 標準エラー出力

console.log(1, "a", { b: 2 }); // 1 a { b: 2 }
`,
  },
  {
    category: "General",
    name: "分岐 (if)",
    code: `
const v = 1;

if (v === 1) {
  console.log("One");
} else {
  console.log("Other");
}
`,
  },
  {
    category: "General",
    name: "普通のループ (for)",
    code: `
const a = ["a", "b", "c"];

for (let i = 0; i < a.length; i++) {
  console.log(a[i]); // a -> b -> c
}
`,
  },
  {
    category: "General",
    name: "配列の要素でループ (for-of)",
    code: `
const a = ["a", "b", "c"];

for (const v of a) {
  console.log(v); // a -> b -> c
}
`,
  },
  {
    category: "General",
    name: "配列のインデックスでループ (for-in)",
    code: `
const a = ["a", "b", "c"];

for (const v in a) {
  console.log(v); // 0 -> 1 -> 2
}
`,
  },
  {
    category: "General",
    name: "オブジェクトのループ",
    code: `
const o = { a: "あ", b: "ぶ", c: "く" };

for (const k of Object.keys(o)) {
  console.log(k); // a -> b -> c
}

for (const v of Object.values(o)) {
  console.log(v); // あ -> ぶ -> く
}
`,
  },
  {
    category: "Type",
    name: "基本的な型",
    code: `
const n1: number = 42;
const n2: number = 3.1415;
const s: string = "text"; // 文字と文字列は同じ
const b: boolean = true; // or false
const a: number[] = [1, 2, 3];
const o1: { a: number; b: number } = { a: 1, b: 2 };
const o2: { [keys: string]: number } = { "1": 1, あ: 2 };
`,
  },
  {
    category: "Math",
    name: "算術演算",
    code: `
console.log(1 + 2); // 3
console.log(3 - 2); // 1
console.log(2 * 3); // 6
console.log(4 / 2); // 2
console.log(5 / 2); // 2.5
console.log(7 % 5); // 2
console.log(2 ** 3); // 8
console.log(2 ** -1); // 0.5
`,
  },
  {
    category: "Math",
    name: "数値計算（小数点以下）",
    code: `
// 切り捨て（n以下の最大の整数。-側）
Math.floor(2.1); // 2
Math.floor(-2.1); // -3

// 切り上げ（n以上の最小の整数。+側）
Math.ceil(2.1); // 3
Math.ceil(-2.1); // -2

// 四捨五入
Math.round(2.4); // 2
Math.round(2.5); // 3
Math.round(-2.5); // -2
Math.round(-2.6); // -3

// 小数点以下削除
Math.trunc(2.1); // 2
Math.trunc(-2.1); // -2
`,
  },
  {
    category: "Math",
    name: "数値計算（符号）",
    code: `
// 絶対値
Math.abs(-42); // 42

// 符号
Math.sign(3); // 1
Math.sign(0); // 0
Math.sign(-3); // -1
`,
  },
  {
    category: "Math",
    name: "数値の大小比較",
    code: `
Math.min(-1, 0, 2); // -1
Math.max(-1, 0, 2); // 2
`,
  },
  {
    category: "String",
    name: "文字列定義",
    code: `
const s1 = 'I\\'m single';
const s2 = "I'm double";
const s3 = \`new
line\`; // == "new\\nline"
const v = 42;
const s4 = \`num: \${v}\`; // num: 42
`,
  },
  {
    category: "String",
    name: "空白・改行の削除",
    code: `
const s = "\\n  aaa  \\n"
s.trim() // "aaa"
`,
  },
  {
    category: "String",
    name: "ゼロパディング（0埋め）",
    code: `
// 文字列化してから処理する
String(12).padStart(4, "0"); // 0012
`,
  },
  {
    category: "String",
    name: "文字列の出現回数を調べる",
    code: `
const s = "abcaA";
// 正規表現直書き版
(s.match(/a/g) || []).length; // 2
(s.match(/z/g) || []).length; // 0
// 変数で調べる場合は RegExp を使う
const c = "a";
(s.match(new RegExp(c, "g")) || []).length; // 2
(s.match(new RegExp(c, "gi")) || []).length; // 3
`,
  },
  {
    category: "Data",
    name: "配列の分割代入",
    code: `
const array = [1, 2, 3];
const [a, b, c] = array; // 1, 2, 3
const [d, e] = array;    // 1, 2
const [f, ...g] = array; // 1, [2, 3]
const [h, , i] = array;  // 1, 3
`,
  },
  {
    category: "Data",
    name: "配列の操作",
    code: `
const a = [0, 1];

// 末尾に追加 複数指定可
a.push(2, 3); // [0, 1, 2, 3]

// 末尾から取り除く
a.pop()); // 戻り値 3、配列 [0, 1, 2]
a.pop()); // 戻り値 2、配列 [0, 1]

// 先頭に追加 複数指定可
a.unshift(-2, -1); // [-2, -1, 0, 1]

// 先頭から取り除く
a.shift(); // 戻り値 -2、配列 [-1, 0, 1]
a.shift(); // 戻り値 -1、配列 [0, 1]
`,
  },
  {
    category: "Data",
    name: "配列の一部を取得",
    code: `
const a = [0, 1, 2, 3, 4];

// 開始から末尾(含まない)までを取得
a.slice(0, 2); // [0, 1]
a.slice(1, 4); // [1, 2, 3]

// 末尾を省略したときは最後まで
a.slice(2); // [2, 3, 4]
`,
  },
  {
    category: "Data",
    name: "配列の要素を削除して取り出す",
    code: `
// 指定した位置以降の要素を削除する
const a = [0, 1, 2, 3, 4];
const b = a.splice(3);
console.log(a); // [0, 1, 2]
console.log(b); // [3, 4]

// 指定位置から指定数の要素を削除する
const c = [0, 1, 2, 3, 4];
const d = c.splice(1, 2);
console.log(c); // [0, 3, 4]
console.log(d); // [1, 2]

// 指定位置から指定数の要素を削除して要素を追加する
const e = [0, 1, 2, 3, 4];
const f = e.splice(1, 2, 97, 98, 99);
console.log(e); // [0, 97, 98, 99, 3, 4]
console.log(f); // [1, 2]
`,
  },
  {
    category: "Data",
    name: "配列のソート (number)",
    code: `
const a = [10, 1, 5];

// デフォルトでは文字列としてソート
a.sort(); // [1, 10, 5]

// 昇順ソート
a.sort((a, b) => a - b); // [1, 5, 10]

// 降順ソート
a.sort((a, b) => b - a); // [10, 5, 1]
`,
  },
  {
    category: "Data",
    name: "配列から条件に一致したものを取り出す",
    code: `
const a = [1, 2, 3, 4, 5, 6];

const v = a.filter((v) => v % 2 === 0); // [2, 4, 6]
const l = a.filter((v) => v % 2 === 0).length; // 3
`,
  },
  {
    category: "Data",
    name: "配列を文字列化",
    code: `
const a = [1, 2, 3];

// 何も指定しないときはカンマ区切り
a.join(); // 1,2,3

// 区切り文字列を指定
a.join(" "); // 1 2 3
a.join(" - "); // 1 - 2 - 3
a.join(""); // 123
`,
  },
  {
    category: "Data",
    name: "重複を許さないSet",
    code: `
// 重複したものは追加されない
// 追加された順番を維持する
const s = new Set<number>();
s.add(3); // 3
s.add(1); // 3, 1
s.add(3); // 3, 1
s.add(2); // 3, 1, 2
console.log(s.size); // 3

// Set を Array に変換
const a = Array.from(s); // [3, 1, 2]

// Array を Set に変換
const s2 = new Set([4, 6, 5]); // 4, 6, 5
`,
  },
];
