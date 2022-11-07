import { Component } from "react";
import "./search-box.styles.css";

export class SearchBox extends Component {
  render() {
    const { className, placeholder, onSearchChangeHandler } = this.props;

    return (
      <input 
        className={`search-box ${className}`}
        type='search'
        placeholder={placeholder}
        onChange={onSearchChangeHandler}
      />
    );
  }
}
