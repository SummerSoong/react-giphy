// rsc -> react functional component
import React, { useState } from 'react';
import Gif from "./Gif";
import GifList from "./GifList";
import SearchBar from './SearchBar';

const App = () => {
  const gifIds = ["gG6OcTSRWaSis", "13HgwGsXF0aiGY", "13UZisxBxkjPwI"];
  // const selectedId = "13UZisxBxkjPwI";
  const [selectedId, setSelectedId] = useState("13UZisxBxkjPwI")
  const [gifIds, setGifIds] = useState(["gG6OcTSRWaSis", "13HgwGsXF0aiGY", "13UZisxBxkjPwI"])
  return (
    <div>
      <div className='left-scene'>
        <SearchBar />
        <div className="selected-gif">
          <Gif gifId = {} />
        </div>
      </div>
      <div className="right-scene">
        <GifList />
      </div>
    </div>
  );
};

export default App;
