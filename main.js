money = document.getElementById('money');
money.innerHTML = 0;
max = document.getElementById('max');
max.innerHTML = "Max money: $200";
autoprinter = document.getElementById('autoprinter');
automoney = document.getElementById('automoney');
megaautoprinter = document.getElementById('megaautoprinter');
efficiencydisplay = document.getElementById('efficiency');

balance = 0;
balancedisplay = "$0";
cap = 200;
efficiency = 1;
autoprintercount = 0;
megaautoprintercount = 0;
passiverev = 0;

interval = 100;
autointerval = 1000;

function addMoney(amount) {
  balance += amount;
  if (balance >= cap) {
    balance = cap; // prevents the user from getting more than the max by cheating
  }
}

function getNewCard(amount) {
  if (balance >= 200 * amount) {
    balance -= 200 * amount;
    cap += 200 * amount;
  } else {
    return;
  }
}

function getAutoprinter(amount) {
  if (balance >= 400 * amount) {
    balance -= 400 * amount;
    autoprintercount++;
  } else {
    return;
  }
}

function getMegaAutoprinter(amount) {
  if (balance >= 800 * amount) {
    balance -= 800 * amount;
    megaautoprintercount++;
    megaautoprinter.innerHTML = megaautoprintercount;
  } else {
    return;
  }
}

function autoAddMoney() {
  balance += autoprintercount + (megaautoprintercount * 5);
}

function update() {
  if (balance > cap) {
    balance = cap;
  }
  balancedisplay = "$" + balance;
  money.innerHTML = balancedisplay;
  max.innerHTML = "$" + cap;
  autoprinter.innerHTML = autoprintercount;
  megaautoprinter.innerHTML = megaautoprintercount;
  passiverev = autoprintercount + (megaautoprintercount * 5);
  automoney.innerHTML = passiverev + "/s";
  efficiencydisplay.innerHTML = "+" + efficiency + " per click";
}


setInterval(update, interval); // automation later
setInterval(autoAddMoney, autointerval);
