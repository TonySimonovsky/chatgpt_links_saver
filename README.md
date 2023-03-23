# ChatGPT URL Saver Chrome Extension

The ChatGPT URL Saver is a Google Chrome extension that allows you to save the URLs of your ChatGPT chats to the extension's local storage. This really helps during the ChatGPT outages when the left menu with your chats is not available.
The extensions saves the title of each chat, and updates the title if it changes. You can view the list of saved URLs by clicking on the extension icon in the Chrome toolbar.

## Installation

To install the ChatGPT URL Saver Chrome Extension:

1. Clone or download the repository to your local machine.
2. Open Google Chrome and navigate to the Extensions page (chrome://extensions).
3. Enable developer mode by toggling the switch in the top right corner.
4. Click the "Load unpacked" button in the top left corner.
5. Select the directory where you cloned or downloaded the repository.
6. The ChatGPT URL Saver Chrome Extension should now be installed and ready to use.
7. Click on the extensions icon (puzzle piece) and pin "ChatGPT URL Saver".

## Usage

To use the ChatGPT URL Saver Chrome Extension:

1. Navigate to a ChatGPT chat URL (e.g., https://chat.openai.com/chat/7a60e35b-aebb-47c7-b6f3-aa49e99e23b1).
2. The URL and title of the chat should be automatically saved to the extension's local storage.
3. To view the list of saved URLs, click on the extension icon in the Chrome toolbar.

## Development

To modify or contribute to the ChatGPT URL Saver Chrome Extension:

1. Clone or fork the repository to your local machine.
2. Install the necessary dependencies by running `npm install`.
3. Modify the code in the `background.js`, `popup.html`, and `popup.js` files as desired.
4. Build the extension by running `npm run build`.
5. Load the unpacked extension in Chrome as described in the Installation section above.
6. Test your changes by navigating to a ChatGPT chat URL and verifying that the URL and title are saved and displayed correctly.

## License

The ChatGPT URL Saver Chrome Extension is open source software released under the MIT license.
