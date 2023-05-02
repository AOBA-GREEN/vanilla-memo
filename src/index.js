//バッククォートを使ったテンプレート文字列
const name = "AOBA";
const age = 26;

const message = `私の名前は${name}です。年齢は${age}です。`;
console.log(message);

//アロー関数
//中の処理が1行で終わる場合、{}とreturnが省略できる。
const sum = (num1, num2) => {
  return num1 + num2;
};
console.log(sum(84, 334));

//分割代入
//オブジェクトないし配列の要素を、処理の直前に定数に取り出し、普通の定数のように使う

//オブジェクトはプロパティ名を指定する
const profile = {
  name2: "青葉",
  age2: 26
};
const { name2, age2 } = profile;
const newMessage = `名前は${name2}です。年齢は${age2}です。`;
console.log(newMessage);

//配列は、指定した定数名に同じ順番の配列要素が入る
const city = ["Toshima", "Nerima"];
const [city1, city2] = city;
const message2 = `都市1:${city1}、都市2:${city2}`;
console.log(message2);

//デフォルト値
//引数や分割代入の定数宣言時に、=で初期値を設定する。初期値を設定しないと文字列のundefinedが入る。
const sayHello = (name = "GUEST") => console.log(`Hello, ${name}!`);
sayHello("AOBA");

//スプレッド構文
//配列の中身を1つずつ取り出して処理する
const arr1 = [1, 2, 3];
const sumFunc = (numA, numB) => console.log(numA + numB);
sumFunc(...arr1); //要素の前2つが取れて、3が返却される

//配列の要素を別の配列にまとめる
const arr2 = [1, 2, 3, 4, 5];
const [numA, numB, ...arr3] = arr2;
console.log(arr3); //arr2の後ろ3つの要素がarr3に格納される

//配列のコピー
//=を使って配列をコピーすると、参照渡しになる！
//スプレッド構文なら、値渡しができる。
const arr4 = [10, 20];
const arr5 = [30, 40];
const arr6 = [...arr4];
console.log(`コピー後：${arr6}`);

//配列の結合
const arr7 = [...arr4, ...arr5];
console.log(`結合後：${arr7}`);

//mapやFilterを使った配列の処理
//配列要素を1つずつ取り出すサンプル(map)
//2つ目の引数でインデックスが取れる。
const nameArr = ["扶桑", "山城", "伊勢"];
nameArr.map((name, index) => console.log(`${index + 1}番目は${name}`));

//配列を加工して新しい配列を作るサンプル(map)
const nameArr2 = nameArr.map((name) => {
  return `艦名：${name}`;
});
console.log(nameArr2);

//条件に合致する要素を取り出す(filter)
const numArr = [1, 2, 3, 4, 5];
const newNumArr = numArr.filter((num) => {
  return num % 2 === 1;
});
console.log(newNumArr);
