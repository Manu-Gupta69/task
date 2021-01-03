import Header from "./components/Header";
import "./App.css";
import Infoblocks from "./components/Infoblocks";
import Details from "./components/Details";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { setdata } from "./store/action/data";
import { Router, Route } from "react-router-dom";
import history from './history';

function App() {
  const token = "tTU3gFVUdP";

  const counters = useSelector((state) => state.data.counter);

  const dispatch = useDispatch();

  useEffect(() => {
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
        dispatch(setdata(res.data));
      });
  }, [dispatch]);

  return (
    <div className="app">
      <Router history={history}>
      <Header />
      <div className="app__blocks">
            <Infoblocks name={"DEL"} isdefault total={counters.delcounter} ID={"DEL"} />
            <Infoblocks name={"INT"} total={counters.intcounter} ID={"INT"} />
            <Infoblocks name={"OOD"} total={counters.oodcounter} ID={"OOD"} />
            <Infoblocks name={"UND"} total={counters.undcounter} ID={"UND"} />
            <Infoblocks name={"NFI"} total={counters.nficounter} ID={"NFI"} />
          </div>
        <Route path="/" exact>
          <Details />
        </Route>
        <Route path='/devline/:id'>
        <Details />
        </Route>
      </Router>
      
    </div>
  );
}

export default App;
