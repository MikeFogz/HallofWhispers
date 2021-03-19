import React from 'react';
import "./CharacterStats.css"

function CharacterStats() {
    return (
    <div className="container">
        <div className="row">
            <div className="col-sm">
                <div className="card">
                    <div className="card-header">
                        <h3>Stats</h3>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Strength 
                            <input className="stat-list col-xs-2" type="number" value="10" id="strength" name="strength"></input>
                        </li>
                        <li className="list-group-item">Dexterity 
                            <input className="stat-list col-xs-2" type="number" value="10" id="dexterity" name="dexterity"></input>
                        </li>
                        <li className="list-group-item">Constitution 
                            <input className="stat-list col-xs-2" type="number"value="10" id="constitution" name="constitution"></input>
                        </li>
                        <li className="list-group-item">Intelligence 
                            <input className="stat-list col-xs-2" type="number" value="10" id="intelligence" name="intelligence"></input>
                        </li>
                        <li className="list-group-item">Wisdom 
                            <input className="stat-list col-xs-2" type="number" value="10" id="wisdom" name="wisdom"></input>
                        </li>
                        <li className="list-group-item">Charisma 
                            <input className="stat-list col-xs-2" type="number" value="10" id="charisma" name="charisma"></input>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-sm">
                <div className="card">
                    <div className="card-header">
                        <h3>Armor</h3>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">AC 
                            <input className="stat-list" type="number" value="10" id="ac" name="ac"></input>
                        </li>
                        <li className="list-group-item">Speed 
                            <input className="stat-list" type="number" value="10" id="speed" name="speed"></input>
                        </li>
                        <li className="list-group-item">Initiative 
                            <input className="stat-list" type="number"value="10" id="initiative" name="initiative"></input>
                        </li>
                        <li className="list-group-item">Proficiency 
                            <input className="stat-list" type="number" value="10" id="proficiency" name="proficiency"></input>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-sm">
                <div className="card">
                    <div className="card-header">
                        <h3>Health</h3>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Max Hit Points
                            <input className="stat-list" type="number" value="10" id="max-hp" name="max-hp"></input>
                        </li>
                        <li className="list-group-item">Current Hit Points
                            <input className="stat-list" type="number" value="10" id="hp" name="hp"></input>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="col-sm">
                <div className="card">
                    <div className="card-header">
                        <h3>Skills</h3>
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Acrobatics 
                            <input className="stat-list" type="number" value="10" id="strength" name="strength"></input>
                        </li>
                        <li className="list-group-item">Animal Handling 
                            <input className="stat-list" type="number" value="10" id="dexterity" name="dexterity"></input>
                        </li>
                        <li className="list-group-item">Arcana 
                            <input className="stat-list" type="number"value="10" id="constitution" name="constitution"></input>
                        </li>
                        <li className="list-group-item">Athletics 
                            <input className="stat-list" type="number" value="10" id="intelligence" name="intelligence"></input>
                        </li>
                        <li className="list-group-item">Deception 
                            <input className="stat-list" type="number" value="10" id="wisdom" name="wisdom"></input>
                        </li>
                        <li className="list-group-item">History 
                            <input className="stat-list" type="number" value="10" id="charisma" name="charisma"></input>
                        </li>
                        <li className="list-group-item">Insight 
                            <input className="stat-list" type="number" value="10" id="wisdom" name="wisdom"></input>
                        </li>
                        <li className="list-group-item">Intimidation 
                            <input className="stat-list" type="number" value="10" id="wisdom" name="wisdom"></input>
                        </li>
                        <li className="list-group-item">Investigation 
                            <input className="stat-list" type="number" value="10" id="wisdom" name="wisdom"></input>
                        </li>
                        <li className="list-group-item">Medicine 
                            <input className="stat-list" type="number" value="10" id="wisdom" name="wisdom"></input>
                        </li>
                        <li className="list-group-item">Nature 
                            <input className="stat-list" type="number" value="10" id="wisdom" name="wisdom"></input>
                        </li>
                        <li className="list-group-item">Perception 
                            <input className="stat-list" type="number" value="10" id="wisdom" name="wisdom"></input>
                        </li>
                        <li className="list-group-item">Persuasion 
                            <input className="stat-list" type="number" value="10" id="wisdom" name="wisdom"></input>
                        </li>
                        <li className="list-group-item">Religion 
                            <input className="stat-list" type="number" value="10" id="wisdom" name="wisdom"></input>
                        </li>
                        <li className="list-group-item">Sleight of Hand 
                            <input className="stat-list" type="number" value="10" id="wisdom" name="wisdom"></input>
                        </li>
                        <li className="list-group-item">Stealth 
                            <input className="stat-list" type="number" value="10" id="wisdom" name="wisdom"></input>
                        </li>
                        <li className="list-group-item">Survival 
                            <input className="stat-list" type="number" value="10" id="wisdom" name="wisdom"></input>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CharacterStats
