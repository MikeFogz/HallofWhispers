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
                    <form>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Strength 
                                <input className="stat-list " type="number" placeholder="10" id="strength" name="strength"></input>
                            </li>
                            <li className="list-group-item">Dexterity 
                                <input className="stat-list" type="number" placeholder="10" id="dexterity" name="dexterity"></input>
                            </li>
                            <li className="list-group-item">Constitution 
                                <input className="stat-list " type="number" placeholder="10" id="constitution" name="constitution"></input>
                            </li>
                            <li className="list-group-item">Intelligence 
                                <input className="stat-list " type="number" placeholder="10" id="intelligence" name="intelligence"></input>
                            </li>
                            <li className="list-group-item">Wisdom 
                                <input className="stat-list " type="number" placeholder="10" id="wisdom" name="wisdom"></input>
                            </li>
                            <li className="list-group-item">Charisma 
                                <input className="stat-list " type="number" placeholder="10" id="charisma" name="charisma"></input>
                            </li>
                        </ul>
                    </form>
                    
                </div>
            </div>
            <div className="col-sm">
                <div className="card">
                    <div className="card-header">
                        <h3>Armor</h3>
                    </div>
                    <form>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">AC 
                            <input className="stat-list" type="number" placeholder="10" id="ac" name="ac"></input>
                        </li>
                        <li className="list-group-item">Speed 
                            <input className="stat-list" type="number" placeholder="10" id="speed" name="speed"></input>
                        </li>
                        <li className="list-group-item">Initiative 
                            <input className="stat-list" type="number" placeholder="10" id="initiative" name="initiative"></input>
                        </li>
                        <li className="list-group-item">Proficiency 
                            <input className="stat-list" type="number" placeholder="10" id="proficiency" name="proficiency"></input>
                        </li>
                    </ul>
                    </form>
                </div>
            </div>
            <div className="col-sm">
                <div className="card">
                    <div className="card-header">
                        <h3>Health</h3>
                    </div>
                    <form>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Max Hit Points
                            <input className="stat-list" type="number" placeholder="10" id="max-hp" name="max-hp"></input>
                        </li>
                        <li className="list-group-item">Current Hit Points
                            <input className="stat-list" type="number" placeholder="10" id="hp" name="hp"></input>
                        </li>
                    </ul>
                    </form>
                </div>
            </div>
            <div className="col-sm">
                <div className="card">
                    <div className="card-header">
                        <h3>Skills</h3>
                    </div>
                    <form>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Acrobatics
                            <input className="stat-list" type="number" placeholder="0" id="strength" name="strength"></input>
                        </li>
                        <li className="list-group-item">Animal Handling 
                            <input className="stat-list" type="number" placeholder="0" id="dexterity" name="dexterity"></input>
                        </li>
                        <li className="list-group-item">Arcana 
                            <input className="stat-list" type="number" placeholder="0" id="constitution" name="constitution"></input>
                        </li>
                        <li className="list-group-item">Athletics 
                            <input className="stat-list" type="number" placeholder="0" id="intelligence" name="intelligence"></input>
                        </li>
                        <li className="list-group-item">Deception 
                            <input className="stat-list" type="number" placeholder="0" id="wisdom" name="wisdom"></input>
                        </li>
                        <li className="list-group-item">History 
                            <input className="stat-list" type="number" placeholder="0" id="charisma" name="charisma"></input>
                        </li>
                        <li className="list-group-item">Insight 
                            <input className="stat-list" type="number" placeholder="0" id="insight" name="insight"></input>
                        </li>
                        <li className="list-group-item">Intimidation 
                            <input className="stat-list" type="number" placeholder="0" id="intimidation" name="intimidation"></input>
                        </li>
                        <li className="list-group-item">Investigation 
                            <input className="stat-list" type="number" placeholder="0" id="investigation" name="investigation"></input>
                        </li>
                        <li className="list-group-item">Medicine 
                            <input className="stat-list" type="number" placeholder="0" id="medicine" name="medicine"></input>
                        </li>
                        <li className="list-group-item">Nature 
                            <input className="stat-list" type="number" placeholder="0" id="nature" name="nature"></input>
                        </li>
                        <li className="list-group-item">Perception 
                            <input className="stat-list" type="number" placeholder="0"  id="perception" name="perception"></input>
                        </li>
                        <li className="list-group-item">Persuasion 
                            <input className="stat-list" type="number" placeholder="0"  id="persuasion" name="persuasion"></input>
                        </li>
                        <li className="list-group-item">Religion 
                            <input className="stat-list" type="number" placeholder="0"  id="religion" name="religion"></input>
                        </li>
                        <li className="list-group-item">Sleight of Hand 
                            <input className="stat-list" type="number" placeholder="0"  id="sleight" name="sleight"></input>
                        </li>
                        <li className="list-group-item">Stealth 
                            <input className="stat-list" type="number" placeholder="0"  id="stealth" name="stealth"></input>
                        </li>
                        <li className="list-group-item">Survival 
                            <input className="stat-list" type="number" placeholder="0"  id="survival" name="survival"></input>
                        </li>
                    </ul>
                    </form>
                </div>
            </div>
        </div>
    </div>
    )
}

export default CharacterStats
