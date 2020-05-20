const inputTitle = document.getElementById("title");
const inputAuthor = document.getElementById("author");
const inputYear = document.getElementById("year");
const inputGenre = document.getElementById("genre");
const inputRead = document.getElementById("read");
let emptyCell = false;

function addHtmlTableRow() {
  alertEmptyCell();
  if (emptyCell === false) {
    const newRow = table.insertRow(table.length);
    const cell1 = newRow.insertCell(0);
    const cell2 = newRow.insertCell(1);
    const cell3 = newRow.insertCell(2);
    const cell4 = newRow.insertCell(3);
    const cell5 = newRow.insertCell(4);
    cell1.innerHTML = inputTitle.value;
    cell2.innerHTML = inputAuthor.value;
    cell3.innerHTML = inputYear.value;
    cell4.innerHTML = inputGenre.value;
    inputRead.checked == true
      ? cell5.innerHTML = "Yes"
      : cell5.innerHTML = "No";
    selectedRowToInput();
  }
}

function selectedRowToInput() {
  for (let i = 1; i < table.rows.length; i++) {
    table.rows[i].onclick = function() {
      //important: NOT putting var, let or const makes rIndex global somehow
      rIndex = this.rowIndex;
      inputTitle.value = this.cells[0].innerHTML;
      inputAuthor.value = this.cells[1].innerHTML;
      inputYear.value = this.cells[2].innerHTML;
      inputGenre.value = this.cells[3].innerHTML;
      this.cells[4].innerHTML == "Yes"
        ? inputRead.checked = true
        : inputRead.checked = false;
    }
  }
}
selectedRowToInput();

function editHtmlTableSelectedRow() {
  alertEmptyCell();
  if (emptyCell === false) {
    table.rows[rIndex].cells[0].innerHTML = inputTitle.value;
    table.rows[rIndex].cells[1].innerHTML = inputAuthor.value;
    table.rows[rIndex].cells[2].innerHTML = inputYear.value;
    table.rows[rIndex].cells[3].innerHTML = inputGenre.value;
    inputRead.checked == true
      ? table.rows[rIndex].cells[4].innerHTML = "Yes"
      : table.rows[rIndex].cells[4].innerHTML = "No";
  }
}

function removeSelectedRow() {
  table.deleteRow(rIndex);
  clearTable();
}

function clearTable() {
  inputTitle.value = "";
  inputAuthor.value = "";
  inputYear.value = "";
  inputGenre.value = "";
  inputRead.checked = false;
}

function alertEmptyCell() {
  if (inputTitle.value == "") {
    alert("Title can't be empty");
    emptyCell = true;
  } else if (inputAuthor.value == "") {
    alert("Author can't be empty")
    emptyCell = true;
  } else {
    emptyCell = false;
  }
}

console.log(localStorage);
