chrome.storage.local.get('urls', ({ urls }) => {
  const tableBody = document.querySelector('#urls tbody');
  if (urls) {
    urls.forEach(({ url, title }) => {
      const row = document.createElement('tr');
      const titleCell = document.createElement('td');
      titleCell.textContent = title;
      row.appendChild(titleCell);
      const urlCell = document.createElement('td');
      urlCell.style.width = '50%'; // set the width of the URL cell to 50%
      const urlLink = document.createElement('a');
      urlLink.href = url;
      urlLink.textContent = url;
      urlCell.appendChild(urlLink);
      row.appendChild(urlCell);
      tableBody.appendChild(row);
    });
  } else {
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.textContent = 'No URLs saved';
    row.appendChild(cell);
    tableBody.appendChild(row);
  }
});
