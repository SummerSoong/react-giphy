// rsc -> react functional component
import React, { useState } from 'react';
import Gif from "./Gif";
import GifList from "./GifList";
import SearchBar from './SearchBar';

const giphy = require('giphy-api')({
  apiKey: 'do599u3xdL3KifGItaz7chiapHhzLg5E',
  https: true
});

const App = () => {
  const [selectedId, setSelectedId] = useState("13UZisxBxkjPwI");
  const [gifIds, setGifIds] = useState(["WuGSL4LFUMQU", "HuVCpmfKheI2Q", "u6uAu3yyDNqRq"]);

  const fetchGiphy = (keyword) => {
    // search for 10 gifs in gify
    // call setGifIds with the right gif id array
    giphy.search({
      q: keyword,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      const gifIdArray = res.data.map(gif => gif.id);
      setGifIds(gifIdArray);
    });
  };

  return (
    <div>
      <div className="left-scene">
        <SearchBar fetchGiphy={fetchGiphy} />
        <div className="selected-gif">
          <Gif gifId={selectedId} />
        </div>
      </div>
      <div className="right-scene">
        <GifList gifIds={gifIds} setSelectedId={setSelectedId} />
      </div>
    </div>
  );
};

export default App;
