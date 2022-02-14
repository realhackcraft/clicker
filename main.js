money = document.getElementById('money');
money.innerHTML = 0;
max = document.getElementById('max');
max.innerHTML = "Max money: $200";
mass = document.getElementById('mass');
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
cardcost = 200;
autoprintercost = 400;
megaautoprintercost = 800;

function addMoney(amount) {
  balance += amount;
}

function getNewCard(amount) {
  if (balance >= cardcost * amount) {
    balance -= cardcost * amount;
    cardcost = Math.round(cardcost * 1.15);
    document.getElementById('cardcost').innerHTML = "cost: $" + cardcost;
    cap += 200 * amount;
  }
}

function getAutoprinter(amount) {
  if (balance >= autoprintercost * amount) {
    balance -= autoprintercost * amount;
    autoprintercost = Math.round(autoprintercost * 1.15);
    document.getElementById('autoprintercost').innerHTML = "cost: $" + autoprintercost;
    autoprintercount++;
  }
}

function getMegaAutoprinter(amount) {
  if (balance >= megaautoprintercost * amount) {
    balance -= megaautoprintercost * amount;
    megaautoprintercost = Math.round(megaautoprintercost * 1.15);
    document.getElementById('megaautoprintercost').innerHTML = "cost: $" + megaautoprintercost;
    megaautoprintercount++;
  }
}

function getMassPurchase() {
  if (balance >= 100000000000) {
    balance -= 100000000000;
    mass.innerHTML = "Mass Purchase";
    mass.onclick = massPurchase();
  }
}

function massPurchase() {
  prompt("What Do You Want To Buy?")
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
