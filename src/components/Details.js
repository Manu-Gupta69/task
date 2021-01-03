import React from "react";
import "./Details.css";
import Tab from "./Tab";
import Righttab from "./Righttab";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function Details() {
  const [status, setstatus] = useState({});

  const { id } = useParams();
  console.log(id);

  const detailsdata = useSelector((state) => state.details.detailsdata);

  useEffect(() => {
    const newdata = [...detailsdata];
    const index = newdata.findIndex((data) => {
      return data._id === id;
    });
    const selectedstatus = newdata[index];
    setstatus(selectedstatus);
  }, [id]);

  console.log(status);
  if(status){
    status?.scan?.sort(function(a,b){
      console.log(new Date(a.time))
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
     return new Date(a.date) > new Date(b.date) ? -1: 1
    });

  }
  

  return (
    <div className="details">
      <div className="details__left">
        {status?.scan?.map((entry) => {
          return <Tab statusdetail={entry.status_detail} time={entry.time} />;
        })}
      </div>
      <div className="details__right">
        <div className="headings">
          <h3>AWB NUMBER</h3>
          <h3>TRANSPORTER</h3>
          <h3>SOURCE</h3>
          <h3>DESTINATION </h3>
          <h3 className="brand">BRAND</h3>
          <h3 className="startdate">START DATE</h3>
          <h3 className="etd">ETD</h3>
          <h3>STATUS</h3>
        </div>
        {detailsdata
          ? detailsdata.map((data) => {
              return (
                <Link to={`/devline/${data._id}`}>
                  <Righttab
                    key={data._id}
                    id={data._id}
                    awb={data.awbno}
                    transporter={data.carrier}
                    source={data.from}
                    destination={data.to}
                    brand={data.carrier}
                    etd={
                      data.current_status_code === "NFI"
                        ? "NULL"
                        : data.extra_fields.expected_delivery_date
                    }
                    startdate={data.pickup_date}
                    status={data.current_status}
                  />
                </Link>
              );
            })
          : null}
      </div>
    </div>
  );
}

export default Details;
