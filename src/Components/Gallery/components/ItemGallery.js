import React, { useState } from "react";
import "react-responsive-modal/styles.css";
import { Modal } from "react-responsive-modal";
import PropTypes from "prop-types";

function ItemGallery({
  id,
  previewURL,
  tags,
  likes,
  largeImageURL,
  views,
  downloads,
  comments,
}) {
  const [isModal, setToggleModal] = useState(false);

  let hideModalHandler = () => {
    setToggleModal(false);
  };

  let showModalHandler = () => {
    setToggleModal(true);
  };

  return (
    <>
      <Modal open={isModal} onClose={hideModalHandler}>
        <div className="modalWrapper">
          <img src={largeImageURL} alt={tags} className="largeImgModal" />
          <div className="statsInfo">
            <h2 className="titleCountInfo">Count Stats info</h2>

            <div className="descriptionIcons">
              <span className="iconView">
                <span className="strongTextInfo">likes:</span>
                {likes}
              </span>

              <span className="iconView">
                <span className="strongTextInfo">views:</span>
                {views}
              </span>

              <span className="iconView">
                <span className="strongTextInfo">downloads:</span>
                {downloads}
              </span>

              <span className="iconView">
                <span className="strongTextInfo">comments:</span>
                {comments}
              </span>
            </div>
          </div>
        </div>
      </Modal>

      <li key={id} className="itemGallery" onClick={showModalHandler}>
        <img src={previewURL} alt={tags} className="imgGallery" />
      </li>
    </>
  );
}

ItemGallery.propTypes = {
  id: PropTypes.number.isRequired,
  previewURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  views: PropTypes.number.isRequired,
  downloads: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
};

export default ItemGallery;
