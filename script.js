// text to change
finaltext = "You might not see they but they see you";

const characters =
  "!#$%&'()*+,-./:;<=>?@[]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

iterations = finaltext.length + 20;
function randomstr() {
  n = Math.random();
  n = n * characters.length;
  n = Math.floor(n);
  out = characters[n];
  return out;
}

var text = [];
for (i = 0; i < finaltext.length; i++) {
  t = [];
  text.push(t);
}

for (i = 0; i < finaltext.length; i++) {
  t = text[i];
  for (j = 0; j < iterations - 20 * Math.random(); j++) {
    t.push(randomstr());
  }
  t.push(finaltext[i]);
}

counter = 0;

const elemout = document.getElementById("animationoutput");

for (i = 0; i < finaltext.length; i++) {
  const outputpart = document.createElement("div");
  outputpart.classList.add("letters");
  elemout.appendChild(outputpart);
  outputlist = document.getElementsByClassName("letters");
}

function change() {
  for (i = 0; i < finaltext.length; i++) {
    ft = text[i];
    if (counter < ft.length) {
      outputlist[i].innerHTML = ft[counter];
    } else {
      outputlist[i].innerHTML = ft[ft.length - 1];
    }
  }

  counter++;
}

const inst = setInterval(change, 150); //delay da animação

// this code is from https://codepen.io/beetran/pen/PomJdXO?editors=1000 - take a look there
