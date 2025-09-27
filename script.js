function addRow() {
  const table = document.getElementById('ogpaTable').getElementsByTagName('tbody')[0];
  const newRow = table.insertRow();
  newRow.innerHTML = `
    <td><input type="text" placeholder="Subject Name"></td>
    <td><input type="number" placeholder="Theory" min="0"></td>
    <td><input type="number" placeholder="Practical" min="0"></td>
    <td><input type="number" placeholder="Grade Point" min="0" max="10"></td>
    <td><button class="btn btn-remove" onclick="removeRow(this)">X</button></td>
  `;
}

function removeRow(button) {
  const row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}

function calculateOGPA() {
  const rows = document.querySelectorAll('#ogpaTable tbody tr');
  let totalCredits = 0;
  let totalPoints = 0;

  rows.forEach(row => {
    const theory = parseFloat(row.cells[1].querySelector('input').value) || 0;
    const practical = parseFloat(row.cells[2].querySelector('input').value) || 0;
    const gradePoint = parseFloat(row.cells[3].querySelector('input').value) || 0;

    const credits = theory + practical; // total credits = theory + practical
    totalCredits += credits;
    totalPoints += credits * gradePoint;
  });

  if (totalCredits === 0) {
    document.getElementById('result').innerText = 'Please enter valid hours.';
    return;
  }

  const ogpa = (totalPoints / totalCredits).toFixed(2);
  document.getElementById('result').innerText = 'Your OGPA (out of 10) is: ' + ogpa;
}