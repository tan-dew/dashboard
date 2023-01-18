const COLUMNS_IN_DISPLAY_ORDER = [
  "Order",
  "Inspection Lot",
  "Material",
  "Material Description",
  "Date Result entry",
  "Time result entry",
  "Insp Point Identification",
  "Work center",
  "Operation Description",
  "Short Text Insp Char",
  "Char Valuation",
  "Code Catalog",
  "Code Description",
];

function printData(records) {
  const listing = document.querySelector(".listing");

  records.forEach((record, index) => {
    const row = document.createElement("div");
    row.classList.add("row");

    const cell = document.createElement("div");
    cell.classList.add("col");
    cell.textContent = index + 1;
    row.appendChild(cell);

    COLUMNS_IN_DISPLAY_ORDER.forEach(key => {
      const val = record[key];

      const cell = document.createElement("div");
      cell.classList.add("col");
      cell.textContent = val;

      row.appendChild(cell);
    });

    listing.appendChild(row);
  });
}

(function run() {
  fetch("../../data/manufacturing_data.json")
      .then(data => data.json())
      .then(data => printData(data));
})();