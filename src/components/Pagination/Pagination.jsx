import React, { useEffect, useState } from "react";
import "../Pagination/Pagination.css";
const Pagination = ({ count, page, handleChange }) => {
  // console.log(count);

  return (
    <div>
      <div className="center">
        <div className="pagination">
          <span>&laquo;</span>
          {count.map((item) => (
            <span
              href="#"
              key={item}
              className={page === item ? "active" : ""}
              onClick={() => handleChange(item)}
            >
              {item}
            </span>
          ))}
          <span href="#">&raquo;</span>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
