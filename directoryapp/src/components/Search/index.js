import React from "react";
import "./style.css";

function Search(props) {
    return <div className="container">
        <div className="md-form active-pink active-pink-2 mb-3 mt-0">
            <input className="form-control" type="text" placeholder="Search" aria-label="Search" onClick={(event) => props.handleFind(event)}></input>
        </div>
    </div>
}

export default Search;