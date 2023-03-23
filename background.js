/*
This code is a background script for a Chrome extension that monitors URL changes in active tabs.
If the URL matches a specific pattern, the script retrieves the URL and title from the tab
and saves it to the extension's local storage. If the URL already exists in the storage,
the script updates the title with the new one.
*/


function saveLink(links_in_storage) {
    setTimeout(() => {
        const title = document.title;
        const url = window.location.href;

        // const ppp = ""
        // links_in_storage.forEach(url => {
        //     alert(url.title+", "+url.url);
        // });

        const existingUrlIndex = links_in_storage.findIndex(u => u.url === url);

        if (existingUrlIndex >= 0) {
            links_in_storage[existingUrlIndex].title = title;
        } else {
            links_in_storage.push({ url, title });
        }

        urls = links_in_storage;
        //alert(title+"..."+url); const urls = []; urls.push({ title, url });

        chrome.storage.local.set({ urls });

        return document.title
    }, 3000);
}


chrome.tabs.onUpdated.addListener(async (tabId, changeInfo, tab) => {
    if (changeInfo.url && tab.active && tab.url.match(/^https?:\/\/chat\.openai\.com\/chat\/[a-f0-9\-]+$/)) {
        const urls = await new Promise(resolve => chrome.storage.local.get('urls', ({ urls }) => resolve(urls || [])));

        chrome.scripting.executeScript({target:{tabId:tabId}, args:[urls], func:saveLink});

    }
});

