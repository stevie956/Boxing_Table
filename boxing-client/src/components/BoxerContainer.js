import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import { BoxerList } from "./BoxerList";
import { BoxerNew } from "./BoxerNew";
import { BoxerEdit } from "./BoxerEdit";
import { BoxerDelete } from "./DeleteBoxer";

const BoxerContainer = () => {
  const [boxingList, setBoxingList] = useState([]);

  const [boxingEdit, setBoxingEdit] = useState({
    name: "",
    weight_id: Number,
    country: "",
  });

  const [boxingDelete, setBoxingDelete] = useState({
    name: "",
    weight_id: Number,
    country: "",
  });

  const handleBoxingClick = (boxingIndex) => {
    const boxing = boxingList[boxingIndex];
    setBoxingEdit(boxing);
    setBoxingDelete(boxing);
  };

  const handleBoxingEdit = (boxing) => {
    const foundBoxer = boxingList.findIndex((boxingEl) => {
      return boxingEl._id === boxing._id;
    });
    const newBoxers = [...boxingList];
    newBoxers[foundBoxer] = boxing;
    setBoxingList(newBoxers);

    fetch(`http://localhost:3000/api/boxing/${boxing.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(boxing),
    });
  };

  const handleBoxingDelete = (boxing) => {
    const foundBoxer = boxingList.findIndex((boxingEl) => {
      return boxingEl._id === boxing._id;
    });
    const newBoxers = [...boxingList];
    newBoxers[foundBoxer] = boxing;
    setBoxingList(newBoxers);

    fetch(`http://localhost:3000/api/boxing/${boxing.id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  const handleBoxerNewSubmit = () => {
    const newBoxer = { name: name, weight_id: weight_id, country: country };
    const newBoxers = [...boxingList];
    newBoxers.push(newBoxer);
    setBoxingList(newBoxers);

    fetch("http://localhost:3000/boxing", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newBoxer),
    });
  };

  useEffect(() => {
    fetch("http://localhost:3000/boxing", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        console.log("app response", response);
        return response.json();
      })
      .then((boxingData) => {
        setBoxingList(boxingData.data);
      });
  }, [boxingList]);

  return (
    <Router>
      <div>
        <h1>Boxers</h1>
        <BoxerList boxers={BoxerList} handleClick={handleBoxingClick} />
        <Link to="./boxing/create">Create Entry</Link>
        <Link to="./boxing/edit">Edit Entry</Link>
        <Link to="./boxing/delete">Delete Entry</Link>
        <Switch>
          <Route exact path="/boxing/create">
            <BoxerNew submit={handleBoxerNewSubmit} />
          </Route>

          <Route exact path="/boxing/edit/:id">
            <BoxerEdit submit={handleBoxingEdit} boxing={boxingEdit} />
          </Route>

          <Route exact path="/boxing/delete/:id">
            <BoxerDelete submit={handleBoxingDelete} boxing={boxingDelete} />
          </Route>
          
        </Switch>
      </div>
    </Router>
  );
};

export { BoxerContainer };
