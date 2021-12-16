import { forwardRef } from "react";

const SearchField = forwardRef((props, ref) => {
  return (
    <div className="search-field">
      <label className="search-field__label" htmlFor="search-restaurant">Søk</label>
      <input className="search-field__input" type="search" id="search-restaurant" name="q" ref={ref} aria-label="Søk etter serveringssteder" />
      <button className="search-field__button" onClick={props.onClick}>Søk</button>
    </div>
  )
})

export default SearchField;
