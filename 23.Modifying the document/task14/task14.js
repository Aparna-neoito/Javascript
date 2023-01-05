let sortedRows = Array.from(table.tBodies[0].rows)
    .sort((rowA, rowB) => rowA.cells[0].innerHTML.localeCompare(rowB.cells[0].innerHTML));
    console.log(sortedRows)

  table.tBodies[0].append(...sortedRows);

  console.log(table.tBodies[0].rows);