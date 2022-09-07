import React from 'react';
import Gif from "./Gif";

const GifList = () => {
  const gifIds = ["gG6OcTSRWaSis", "13HgwGsXF0aiGY", "13UZisxBxkjPwI"];
  return (
    <div className="gif-list">
      { gifIds.map((gifId) => <Gif gifId={gifId} />) }
    </div>
  );
};

export default GifList;
