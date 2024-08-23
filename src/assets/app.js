const table = document.getElementById('myTable');
const rows = table.getElementsByTagName('tr');
for (let i = 0; i < rows.length; i++) {
  const row = rows[i];
  row.addEventListener('click', function() {
    console.log('Clicked row:', i);
  });
}
