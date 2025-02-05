# Crypto

## Overview
Crypto is a React application that allows users to view real-time cryptocurrency prices. It fetches data from the CoinStats API and displays a list of cryptocurrencies with their respective names, symbols, icons, and prices. Users can search for specific cryptocurrencies using the search bar.

## Features
- Fetches real-time cryptocurrency data from CoinStats API.
- Displays a list of cryptocurrencies with their name, symbol, price, and icon.
- Provides a search bar to filter cryptocurrencies by name.
- Uses modern UI components with Tailwind CSS for styling.

## Technologies Used
- React.js
- Axios (for API requests)
- Tailwind CSS (for styling)

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/MohammedAzzami/crypto.git
   ```
2. Navigate into the project directory:
   ```bash
   cd crypto
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
1. Start the development server:
   ```bash
   npm start
   ```
2. Open [http://localhost:3000](http://localhost:3000) in your browser.
3. Use the search bar to filter cryptocurrencies by name.

## API Key
This project uses CoinStats API. Make sure you have a valid API key set in the request headers:
```javascript
Axios.get("https://openapiv1.coinstats.app/coins?limit=48", {
  headers: {
    "X-API-KEY": "YOUR_API_KEY_HERE"
  }
})
```
Replace `YOUR_API_KEY_HERE` with your actual API key.

## License
This project is open-source and available under the MIT License.

##Live Page
[Click Here](https://cryptocurrency.alazami.net/)

## Author
[**Mohammed Alazami**](https://github.com/MohammedAzzami)

