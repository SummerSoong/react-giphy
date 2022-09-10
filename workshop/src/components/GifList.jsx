import React from 'react';
import Gif from "./Gif";

const GifList = (props) => {
  const { gifIds, setSelectedId } = props;
  return (
    <div className="gif-list">
      {/* jsx{ javascript <jsx {javascript}>} */}
      { gifIds?.map(
        (gifId) => <Gif gifId={gifId} setSelectedId={setSelectedId} key={gifId} />
      )}
    </div>
  );
};

export default GifList;
