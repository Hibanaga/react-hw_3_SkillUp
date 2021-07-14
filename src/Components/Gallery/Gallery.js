import React, { useState, useReducer, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import ImageGallery from "./components/ImageGallery";
import pixabayFetch from "./services/pixabayAPI";
import "./gallery.scss";
import axios from "axios";
import PaginationComponent from "./components/Pagination";
import Button from "@material-ui/core/Button";

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
  const [querySearch, setQuerySearch] = useState("");
  const [pagesCount, setPagesCount] = useState(0);
  const [isUniqPage, setUniqPage] = useState(true);

  let submitFormSearchHandler = (query) => {
    if (query !== querySearch && query !== "") {
      setQuerySearch(query);
      setPageNum(1);
      setUniqPage(true);
    }
  };

  useEffect(() => {
    if (querySearch && isUniqPage) {
      let CancelToken = axios.CancelToken;
      let source = CancelToken.source();

      setLoading(true);
      pixabayFetch(querySearch, pageNum, { cancelToken: source.token })
        .then((data) => {
          setPagesCount(data.totalHits);
          dispatch({ type: "searchImages", payload: { images: data.hits } });
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }

    if (pageNum > 1 && !isUniqPage) {
      let CancelToken = axios.CancelToken;
      let source = CancelToken.source();

      setLoading(true);
      pixabayFetch(querySearch, pageNum, { cancelToken: source.token })
        .then((data) => {
          dispatch({
            type: "loadMoreImages",
            payload: { moreImages: data.hits },
          });
        })
        .catch((error) => console.log(error))
        .finally(() => setLoading(false));
    }
  }, [querySearch, pageNum, isUniqPage]);

  const handleLoadMore = () => {
    setPageNum(pageNum + 1);
    setUniqPage(false);
  };

  const changePageHandler = (event) => {
    setPageNum(Number(event.target.textContent));
    setUniqPage(true);
  };

  let timeOut1 = setTimeout(() => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  }, 500);

  useEffect(() => {
    return () => {
      clearTimeout(timeOut1);
    };
  }, [images, timeOut1]);

  return (
    <div>
      <SearchBar onSubmitQuery={submitFormSearchHandler} />

      {querySearch !== "" && images.length === 0 && (
        <h2 className="subtitleNotQuerySearch">
          Sorry, but there is no answer for this request. Try to change your
          request
        </h2>
      )}

      {images.length > 0 && (
        <>
          <ImageGallery images={images.flat()} isLoading={isLoading} />

          <div className="wrapperBtnsLoadMore">
            <Button
              variant="contained"
              color="primary"
              className="js-btn-loadMore"
              onClick={handleLoadMore}
            >
              load more
            </Button>

            <PaginationComponent
              pagesCount={pagesCount}
              pageNum={pageNum}
              onChangePageHandler={changePageHandler}
            />
          </div>
        </>
      )}
    </div>
  );
}
