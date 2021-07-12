import React from "react";
import { PushSpinner } from "react-spinners-kit";
import ItemGallery from "./ItemGallery";
import PropTypes from "prop-types";

function ImageGallery({ isLoading, images }) {
  return (
    <div>
      {isLoading && (
        <div className="wrapperLoader">
          <PushSpinner size={100} color="rgb(16, 211, 9)" />
        </div>
      )}

      <ul className="ImageGallery">
        {images.map(
          ({
            id,
            webformatURL,
            tags,
            likes,
            largeImageURL,
            views,
            downloads,
            comments,
          }) => (
            <ItemGallery
              key={id}
              id={id}
              previewURL={webformatURL}
              tags={tags}
              likes={likes}
              largeImageURL={largeImageURL}
              views={views}
              downloads={downloads}
              comments={comments}
            />
          )
        )}
      </ul>
    </div>
  );
}

ImageGallery.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  images: PropTypes.array,
};

export default ImageGallery;
