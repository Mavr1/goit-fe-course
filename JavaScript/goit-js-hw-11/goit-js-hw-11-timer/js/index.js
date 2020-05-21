"use strict";

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
    this.spanDays = document.querySelector("span[data-value='days']");
    this.spanHours = document.querySelector("span[data-value='hours']");
    this.spanMins = document.querySelector("span[data-value='mins']");
    this.spanSecs = document.querySelector("span[data-value='secs']");
  }

  timerPeriod() {
    let dateArr;
    const time = this.targetDate - Date.now();
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    return (dateArr = [days, hours, mins, secs]);
  }

  timerFormat() {
    let dateToInsert;
    const callback = (item) => (item <= 9 ? (item = "0" + item) : item);
    return (dateToInsert = this.timerPeriod().map(callback));
  }

  insert = () => {
    const [dd, hh, mm, ss] = this.timerFormat();
    this.spanDays.textContent = dd;
    this.spanHours.textContent = hh;
    this.spanMins.textContent = mm;
    this.spanSecs.textContent = ss;
  };

  timerStart() {
    this.insert();
    setInterval(this.insert, 1000);
  }
}

const timerOne = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2021"),
});

timerOne.timerStart();
