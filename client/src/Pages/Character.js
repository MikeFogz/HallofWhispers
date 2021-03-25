import React, { useContext, useEffect } from 'react'
//import React from 'react';
import CharacterInfo from '../Components/CharacterInfo/CharacterInfo'
import CharacterStats from '../Components/CharacterStats/CharacterStats';
import axios from 'axios';
import AccountContext from "../Context/AccountContext";
import { useHistory } from "react-router-dom";
import API from "../utils/API";
import "../Pages/Character.css";

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
    } else {

    };
  }, [userData.pending, userData.account, history])




  const [formObject, setFormObject] = React.useState({});

  const handleChange = (e) => {
    // When a child component sends us an event with data, we save it in an object state.
    setFormObject({ ...formObject, [e.name]: e.value });
  };

  function clean(obj) {
    for (var propName in obj) {
      if (obj[propName] === null || obj[propName] === undefined) {
        delete obj[propName];
      }
    }
    return obj
  }

  let characterData = {
    chrName: formObject.Name,
    chrClass: formObject.Class,
    chrRace: formObject.Race,
    chrAlign: formObject.Alignment,
    chrStory: formObject.Story,
    chrStr: formObject.Strength,
    chrDex: formObject.Dexterity,
    chrCon: formObject.Constitution,
    chrInt: formObject.Intelligence,
    chrWis: formObject.Wisdom,
    chrCha: formObject.Charisma,
    chrAc: formObject.ArmorClass,
    chrSpeed: formObject.Speed,
    chrIni: formObject.Initiative,
    chrProf: formObject.Proficiency,
    chrMaxHp: formObject.MaxHitPoints,
    chrCurrHp: formObject.CurrentHitPoints,
    chrAcr: formObject.Acrobatics,
    chrAnHa: formObject.AnimalHandling,
    chrArc: formObject.Arcana,
    chrAth: formObject.Athletics,
    chrDec: formObject.Deception,
    chrHis: formObject.History,
    chrIns: formObject.Insight,
    chrIntim: formObject.Intimidation,
    chrInv: formObject.Investigation,
    chrMed: formObject.Medicine,
    chrNat: formObject.Nature,
    chrPerc: formObject.Perception,
    chrPers: formObject.Persuasion,
    chrRel: formObject.Religion,
    chrSoh: formObject.SleightOfHand,
    chrSte: formObject.Stealth,
    chrSur: formObject.Survival,
  };



  const createCharacter = async (e) => {

    e.preventDefault();
    let token = localStorage.getItem("auth-token");
    try {
      if (userData.account.charCreated) {
        // const newCharacterData = clean(characterData);
        // console.log(document.querySelector('[name="Name"]').defaultValue);
        await axios.patch("/api/characters/update", characterData, { headers: { "x-auth-token": token } });
        window.location.reload();
      } else {
        // When the Submit to Hall Records button is clicked, it creates a character with the below params.
        const mychr = await API.createChr(characterData);
        // API.findAll().then(res => console.log(res.data));
        //changing character creation in database
        const { data } = await axios.post("/api/characterCreation", {}, {
          headers: { "x-auth-token": token },
        });
        console.log(mychr.data)
        setUserData({ ...userData, account: data, character: mychr.data, pending: false });
        history.push("/");
      }
    } catch (error) {
      console.log(error)
    }

  };

  return (
    <div>
      {/* This button is a placeholder for when create character is created */}
      {/* <button onClick={onClick}>Create Character</button> */}
      <div className="container">
        <button onClick={createCharacter} className="btn btn-danger" type="submit">Submit to Hall Records</button>
        <h1>Hall of Whisper's Almanac of Heroes</h1>
        <p>Mark your place in the records.</p>
        <CharacterInfo onChange={handleChange} />
        <CharacterStats onChange={handleChange} />
      </div>


    </div>
  )
}

export default Character
