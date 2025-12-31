const from = document.getElementById("from");
const to = document.getElementById("to");
const result = document.getElementById("result");
const btn = document.getElementById("convertBtn");

// 1️⃣ Currency list load
fetch("https://api.frankfurter.app/currencies")
.then(res => res.json())
.then(data => {
  for (let code in data) {
    let option1 = document.createElement("option");
    option1.value = code;
    option1.text = code;
    from.add(option1);

    let option2 = document.createElement("option");
    option2.value = code;
    option2.text = code;
    to.add(option2);
  }

  from.value = "USD";
  to.value = "INR";
});

// 2️⃣ Convert button
btn.addEventListener("click", () => {
  let amount = document.getElementById("amount").value;

  fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${from.value}&to=${to.value}`)
  .then(res => res.json())
  .then(data => {
    result.innerHTML = `
      ${amount} ${from.value} = 
      <b>${data.rates[to.value]}</b> ${to.value}
    `;
  });
});
