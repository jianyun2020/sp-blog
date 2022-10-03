---
title: 'Two Forms of Pre-rendering'
---

Next.js has two forms of pre-rendering: **Static Generation** and **Server-side Rendering**. The difference is in **when** it generates the HTML for a page.

- **Static Generation** is the pre-rendering method that generates the HTML at **build time**. The pre-rendered HTML is then _reused_ on each request.
- **Server-side Rendering** is the pre-rendering method that generates the HTML on **each request**.

Importantly, Next.js let's you **choose** which pre-rendering form to use for each page. You can create a "hybrid" Next.js app by using Static Generation for most pages and using Server-side Rendering for others.


# TypeScript入门

# 基础数据类型

## JS的八种内置类型

```tsx
let str: string = "字符串";
let num: number = 26;
let bool: boolean = true;
let u: undefined = undefined;
let n: null = null;
let obj: object = { x: 1 };
let big: bigint = 100n;
let sym: symbol = Symbol("me");
```

## 注意点

**null和undefined**

默认情况下 `null` 和 `undefined` 是所有类型的子类型。 就是说你可以把 `null` 和 `undefined` 赋值给其他类型。

如果你在tsconfig.json指定了`"strictNullChecks":true` ，`null` 和 `undefined` 只能赋值给 `void` 和它们各自的类型。

**number和bigint**

虽然`number`和`bigint`都表示数字，但是这两个类型不兼容。

```tsx
let big: bigint =  100n;
let num: number = 6;
big = num;
num = big;
```

会抛出一个类型不兼容的 ts(2322) 错误。

# 其它类型

## Array

对数组类型的定义有两种方式：

```tsx
let arr: string[] = ['1', '2'];
let arr2: Array<string> = ['1', '2'];
```

定义联合类型数组：

```tsx
let arr: (number | string)[];
// 表示定义了一个名称叫做arr的数组
// 这个数组中将来既可以存储数值类型的数据，也可以存储字符串类型的数据
arr3 = [1, 'a', 2, 'b'];
```

定义指定对象成员的数组：

```tsx
// interface是接口
interface Arrobj {
	name: string,
	age: number
}

let arr3: Arrobj[] = [{ name: 'code', age: 28 }];
```

## 函数

### 函数声明

```tsx
function sum(x: number, y: number): number{
	return x + y;
}
```

### 函数表达式

```tsx
let mySum: (x: number, y: number) => number = function(x: number, y: number): number {
	return x + y;
}
```

### 用接口定义函数类型

```tsx
interface SearFunc {
	(source: string, subString: string): boolean;
}
```

采用函数表达式接口定义函数的方式时，对等号左侧进行类型限制，可以保证以后对函数名赋值时保证参数个数、参数类型、返回值类型不变。

### 可选参数

```tsx
function buildName(firstName: string, lastName?: string) {
	if (lastName) {
		return firstName + ' ' + lastName;
	} else {
		return firstName;
	}
}

let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');
```

注意点：可选参数后面不允许再出现必需参数

### 参数默认值

```tsx
function buildName(firstName: string, lastName: string = 'Cat') {
    return firstName + ' ' + lastName;
}
let tomcat = buildName('Tom', 'Cat');
let tom = buildName('Tom');
```

### 剩余参数

```tsx
function push(array: any[], ...items: any[]) {
    items.forEach(function(item) {
        array.push(item);
    });
}
let a = [];
push(a, 1, 2, 3);
```

### 函数重载

由于 JavaScript 是一个动态语言，我们通常会使用不同类型的参数来调用同一个函数，该函数会根据不同的参数而返回不同的类型的调用结果：

```tsx
function add(x, y) {
	return x + y;
}

add(1, 2); // 3
add('1', '2'); // '12'
```

由于 TypeScript 是 JavaScript 的超集，因此以上的代码可以直接在 TypeScript 中使用，但当 TypeScript 编译器开启 `noImplicitAny` 的配置项时，以上代码会提示以下错误信息：

```tsx
Parameter 'x' implicitly has an 'any' type.
Parameter 'y' implicitly has an 'any' type.
```

该信息告诉我们参数 x 和参数 y 隐式具有 `any` 类型。为了解决这个问题，我们可以为参数设置一个类型。因为我们希望 `add` 函数同时支持 string 和 number 类型，因此我们可以定义一个 `string | number` 联合类型，同时我们为该联合类型取个别名：

```tsx
type Combinable = string | number;
```

在定义完 Combinable 联合类型后，我们来更新一下 `add` 函数：

```tsx
function add(a: Combinable, b: Combinable) {
	if (typeof a === 'string' || typeof b === 'string') {
		return a.toString() + b.toString();
	}
	return a + b;
}
```

为 `add` 函数的参数显式设置类型之后，之前错误的提示消息就消失了。那么此时的 `add` 函数就完美了么，我们来实际测试一下：

```tsx
const result = add('Semlinker', ' Kakuqo');
result.split(' ');
```

在上面代码中，我们分别使用 `'Semlinker'` 和 `' Kakuqo'` 这两个字符串作为参数调用 add 函数，并把调用结果保存到一个名为 `result` 的变量上，这时候我们想当然的认为此时 result 的变量的类型为 string，所以我们就可以正常调用字符串对象上的 `split` 方法。但这时 TypeScript 编译器又出现以下错误信息了：

```tsx
Property 'split' does not exist on type 'number'.
```

很明显 `number` 类型的对象上并不存在 `split` 属性。问题又来了，那如何解决呢？这时我们就可以利用 TypeScript 提供的函数重载特性。

**函数重载或方法重载是使用相同名称和不同参数数量或类型创建多个方法的一种能力。** 要解决前面遇到的问题，方法就是为同一个函数提供多个函数类型定义来进行函数重载，编译器会根据这个列表去处理函数的调用。

```tsx
type Types = number | string
function add(a:number,b:number):number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a:Types, b:Types) {
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString();
  }
  return a + b;
}
const result = add('Semlinker', ' Kakuqo');
result.split(' ');

```

在以上代码中，我们为 add 函数提供了多个函数类型定义，从而实现函数的重载。之后，可恶的错误消息又消失了，因为这时 result 变量的类型是 `string` 类型。

## **Tuple(元组)**

### **元祖定义**

众所周知，数组一般由同种类型的值组成，但有时我们需要在单个变量中存储不同类型的值，这时候我们就可以使用元组。在 JavaScript 中是没有元组的，元组是 TypeScript 中特有的类型，其工作方式类似于数组。

元组最重要的特性是可以限制`数组元素的个数和类型`，它特别适合用来实现多值返回。

元祖用于保存定长定数据类型的数据

```tsx
let x: [string, number];
// 类型必须匹配且个数必须为2

x = ['hello', 10]; // ok
x = ['hello', 10, 10]; // error
x = [10, 'hello']; // error
```

注意，元组类型只能表示一个已知元素数量和类型的数组，长度已指定，越界访问会提示错误。如果一个数组中可能有多种类型，数量和类型都不确定，那就直接`any[]`

### **元祖类型的解构赋值**

我们可以通过下标的方式来访问元组中的元素，当元组中的元素较多时，这种方式并不是那么便捷。其实元组也是支持解构赋值的：

```tsx
let employee: [number, string] = [1, 'Tom'];
let [id, username] = employee;
console.log('id: ', id); // id: 1
console.log('username: ', username); // username: Tom
```

这里需要注意的是，在解构赋值时，如果解构数组元素的个数是不能超过元组中元素的个数，否则也会出现错误，比如：

```tsx
let employee: [number, string] = [1, "Semlinker"];\
let [id, username, age] = employee;
```

在以上代码中，我们新增了一个 age 变量，但此时 TypeScript 编译器会提示以下错误信息：

```tsx
Tuple type '[number, string]' of length '2' has no element at index '2'.
```

很明显元组类型 `[number, string]` 的长度是 `2`，在位置索引 `2` 处不存在任何元素。

### **元组类型的可选元素**

与函数签名类似，在定义元组类型时，我们也可以通过 `?`
 号来声明元组类型的可选元素，具体的示例如下：

```tsx
let optionalTuple: [string, boolean?];

optionalTuple = ['Tom', true];
console.log('optionalTuple: ', optionalTuple); // optionalTuple: Tom, true

optionalTuple = ['Tom'];
console.log('optionalTuple: ', optionalTuple); // Tom
```

那么在实际工作中，声明可选的元组元素有什么作用？这里我们来举一个例子，在三维坐标轴中，一个坐标点可以使用 `(x, y, z)` 的形式来表示，对于二维坐标轴来说，坐标点可以使用 `(x, y)` 的形式来表示，而对于一维坐标轴来说，只要使用 `(x)` 的形式来表示即可。针对这种情形，在 TypeScript 中就可以利用元组类型可选元素的特性来定义一个元组类型的坐标点，具体实现如下：

```tsx
type Point = [number, number?, number?];

const x: Point = [10]; // 一维坐标点
const xy: Point = [10, 20]; // 二维坐标点
const xyz: Point = [10, 20, 10]; // 三维坐标点

console.log(x.length); // 1
console.log(xy.length); // 2
console.log(xyz.length); // 3
```
