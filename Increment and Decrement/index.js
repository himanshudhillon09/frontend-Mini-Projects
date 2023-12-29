const count = document.querySelector(".count");

const  decrement = () => {
  let value = parseInt(count.innerText);
  value -= 1;
  count.innerText = value;
}

const increment = () => {
  let value = parseInt(count.innerText);
  value += 1;
  count.innerText = value;
}
