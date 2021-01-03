import { Button } from "@material-ui/core";
import React from "react";
import "./Infoblock.css";
import { useSelector, useDispatch } from "react-redux";
import { setdetails } from "../store/action/data";
import axios from "axios";

function Infoblocks(props) {
  const dispatch = useDispatch();
  const token = "tTU3gFVUdP";

  const handledispatch = () => {
    axios
      .post(
        "https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch",
        {
          email: "manu@gmail.com",
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        dispatch(setdetails(res.data, props.ID));
      });
  };

  if(props.isdefault){
    axios
    .post(
      "https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch",
      {
        email: "manu@gmail.com",
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      dispatch(setdetails(res.data, props.ID));
    });
  }

  return (
    <div>
      <Button onClick={handledispatch}>
        <div className="block">
          <span>{props.name}</span>
          <h1>{props.total ? props.total : null}</h1>
        </div>
      </Button>
    </div>
  );
}

export default Infoblocks;
