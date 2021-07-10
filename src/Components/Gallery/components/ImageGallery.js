import React from "react";
import { PushSpinner } from "react-spinners-kit";
import ItemGallery from "./ItemGallery";

export default function ImageGallery({ isLoading, images }) {
  console.log(images);

  return (
    <div>
      {isLoading && (
        <div className="wrapperLoader">
          <PushSpinner size={100} color="red" />
        </div>
      )}

      <ul className="ImageGallery">
        {images.map(({ id, previewURL, tags }) => (
          <ItemGallery key={id} previewURL={previewURL} tags={tags} />
        ))}
      </ul>
    </div>
  );
}
