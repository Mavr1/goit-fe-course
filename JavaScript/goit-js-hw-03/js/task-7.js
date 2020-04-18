"use strict";

/*
 * Типов транзацкий всего два.
 * Можно положить либо снять деньги со счета.
 */

const Transaction = {
  DEPOSIT: "deposit",
  WITHDRAW: "withdraw",
};

/*
 * Каждая транзакция это объект со свойствами: id, type и amount
 */

const account = {
  // Текущий баланс счета
  balance: 0,

  // История транзакций
  transactions: [],

  initOperation() {
    let amount = 0;
    let inputType;

    do {
      inputType = prompt(
        'Укажите тип операции, которую хотите совершить:\n  "+" - положить средства на счет;\n  "-" - снять деньги со счета;\n  "0" - проверить баланс;\n  "1" - детали транзакции;\n  "2" - вывести сумму по операциям'
      );
      switch (inputType) {
        case "+":
          this.deposit();
          break;

        case "-":
          this.withdraw();
          break;

        case "0":
          this.getBalance();
          break;

        case "1":
          const id = prompt("Введите номер транзакции, которая Вас интересует");
          this.getTransactionDetails(id);
          break;

        case "2":
          const type = prompt(
            `Введите тип транзакции, по которому Вы желаете получить сумму:\n  "deposit" - получить информацию по зачислению средств;\n   "withdraw" - получить информацию по снятию средств`
          );
          if (type === "deposit" || type === "withdraw") {
            this.getTransactionTotal(type);
            break
          }
          console.log("Введено неверное значение операции");
          break;

        case null:
          console.log(inputType);
          return console.log("Вы вышли из личного кабинета");

        default:
          console.log("Введено неверное значение");
      }
    } while (inputType !== null);
  },

  /*
   * Метод создает и возвращает объект транзакции.
   * Принимает сумму и тип транзакции.
   */

  createTransaction(amount, type) {
    let i = `${Math.round(Math.random() * 10000)} ${Math.round(
      Math.random() * 10000
    )}`;

    this.transactions.push({
      ["id"]: i,
      ["type"]: type,
      ["amount"]: amount,
      ["balance"]: this.balance,
    });
  },

  /* Метод отвечающий за добавление суммы к балансу.
   * Принимает сумму транзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций
   */

  deposit() {
    let amount = 0;

    do {
      amount = prompt(
        "Введите сумму средств, которую Вы хотите положить на счет"
      );
      switch (true) {
        case isNaN(amount) || Number(amount) < 0:
          console.log("Введено не верное значение");
          break;

        case amount === null:
          console.log("Операция отменена");
          break;

        default:
          this.balance += Number(amount);
          console.log("Сумма успешно переведена на счёт");
          return this.createTransaction(Number(amount), "deposit");
      }
    } while (amount !== null);
  },

  /* Метод отвечающий за снятие суммы с баланса.
   * Принимает сумму танзакции.
   * Вызывает createTransaction для создания объекта транзакции
   * после чего добавляет его в историю транзакций.
   *
   * Если amount больше чем текущий баланс, выводи сообщение
   * о том, что снятие такой суммы не возможно, недостаточно средств.
   */

  withdraw() {
    let amount = 0;

    do {
      amount = prompt(
        "Введите сумму средств, которую Вы хотите снять со счёта"
      );
      switch (true) {
        case isNaN(amount) || Number(amount) < 0:
          console.log("Введено не верное значение");
          break;

        case amount === null:
          console.log("Операция отменена");
          break;

        default:
          if (this.balance >= Number(amount)) {
            this.balance -= Number(amount);
            console.log("Сумма успешно снята со счёта");
            return this.createTransaction(Number(amount), "withdraw");
          } else
            return console.log(
              `Недостаточно средств на остатке: ${this.balance}`
            );
      }
    } while (amount !== null);
  },

  /*
   * Метод возвращает текущий баланс
   */
  getBalance() {
    console.table(this.transactions);
    console.log(`Остаток средств на счёте ${this.balance}`);
    return this.initOperation;
  },

  /*
   * Метод ищет и возвращает объект транзакции по id
   */
  getTransactionDetails(id) {
    for (let item of this.transactions) {
      if (item.id === id) {
        console.log("Данные выведены в таблицу");
        console.table(item);
        return this.initOperation;
      }
    }
    console.log("Запрашиваемая транзакция не найдена");
    return this.initOperation;
  },

  /*
   * Метод возвращает количество средств
   * определенного типа транзакции из всей истории транзакций
   */

  getTransactionTotal(type) {
    let total = 0;

    for (let item of this.transactions) {
      if (item.type === type) {
        total += item.amount;
      }
    }
    console.log(
      `Сумма по операции ${
        type === "deposit" ? "зачисления" : "снятия"
      } составляет`
    );
    console.log(total);
    return this.initOperation;
  },
};

account.initOperation();
