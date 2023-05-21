let cal = document.getElementById("calculate");
let calculate = document.getElementById("calculateAge");
cal.addEventListener("click", function () {
  let d1 = document.getElementById("date").value;
  let m1 = document.getElementById("month").value;
  let y1 = document.getElementById("year").value;

  let date = new Date();
  let d2 = date.getDate();
  let m2 = 1 + date.getMonth();
  let y2 = date.getFullYear();

  let month1 = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  if (d1 > d2) {
    d2 = d2 + month1[m2 - 1];
    m2 = m2 - 1;
  }
  if (m1 > m2) {
    m2 = m2 + 12;
    y2 = y2 - 1;
  }
  let a = d2 - d1;
  let b = m2 - m1;
  let c = y2 - y1;
  //   console.log(a);
  calculate.innerHTML =
    " Your Age is " + c + " Years " + b + " Months " + a + " Days ";
});
