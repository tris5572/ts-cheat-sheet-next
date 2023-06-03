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
console.error("text"); // 標準エラー出力（改行あり）
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
];
