
import employees from "./employees.js";
import { renderElement } from "./domutilities.js";

// creating table
const table = document.createElement("table");

// creating thead
const thead = document.createElement("thead");
const tr = document.createElement("tr");
const headers = ["our vacancies", "position", "salary"];

headers.forEach((header) => {
  renderElement("th", header, tr);
});
thead.appendChild(tr);
table.appendChild(thead);

// creating tbody
const tbody = document.createElement("tbody");

employees.forEach((employeesObject) => {
  const tr = document.createElement("tr");
  renderElement("td", employeesObject.name, tr);
  renderElement("td", employeesObject.position, tr);
  renderElement("td", employeesObject.salary, tr);
  tbody.appendChild(tr);
});
table.appendChild(tbody);

// creating tfoot
const tfoot = document.createElement("tfoot");

const tfootRow = document.createElement("tr");
renderElement("th", "total employees", tfootRow);
renderElement("th", employees.length, tfootRow, "text-right");
renderElement("th", " ", tfootRow, "text-right");

tfoot.appendChild(tfootRow);
table.appendChild(tfoot);

document.getElementById("table").appendChild(table);


