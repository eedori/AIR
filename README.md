# Adri's IMDB Redirect (AIR)

Adri's IMDB Redirect (AIR) is a Chrome extension that allows users to redirect IMDB movie pages to a custom URL. This tool is particularly useful for integrating IMDB movie IDs into external systems or websites.

## Features

- Set a custom redirect URL with a placeholder `{id}` for the IMDB movie ID.
- Automatically inject a redirect button on IMDB movie pages.
- Redirect to the custom URL by clicking the button.

## Installation

### Release Version
#### Firefox

1. Download the release version from the right handside.
2. Open Firefox and navigate to `about:addons`.
3. Click the cogwheel and select  `Install Add-on from file`

#### Chrome

idk. havent looked :P

### Unsigned / Manual 
#### Chrome

1. Clone or download this repository to your local machine.
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** in the top-right corner.
4. Click **Load unpacked** and select the folder containing this project.

#### Firefox

1. Clone or download this repository to your local machine.
2. Open Firefox and navigate to `about:debugging#/runtime/this-firefox`.
3. Select **Load Temporary Add-on**
4. Click **manifest.json** 

## Usage

1. Click the extension icon in the toolbar to open the popup.
2. Enter your custom URL in the input field. Use `{id}` as a placeholder for the IMDB movie ID (e.g., `https://example.com/film/{id}`).
3. Click **Save** to store the redirect URL.
4. Visit any IMDB movie page (e.g., `https://www.imdb.com/title/tt1234567/`).
5. A green redirect button will appear in the top-left corner of the page.
6. Click the button to open the custom URL with the IMDB movie ID replaced.

## For devs and customisers...

### File Structure

- **`manifest.json`**: Defines the extension's metadata, permissions, and behavior.
- **`popup.html`**: The HTML for the extension's popup interface.
- **`popup.js`**: Handles saving and retrieving the custom redirect URL.
- **`content.js`**: Injects the redirect button into IMDB pages and handles the redirection logic.
- **`icons/`**: Contains the extension's icons.

### Development

#### Prerequisites

- Google Chrome
- Basic knowledge of JavaScript and Chrome Extensions

#### Modifying the Code

1. Edit the files as needed in your favorite code editor (e.g., Visual Studio Code).
2. Reload the extension in Chrome by navigating to `chrome://extensions/` and clicking the **Reload** button for this extension.

### License

This project is licensed under the MIT License. See the LICENSE file for details.

### Acknowledgments

- Inspired by the need to simplify navigation from IMDB to external systems.
- Uses Chrome's `storage` and `content_scripts` APIs for seamless integration.

Enjoy using Adri's IMDB Redirect!