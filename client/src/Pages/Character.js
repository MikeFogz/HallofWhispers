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
  // const onClick = async (e) => {
  //   e.preventDefault();
  //   let token = localStorage.getItem("auth-token");
  //   try {
  //     //changing character creation in database
  //     const { data } = await axios.post("/api/characterCreation", {}, {
  //       headers: { "x-auth-token": token },
  //     });
  //     //Update the global user data here
  //     console.log(data);
  //     const updatedAccount = {
  //       id: data._id,
  //       displayName: data.displayName,
  //       charCreated: data.charCreated,
  //       loggedIn: true
  //     }
  //     setUserData({ ...userData, account: updatedAccount });

  //     history.push("/");

  //   } catch (error) {
  //     console.log(error)
  //   }

  // }

  //--------------------------------------------
  //Activate this block of code when appropriate
  //Function:  If the user is not logged in, will go
  //back to the login page.

  // const { userData } = useContext(AccountContext);
  // const history = useHistory();

  // useEffect(() => {
  //   if (!userData.account) {
  //     history.push("/login");
  //   }
  // }, [userData.account, history])

  //--------------------------------------------

  return (
    <div>
      {/* This button is a placeholder for when create character is created */}
      {/* <button onClick={onClick}>Create Character</button> */}
      <div class="container">
        <button className="btn btn-danger" type="submit">Submit to Hall Records</button>
        <h1>Hall of Whisper's Almanac of Heroes</h1>
        <p>Mark your place in the records.</p>
        <CharacterInfo />
        <CharacterStats />
      </div>


    </div>
  )
}

export default Character
