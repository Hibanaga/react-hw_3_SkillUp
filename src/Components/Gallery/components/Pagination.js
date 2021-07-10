import React from "react";
import { Pagination } from "@material-ui/lab";

export default function PaginationComponent({
  pagesCount,
  pageNum,
  onChangePageHandler,
}) {
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
