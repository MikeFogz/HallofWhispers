import React, { useContext, useEffect } from 'react'
//import React from 'react';
import CharacterInfo from '../Components/CharacterInfo/CharacterInfo'
import CharacterStats from '../Components/CharacterStats/CharacterStats';
import axios from 'axios';
import AccountContext from "../Context/AccountContext";
import { useHistory } from "react-router-dom";
import API from "../utils/API";

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

  const createCharacter = async (e) => {
    // When the Submit to Hall Records button is clicked, it creates a character.
    API.createChr({
      chrName: formObject.Name,
      chrClass: formObject.Class,
      chrRace: formObject.Race,
      chrAlign: formObject.Alignment,
      chrStory: formObject.Story,
      chrStats: [
        { value: formObject.Strength },
        { value: formObject.Dexterity },
        { value: formObject.Constitution },
        { value: formObject.Intelligence },
        { value: formObject.Wisdom },
        { value: formObject.Charisma },
      ],
      chrArmor: [
        { value: formObject.ArmorClass },
        { value: formObject.Speed },
        { value: formObject.Initiative },
        { value: formObject.Proficiency },
      ],
      chrHealth: [
        { value: formObject.MaxHitPoints },
        { value: formObject.CurrentHitPoints },
      ],
      chrStats: [
        { value: formObject.Acrobatics },
        { value: formObject.AnimalHandling },
        { value: formObject.Arcana },
        { value: formObject.Athletics },
        { value: formObject.Deception },
        { value: formObject.History },
        { value: formObject.Insight },
        { value: formObject.Intimidation },
        { value: formObject.Investigation },
        { value: formObject.Medicine },
        { value: formObject.Nature },
        { value: formObject.Perception },
        { value: formObject.Persuasion },
        { value: formObject.Religion },
        { value: formObject.SleightOfHand },
        { value: formObject.Stealth },
        { value: formObject.Survival },
      ],
    })
      .catch(err => console.log(err));
    // API.findAll().then(res => console.log(res.data));
  };

  const [formObject, setFormObject] = React.useState({});

  const handleChange = (e) => {
    // When a child component sends us an event with data, we save it in an object state.
    setFormObject({ ...formObject, [e.name]: e.value });
  };

  return (
    <div>
      {/* This button is a placeholder for when create character is created */}
      {/* <button onClick={onClick}>Create Character</button> */}
      <div class="container">
        <button onClick={createCharacter} className="btn btn-danger" type="submit">Submit to Hall Records</button>
        <h1>Hall of Whisper's Almanac of Heroes</h1>
        <p>Mark your place in the records.</p>
        <CharacterInfo onChange={handleChange}/>
        <CharacterStats onChange={handleChange}/>
      </div>


    </div>
  )
}

export default Character
