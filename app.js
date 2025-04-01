let entries = JSON.parse(localStorage.getItem("entries")) || [];

function render() {
  const list = document.getElementById("entry-list");
  const total = document.getElementById("total");
  list.innerHTML = "";
  let sum = 0;

  entries.forEach((entry, index) => {
    sum += entry.calories;
    const li = document.createElement("li");
    li.innerHTML = `${entry.item} - ${entry.calories} kcal <button onclick="removeEntry(${index})">✖</button>`;
    list.appendChild(li);
  });

  total.textContent = sum;
  localStorage.setItem("entries", JSON.stringify(entries));
}

function addEntry() {
  const item = document.getElementById("item").value;
  const calories = parseInt(document.getElementById("calories").value);

  if (item && !isNaN(calories)) {
    entries.push({ item, calories });
    document.getElementById("item").value = "";
    document.getElementById("calories").value = "";
    render();
  }
}

function removeEntry(index) {
  entries.splice(index, 1);
  render();
}

render();
