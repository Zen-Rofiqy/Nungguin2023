let dayBox = document.getElementById("day-box");
let hrBox = document.getElementById("hr-box");
let minBox = document.getElementById("min-box");
let secBox = document.getElementById("sec-box");
let endDate = new Date(2023, 0, 1, 00, 00);
let endTime = endDate.getTime();

function countdown() {
    let todayDate = new Date();
    let todayTime = todayDate.getTime();
    let remainingTime = endTime - todayTime;
    let oneMin = 60 * 1000;
    let oneHr = 60 * oneMin;
    let oneDay = 24 * oneHr;

    let addZeroes = (num) => (num < 10? `0${num}` : num); 

    if(endTime < todayTime) {
        clearInterval(i);
        document.querySelector(
            ".countdown"
        ).innerHTML = `<p><br></br><br></br>
        Terima kasih sudah tetap bersamaku melewati momen sulit 
        dan bahagia pada tahun ini. Aku berdoa semoga
        kita akan melewati tahun-tahun berikutnya bersama selalu.
        Selamat tahun baru, Aida!
        <br>- Angga</br></p>`;

        document.querySelector(
            ".heading h3"
        ).innerHTML = `<p>SELAMAT TAHUN BARU!!</p>`;

        document.querySelector(
            ".heading h1"
        ).style.fontSize = `40px`;

        document.querySelector(
            "body"
        ).style.backgroundImage = `url('${"https://bit.ly/3Q123mb"}')`;
        
    } else {
      let daysLeft = Math.floor(remainingTime / oneDay);
      let hrsLeft = Math.floor((remainingTime % oneDay) / oneHr);
      let minsLeft = Math.floor((remainingTime % oneHr) / oneMin);
      let secsLeft = Math.floor((remainingTime % oneMin) / 1000);

      dayBox.textContent = addZeroes(daysLeft);
      hrBox.textContent = addZeroes(hrsLeft);
      minBox.textContent = addZeroes(minsLeft);
      secBox.textContent = addZeroes(secsLeft);
    }
}

let i = setInterval(countdown, 1000);
countdown();