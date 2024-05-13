import React, { useEffect, useState } from "react";
import { db } from "./firebase";
import classes from "./crud.module.css";
import {
  doc,
  addDoc,
  collection,
  updateDoc,
  deleteDoc,
  getDocs,
} from "firebase/firestore";

const Curd = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [id, setId] = useState();
  const [fetchData, setFetchData] = useState([]);

  // Creating Database Ref
  const dbref = collection(db, "CURD");

  // Storing data to database
  const add = async () => {
    const adddata = await addDoc(dbref, {
      Name: name,
      Email: email,
      Phone: phone,
    });

    if (adddata) {
      alert("Data added to database");
      window.location.reload();
    } else {
      alert("Data not added to database");
    }
  };

  // Fetch data from database
  const fetch = async () => {
    const snapshot = await getDocs(dbref);
    const fetchdata = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setFetchData(fetchdata);
  };

  useEffect(() => {
    fetch();
  }, []);

  const passData = async (id) => {
    const matchId = fetchData.find((data) => {
      return data.id === id;
    });
    setName(matchId.Name);
    setEmail(matchId.Email);
    setPhone(matchId.Phone);
    setId(matchId.id);
  };

  // Update the data
  const update = async () => {
    const updateref = doc(dbref, id);

    try {
      const updatedata = await updateDoc(updateref, {
        Name: name,
        Email: email,
        Phone: phone,
      });

      alert("Data Updated");
      window.location.reload();
    } catch (error) {
      alert("Failed to update");
    }
  };

  // Delete data from the database
  const deleteData = async (id) => {
    const delref = doc(dbref, id);
    try {
      await deleteDoc(delref);
      alert("Data Deleted");
      window.location.reload();
    } catch (error) {
      alert("Failed to delete");
    }
  };

  return (
    <>
      <div className={classes.form_container}>
        <h2> Add/ Update Form</h2>
        <div className={classes.box}>
          <input
            type="text"
            placeholder="Full Name"
            autoComplete="off"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
        <div className={classes.box}>
          <input
            type="email"
            placeholder="E-mail"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className={classes.box}>
          <input
            type="text"
            placeholder="Phone Number"
            autoComplete="off"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          ></input>
        </div>
        <button onClick={add}>Add</button>
        <button onClick={update}>Update</button>
      </div>

      <div className={classes.database}>
        <h2>CRUD Database</h2>
        <div className={classes.container}>
          {fetchData.map((data, index) => (
            <div className={classes.box} key={index}>
              <p>Full Name : {data.Name}</p>
              <p>E-mail: {data.Email}</p>
              <p>Phone Number: {data.Phone}</p>
              <button onClick={() => passData(data.id)}>Update</button>
              <button onClick={() => deleteData(data.id)}>Delete</button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Curd;
