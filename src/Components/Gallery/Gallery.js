import React, { useState, useReducer, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
// import pixabayFetch from "./services/pixabayAPI";
import "./gallery.scss";

//request to API
import axios from "axios";

const API_KEY = `22420681-313330a10c6fb67bf32b92a1a`;

const imagesReducer = (state, action) => {
  switch (action.type) {
    case "searchImages":
      return action.payload.images;
    case "loadMoreImages":
      return [...state, action.payload.moreImages];
    default:
      return state;
  }
};

export default function Gallery() {
  const [pageNum, setPageNum] = useState(1);
  const [isLoading, setLoading] = useState(false);
  const [images, dispatch] = useReducer(imagesReducer, []);

  let submitQueryHnadler = (query) => {
    setLoading(true);
    axios(
      `https://pixabay.com/api/?q=${query}&page=${pageNum}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    )
      .then((data) =>
        dispatch({ type: "searchImages", payload: { images: data.data.hits } })
      )
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  };

  const handleLoadMore = () => {
    setPageNum(pageNum + 1);
  };

  return (
    <div>
      <SearchBar onSubmitQuery={submitQueryHnadler} />
      <ImageGallery
        images={images}
        isLoading={isLoading}
        onHandleLoadMore={handleLoadMore}
      />
    </div>
  );
}
