import React from "react";
import PropTypes from "prop-types";

export function Book(props) {
  return (
    <div
      style={{
        backgroundColor: "yellow",
        padding: "10px",
        marginBottom: "4px",
      }}
    >
      <ul>
      <h2>{props.title}</h2>
      <p>{props.book.volumeInfo.description}</p>
      <img src={props.book.volumeInfo.imageLinks.smallThumbnail}/>
      </ul>
      <button onClick={() => props.handleClick(props.id)}>Click to add book</button>
      {props.retailPrice && props.retailPrice.amount < 3
        ? "Great deal"
        : "Best Seller"}
    </div>
  );
}

Book.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string.isRequired,
  retailPrice: PropTypes.shape({
    amount: PropTypes.number,
  }),
  handleClick: PropTypes.func,
  book: PropTypes.shape({
    volumeInfo: PropTypes.shape({
      title: PropTypes.string.isRequired,
      authors: PropTypes.array.isRequired,
      description: PropTypes.string.isRequired,
    }),
    saleInfo: PropTypes.shape({
      retailPrice: PropTypes.shape({
        amount: PropTypes.number.isRequired,
      }),
    }),
  }),
};