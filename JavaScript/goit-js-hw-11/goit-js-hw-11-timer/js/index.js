"use strict";

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.selector = selector;
    this.targetDate = targetDate;
  }

  insert = () => {
    const time = this.targetDate - Date.now();

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);
    const dateArr = [days, hours, mins, secs];

    const callback = (item) => (item <= 9 ? (item = "0" + item) : item);
    const dateToInsert = dateArr.map(callback);
    const [dd, hh, mm, ss] = dateToInsert;

    const timerRef = document.querySelector(this.selector);
    const markup = `
    <div class="field">
      <span class="value" data-value="days">${dd}</span>
      <span class="label">Days</span>
    </div>

    <div class="field">
      <span class="value" data-value="hours">${hh}</span>
      <span class="label">Hours</span>
    </div>

    <div class="field">
      <span class="value" data-value="mins">${mm}</span>
      <span class="label">Minutes</span>
    </div>

    <div class="field">
      <span class="value" data-value="secs">${ss}</span>
      <span class="label">Seconds</span>
    </div>
  </div>`;

    timerRef.innerHTML = markup;
  };

  timerStart() {
    setInterval(this.insert, 1000);
  }
}

const timerOne = new CountdownTimer({
  selector: "#timer-1",
  targetDate: new Date("Jul 17, 2021"),
});

timerOne.timerStart();