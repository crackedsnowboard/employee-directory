import React from "react";
import "./style.css";

function Table(props) {
    return (
        <tbody>
            <tr>
                <td>{props.name}</td>
                <td>{props.position}</td>
                <td>{props.nationality}</td>
                <td>{props.dob}</td>
                <td>{props.market}</td>
                <td>{props.jersey}</td>
            </tr>
        </tbody>
    );
}

export default Table;
