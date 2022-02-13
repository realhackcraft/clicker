money = document.getElementById('money');
money.innerHTML = 0;
max = document.getElementById('max');
max.innerHTML = "Max money: $200";

balance = 0;
balancedisplay = "$0";
cap = 200;
efficiency = 1;

interval = 100;

function addMoney(amount) {
  balance += amount;
  if (balance >= cap) {
    balance = cap; // prevents the user from getting more than the max by cheating
  }
}

function getNewCard(amount) {
  if (balance >= 200) {
    cap += 200 * amount;
    balance -= 200;
    update;
  } else {
    alert('You Don\'t Have Enogh Money!');
  }
}

function update() {
  balancedisplay = "$" + balance;
  money.innerHTML = balancedisplay;
  max.innerHTML = "$" + cap;
}

setInterval(update, interval); // automation later
