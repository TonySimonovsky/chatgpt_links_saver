/*
Summary: This code retrieves a list of URLs and their titles from the local storage of a Chrome extension,
and then populates a table with these URLs and titles. If there are no URLs stored,
it displays a message saying that there are no URLs saved.
*/





// Get the 'urls' object from the local storage of the extension
chrome.storage.local.get('urls', ({ urls }) => {
  // Find the table body element
  const tableBody = document.querySelector('#urls tbody');
  // If there are any URLs in storage
  if (urls) {
    // Iterate over each URL and title object
    urls.forEach(({ url, title }, index) => {
      // Create a new row in the table
      const row = document.createElement('tr');
      // Create a cell for the title
      const titleCell = document.createElement('td');
      titleCell.textContent = title;
      row.appendChild(titleCell);
      // Create a cell for the URL
      const urlCell = document.createElement('td');
      urlCell.style.width = '50%'; // set the width of the URL cell to 50%

      const urlLink = document.createElement('a');
      urlLink.href = url;
      urlLink.textContent = url;
      // Add an event listener to the link element to handle the click action
      urlLink.addEventListener('click', (event) => {
        event.preventDefault();
        chrome.tabs.update({ url });
      });
      urlCell.appendChild(urlLink);
      row.appendChild(urlCell);

      // Create a button to remove the row
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Remove';
      removeButton.addEventListener('click', () => {
        // Remove the row from the table
        tableBody.removeChild(row);
        // Remove the URL from local storage
        urls.splice(index, 1);
        chrome.storage.local.set({ urls });
      });
      // Add the remove button to the row
      const buttonCell = document.createElement('td');
      buttonCell.appendChild(removeButton);
      row.appendChild(buttonCell);
      // Add the row to the table
      tableBody.appendChild(row);
    });
  } else {
    // If there are no URLs in storage, display a message in the table
    const row = document.createElement('tr');
    const cell = document.createElement('td');
    cell.textContent = 'No URLs saved';
    row.appendChild(cell);
    tableBody.appendChild(row);
  }
});

