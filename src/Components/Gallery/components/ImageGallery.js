import React from "react";
import { PushSpinner } from "react-spinners-kit";
import ItemGallery from "./ItemGallery";

export default function ImageGallery({ isLoading, images, onHandleLoadMore }) {
  let handleLoadMore = () => {
    onHandleLoadMore();
  };

  return (
    <div>
      {isLoading && <PushSpinner size={30} color="#686769" />}

      <ul className="ImageGallery">
        {images.map(({ id, previewURL, tags }) => (
          <ItemGallery key={id} previewURL={previewURL} tags={tags} />
        ))}
      </ul>

      {images.length > 0 && (
        <button className="js-btn-loadMore" onClick={handleLoadMore}>
          load more
        </button>
      )}
    </div>
  );
}
