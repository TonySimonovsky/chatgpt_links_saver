chrome.runtime.sendMessage({ type: 'urlChange', url: window.location.href, title: document.title });
