import React from "react";
import { Pagination } from "@material-ui/lab";
import PropTypes from "prop-types";

function PaginationComponent({ pagesCount, pageNum, onChangePageHandler }) {
  return (
    <div>
      <Pagination
        count={Math.ceil(pagesCount / 12)}
        page={pageNum}
        hideNextButton={true}
        hidePrevButton={true}
        onChange={onChangePageHandler}
        variant="outlined"
        shape="rounded"
      />
    </div>
  );
}

PaginationComponent.propTypes = {
  pagesCount: PropTypes.number.isRequired,
  pageNum: PropTypes.number.isRequired,
  onChangePageHandler: PropTypes.func.isRequired,
};

export default PaginationComponent;
