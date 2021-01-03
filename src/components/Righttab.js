import { Button } from "@material-ui/core";
import React from "react";
import "./Tab.css";


function Righttab(props) {
  return props ? (
      <div className="righttab">
        <h4>{props.awb}</h4>
        <h4>{props.transporter}</h4>
        <h4 className='source'>{props.source}</h4>
        <h4>{props.destination}</h4>
        <h4>{props.brand}</h4>
        <h4>{props.startdate?.split(" " , 1)}</h4>
        {<h4>{props.etd?.split(" " , 1)}</h4>}
        <h4 style={{ color: "green" }}>{props.status}</h4>
      </div>
  ) : null;
}

export default Righttab;
