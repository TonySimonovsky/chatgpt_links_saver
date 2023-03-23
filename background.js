chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
  if (changeInfo.url && tab.active && tab.url.match(/^https?:\/\/chat\.openai\.com\/chat\/[a-f0-9\-]+$/)) {
    const urls = await new Promise(resolve => chrome.storage.local.get('urls', ({ urls }) => resolve(urls || [])));
    const url = tab.url;
    const title = tab.title;
    const existingUrlIndex = urls.findIndex(u => u.url === url);
    if (existingUrlIndex >= 0) {
      urls[existingUrlIndex].title = title;
    } else {
      urls.push({ url, title });
    }
    chrome.storage.local.set({ urls });
  }
});

chrome.action.onClicked.addListener(() => {
  chrome.storage.local.get('urls', ({ urls }) => {
    const tableBody = document.querySelector('#urls tbody');
    tableBody.innerHTML = '';
    urls.forEach(({ url, title }) => {
      const row = document.createElement('tr');
      const urlCell = document.createElement('td');
      urlCell.textContent = url;
      row.appendChild(urlCell);
      const titleCell = document.createElement('td');
      titleCell.textContent = title;
      row.appendChild(titleCell);
      tableBody.appendChild(row);
    });
  });
});
