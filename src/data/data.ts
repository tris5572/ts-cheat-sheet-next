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
const s: string = "text";
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
    name: "数値比較",
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
];
