// new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jul 17, 2019'),
// });

refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs:document.querySelector('[data-value="secs"]')
}


const timer = {
  start() {
  const somedata = new Date('Jul 17, 2021')
  setInterval(() => {
    const data = Date.now('Jul 17, 2019')
    const deltaTime = (somedata - data)
    const {days,hours,mins,secs} = getFullTime(deltaTime)
    console.log(`${days}:${hours}:${mins}:${secs}`)
  }, 1000);
 }
}
timer.start()

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
function getFullTime(time) {
  const days = Math.floor(time / (1000 * 60 * 60 * 24));
  const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
  const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
  const secs = pad(Math.floor((time % (1000 * 60)) / 1000));
  return {days,hours,mins,secs}
}

function pad(value) {
  return String(value).padStart(2, '0');
}
/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
