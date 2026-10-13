module.exports = [
  {
    id: 'bank-account',
    title: 'Tài khoản ngân hàng',
    difficulty: 'easy',
    prompt: `
Viết class \`BankAccount\`:
- \`constructor(owner, balance = 0)\`
- \`deposit(amount)\`: cộng tiền, trả về số dư mới. Nếu \`amount <= 0\` → \`throw new Error("Invalid amount")\`
- \`withdraw(amount)\`: trừ tiền, trả về số dư mới. Nếu \`amount <= 0\` → \`throw new Error("Invalid amount")\`; nếu không đủ tiền → \`throw new Error("Insufficient funds")\`
- getter \`balance\` trả về số dư
- \`owner\` là thuộc tính công khai
`,
    starter: `
class BankAccount {
  constructor(owner, balance = 0) {

  }
}
`,
    solution: `
class BankAccount {
  #balance;

  constructor(owner, balance = 0) {
    this.owner = owner;
    this.#balance = balance;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("Invalid amount");
    this.#balance += amount;
    return this.#balance;
  }

  withdraw(amount) {
    if (amount <= 0) throw new Error("Invalid amount");
    if (amount > this.#balance) throw new Error("Insufficient funds");
    this.#balance -= amount;
    return this.#balance;
  }

  get balance() {
    return this.#balance;
  }
}
`,
    hints: [
      'Lưu số dư trong `this.#balance` (private) và viết `get balance() { return this.#balance; }`.',
      'Kiểm tra điều kiện lỗi **trước** khi thay đổi số dư.'
    ],
    tests: [
      { code: 'const a = new BankAccount("An", 100); return [a.owner, a.balance, a.deposit(50), a.withdraw(30), a.balance];', label: 'gửi 50, rút 30', expected: ['An', 100, 150, 120, 120] },
      { code: 'const a = new BankAccount("Binh"); return a.balance;', label: 'số dư mặc định', expected: 0 },
      { code: 'const a = new BankAccount("Chi", 10); try { a.withdraw(20); return "không ném lỗi"; } catch (e) { return [e.message, a.balance]; }', label: 'rút quá số dư', expected: ['Insufficient funds', 10] },
      { code: 'const a = new BankAccount("Dung", 10); try { a.deposit(-5); return "không ném lỗi"; } catch (e) { return e.message; }', label: 'gửi số âm', expected: 'Invalid amount' },
      { code: 'const a = new BankAccount("E", 10); try { a.withdraw(0); return "không ném lỗi"; } catch (e) { return e.message; }', label: 'rút 0', expected: 'Invalid amount' }
    ]
  },
  {
    id: 'shapes-inheritance',
    title: 'Kế thừa hình học',
    difficulty: 'easy',
    prompt: `
Viết class \`Shape\` có phương thức \`describe()\` trả về chuỗi \`"<name> có diện tích <area>"\`, trong đó \`name\` và \`area()\` do lớp con cung cấp.

Viết hai lớp con:
- \`Rect extends Shape\` với \`constructor(w, h)\`, \`name\` là \`"Rect"\`
- \`Square extends Rect\` với \`constructor(side)\`, \`name\` là \`"Square"\`

\`new Square(3).describe()\` → \`"Square có diện tích 9"\`
`,
    starter: `
class Shape {
  describe() {
    return this.name + " có diện tích " + this.area();
  }
}

// viết Rect và Square
`,
    solution: `
class Shape {
  describe() {
    return this.name + " có diện tích " + this.area();
  }
}

class Rect extends Shape {
  constructor(w, h) {
    super();
    this.w = w;
    this.h = h;
    this.name = "Rect";
  }
  area() {
    return this.w * this.h;
  }
}

class Square extends Rect {
  constructor(side) {
    super(side, side);
    this.name = "Square";
  }
}
`,
    hints: [
      'Trong constructor của lớp con phải gọi `super(...)` trước khi dùng `this`.',
      '`Square` chỉ cần gọi `super(side, side)` rồi đổi `this.name` — `area()` được thừa kế từ `Rect`.'
    ],
    followUp: 'Bài toán kinh điển "Square có nên kế thừa Rectangle không?" (vi phạm nguyên lý Liskov): nếu `Rect` có `setWidth(w)`, chuyện gì xảy ra với `Square`?',
    tests: [
      { code: 'return new Rect(2, 5).describe();', label: 'new Rect(2, 5).describe()', expected: 'Rect có diện tích 10' },
      { code: 'return new Square(3).describe();', label: 'new Square(3).describe()', expected: 'Square có diện tích 9' },
      { code: 'const s = new Square(2); return [s instanceof Rect, s instanceof Shape];', label: 'Square là Rect và là Shape', expected: [true, true] }
    ]
  }
];
