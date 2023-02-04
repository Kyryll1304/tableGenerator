document.addEventListener("DOMContentLoaded", function (e) {
  class Table {
    constructor(tableSelector, rowsSelector, columnsSelector) {
      this.rowsSelector = rowsSelector;
      this.columnsSelector = columnsSelector;
      this.tableObj = document.querySelector(tableSelector);
    }

    generate = () => {
      let tableHTML = "";
      const rowsNumber = 10;
      const columnsNumber = 10;

      for (let i = 1; i <= rowsNumber; i++) {
        let tr = "<tr>";
        let td = "";

        for (let j = 1; j <= columnsNumber; j++) {
          const cellContent = i * j;

          if (i === 1 || j === 1) {
            td = `<th class="header">${cellContent}</th>`;
          } else {
            td = `<td>${cellContent}</td>`;
          }

          tr += td;
        }

        tr += "</tr>";
        tableHTML += tr;
      }

      this.tableObj.innerHTML = tableHTML;
    };

    hidePlaceholder() {
      document.querySelector(".table-placeholder").classList.add("hidden");
    }
  }

  const table = new Table(".table", ".rows", ".columns");

  document.querySelector(".button").addEventListener("click", () => {
    table.generate();
    table.hidePlaceholder();
  });
});
