import React from "react";

export default function ItemGallery({ id, previewURL, tags }) {
  return (
    <li key={id} className="itemGallery">
      <img src={previewURL} alt={tags} />
    </li>
  );
}
