import Heading from "./components/Heading";
import Axios from "axios";
import { useEffect, useState } from "react";
import Coin from "./components/Coin";
import Footer from "./components/Footer";

function App() {
  const [listOfCoins, setlistOfCoins] = useState([]);
  const [searchWord, setsearchWord] = useState("");

  const handleChange = (event) => {
    setsearchWord(event.target.value);
  };

  useEffect(() => {
    Axios.get("https://openapiv1.coinstats.app/coins?limit=48", {
      headers: {
        "X-API-KEY":
          "0SOgN+WzEktmgzeX/qBSFzNvkp6SdCiTIRIh1enMNi0="
      }
    }).then((response) => {
      setlistOfCoins(response.data.result);
    })
  }, []);

  const filteredCoins = listOfCoins.filter((coin) => {
    return coin.name.toLowerCase().includes(searchWord.toLowerCase());
  })


  return (
    <div className="min-h-screen bg-[#ffe4c4] flex flex-col">
      <div className="flex justify-center items-center p-12 bg-darkOrange border-b-2 border-b-lightBrown mb-4">
        <input type="text" placeholder="Bitcoin..." className="p-2 pl-4 rounded-xl font-sans font-semibold w-[25rem] border-2 border-lightGrey" onChange={handleChange} value={searchWord} />
      </div>
      <div className="max-w-[1200px] mx-auto min-h-screen">
        <Heading title="List of Crypto Currencies" className="font-sansita text-brown text-center font-bold md:max-w-md lg:max-w-2xl mb-15" />
        <div className="flex flex-wrap justify-center items-center gap-10">
          { filteredCoins.length > 0 ? (
            filteredCoins.map((coin, index) => (
            <Coin key={index} name={coin.name} icon={coin.icon} symbol={coin.symbol} price={coin.price} />
          ))): (
            <p className="text-2xl text-red text-center">No results found</p>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
