import React, { useContext, useEffect } from 'react'
//import React from 'react';
import CharacterInfo from '../Components/CharacterInfo/CharacterInfo'
import CharacterStats from '../Components/CharacterStats/CharacterStats';
import axios from 'axios';
import AccountContext from "../Context/AccountContext";
import { useHistory } from "react-router-dom";

const Character = () => {
  const { userData, setUserData } = useContext(AccountContext);
  const history = useHistory();

  // This function is used to change 
  const onClick = async (e) => {
    e.preventDefault();
    let token = localStorage.getItem("auth-token");
    try {
      //changing character creation in database
      const { data } = await axios.post("/api/characterCreation", {}, {
        headers: { "x-auth-token": token },
      });
      setUserData({ ...userData, account: data });
      history.push("/");
    } catch (error) {
      console.log(error)
    }

  }

  //If it is not logged in, then go back to login
  useEffect(() => {
    if (!userData.pending && !userData.account) {
      history.push("/login");
    }
  }, [userData.pending, userData.account, history])

  //--------------------------------------------

  return (
    <div>
      {/* This button is a placeholder for when create character is created */}
      <button onClick={onClick}>Create Character</button>
      <h1>Hall of Whisper's Almanac of Heroes</h1>
      <p>Mark your place in the records.</p>
      <CharacterInfo />
      <CharacterStats />
      <button className="btn btn-primary" type="submit">Submit to Hall Records</button>
    </div>
  )
}

export default Character
