---
id: classes
title: Class và this
---
Bạn sẽ cần `class` để cài đặt cấu trúc dữ liệu (Stack, Queue, LinkedList, Heap, Trie...) — và nhiều bài phỏng vấn yêu cầu "thiết kế một class" (LRU Cache, MinStack).

## Cú pháp class

```js run
class Rectangle {
  constructor(width, height) {   // chạy khi gọi new Rectangle(...)
    this.width = width;          // this = object đang được tạo
    this.height = height;
  }

  area() {                       // phương thức dùng chung cho mọi instance
    return this.width * this.height;
  }

  get perimeter() {              // getter: gọi như thuộc tính, không có ()
    return 2 * (this.width + this.height);
  }

  static square(side) {          // static: gọi trên class, không trên instance
    return new Rectangle(side, side);
  }
}

const r = new Rectangle(3, 4);
console.log(r.area(), r.perimeter);
console.log(Rectangle.square(5).area());
```

## Kế thừa: `extends` và `super`

```js run
class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return this.name + " phát ra âm thanh";
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);                // BẮT BUỘC gọi trước khi dùng this
    this.breed = breed;
  }
  speak() {                     // ghi đè (override)
    return super.speak() + ": Gâu gâu!";
  }
}

const d = new Dog("Lu", "Corgi");
console.log(d.speak());
console.log(d instanceof Dog, d instanceof Animal);
```

## Thuộc tính private `#`

```js run
class BankAccount {
  #balance = 0;                 // chỉ truy cập được bên trong class

  deposit(amount) {
    if (amount <= 0) throw new Error("Số tiền phải dương");
    this.#balance += amount;
    return this.#balance;
  }
  get balance() {
    return this.#balance;
  }
}

const acc = new BankAccount();
acc.deposit(100);
console.log(acc.balance);       // 100
console.log(acc.balance = 999, acc.balance); // getter không có setter → gán không có tác dụng
```

## `this` — phụ thuộc vào **cách gọi**

`this` trong hàm thường được quyết định lúc **gọi**, không phải lúc viết:

```js run
const obj = {
  name: "obj",
  regular() { return this && this.name; },
  arrow: () => typeof this,      // arrow function không có this riêng
};

console.log(obj.regular());       // "obj" — gọi qua obj. → this = obj
const detached = obj.regular;
console.log(detached());          // undefined — mất this khi tách hàm ra
console.log(obj.regular.call({ name: "khác" })); // ép this bằng call
const bound = obj.regular.bind(obj);
console.log(bound());             // "obj" — bind cố định this
```

Bốn luật (theo độ ưu tiên): `new` → `call`/`apply`/`bind` → gọi qua object (`obj.f()`) → gọi trơn (`f()`: `undefined` trong strict mode / class). Arrow function **lấy `this` của scope bao ngoài**, nên hay dùng làm callback trong class.

## Prototype — class thực chất là gì

```js run
class A { hi() { return "hi"; } }
const a = new A();
console.log(typeof A);                                   // "function"
console.log(Object.getPrototypeOf(a) === A.prototype);   // true
console.log(a.hasOwnProperty("hi"));                     // false — hi nằm trên prototype, dùng chung
```

`class` chỉ là cú pháp đẹp hơn cho cơ chế **prototype** có từ đầu của JS: phương thức nằm trên `A.prototype`, mọi instance dùng chung qua "chuỗi prototype".

## Câu hỏi tại sao

- Tại sao phương thức được đặt trên prototype mà không copy vào từng object? Tính bộ nhớ với 1 triệu instance.
- Kế thừa sâu nhiều tầng (Animal → Mammal → Dog → Corgi) hay bị khuyên tránh — "favor composition over inheritance". Tại sao?
