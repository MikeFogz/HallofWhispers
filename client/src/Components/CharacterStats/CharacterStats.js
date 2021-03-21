import React from 'react';
import "./CharacterStats.css"

function CharacterStats(props) {

    const handleChange = (e) => {
        // Whenever a form with this function changes, it will run the parent function to save state.
        props.onChange( e.target );
    };

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
                                <input onChange={handleChange} name="Strength" className="stat-list " type="number" placeholder="10" id="strength" name="strength"></input>
                            </li>
                            <li className="list-group-item">Dexterity 
                                <input onChange={handleChange} name="Dexterity" className="stat-list" type="number" placeholder="10" id="dexterity" name="dexterity"></input>
                            </li>
                            <li className="list-group-item">Constitution 
                                <input onChange={handleChange} name="Constitution" className="stat-list " type="number" placeholder="10" id="constitution" name="constitution"></input>
                            </li>
                            <li className="list-group-item">Intelligence 
                                <input onChange={handleChange} name="Intelligence" className="stat-list " type="number" placeholder="10" id="intelligence" name="intelligence"></input>
                            </li>
                            <li className="list-group-item">Wisdom 
                                <input onChange={handleChange} name="Wisdom" className="stat-list " type="number" placeholder="10" id="wisdom" name="wisdom"></input>
                            </li>
                            <li className="list-group-item">Charisma 
                                <input onChange={handleChange} name="Charisma" className="stat-list " type="number" placeholder="10" id="charisma" name="charisma"></input>
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
                            <input onChange={handleChange} name="AC" className="stat-list" type="number" placeholder="10" id="ac" name="ac"></input>
                        </li>
                        <li className="list-group-item">Speed 
                            <input onChange={handleChange} name="Speed" className="stat-list" type="number" placeholder="10" id="speed" name="speed"></input>
                        </li>
                        <li className="list-group-item">Initiative 
                            <input onChange={handleChange} name="Initiative" className="stat-list" type="number" placeholder="10" id="initiative" name="initiative"></input>
                        </li>
                        <li className="list-group-item">Proficiency 
                            <input onChange={handleChange} name="Proficiency" className="stat-list" type="number" placeholder="10" id="proficiency" name="proficiency"></input>
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
                            <input onChange={handleChange} name="MaxHitPoints" className="stat-list" type="number" placeholder="10" id="max-hp" name="max-hp"></input>
                        </li>
                        <li className="list-group-item">Current Hit Points
                            <input onChange={handleChange} name="CurrentHitPoints" className="stat-list" type="number" placeholder="10" id="hp" name="hp"></input>
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
                            <input onChange={handleChange} name="Acrobatics" className="stat-list" type="number" placeholder="0" id="strength" name="strength"></input>
                        </li>
                        <li className="list-group-item">Animal Handling 
                            <input onChange={handleChange} name="AnimalHandling" className="stat-list" type="number" placeholder="0" id="dexterity" name="dexterity"></input>
                        </li>
                        <li className="list-group-item">Arcana 
                            <input onChange={handleChange} name="Arcana" className="stat-list" type="number" placeholder="0" id="constitution" name="constitution"></input>
                        </li>
                        <li className="list-group-item">Athletics 
                            <input onChange={handleChange} name="Athletics" className="stat-list" type="number" placeholder="0" id="intelligence" name="intelligence"></input>
                        </li>
                        <li className="list-group-item">Deception 
                            <input onChange={handleChange} name="Deception" className="stat-list" type="number" placeholder="0" id="wisdom" name="wisdom"></input>
                        </li>
                        <li className="list-group-item">History 
                            <input onChange={handleChange} name="History" className="stat-list" type="number" placeholder="0" id="charisma" name="charisma"></input>
                        </li>
                        <li className="list-group-item">Insight 
                            <input onChange={handleChange} name="Insight" className="stat-list" type="number" placeholder="0" id="insight" name="insight"></input>
                        </li>
                        <li className="list-group-item">Intimidation 
                            <input onChange={handleChange} name="Intimidation" className="stat-list" type="number" placeholder="0" id="intimidation" name="intimidation"></input>
                        </li>
                        <li className="list-group-item">Investigation 
                            <input onChange={handleChange} name="Investigation" className="stat-list" type="number" placeholder="0" id="investigation" name="investigation"></input>
                        </li>
                        <li className="list-group-item">Medicine 
                            <input onChange={handleChange} name="Medicine" className="stat-list" type="number" placeholder="0" id="medicine" name="medicine"></input>
                        </li>
                        <li className="list-group-item">Nature 
                            <input onChange={handleChange} name="Nature" className="stat-list" type="number" placeholder="0" id="nature" name="nature"></input>
                        </li>
                        <li className="list-group-item">Perception 
                            <input onChange={handleChange} name="Perception" className="stat-list" type="number" placeholder="0"  id="perception" name="perception"></input>
                        </li>
                        <li className="list-group-item">Persuasion 
                            <input onChange={handleChange} name="Persuasion" className="stat-list" type="number" placeholder="0"  id="persuasion" name="persuasion"></input>
                        </li>
                        <li className="list-group-item">Religion 
                            <input onChange={handleChange} name="Religion" className="stat-list" type="number" placeholder="0"  id="religion" name="religion"></input>
                        </li>
                        <li className="list-group-item">Sleight of Hand 
                            <input onChange={handleChange} name="SleightOfHand" className="stat-list" type="number" placeholder="0"  id="sleight" name="sleight"></input>
                        </li>
                        <li className="list-group-item">Stealth 
                            <input onChange={handleChange} name="Stealth" className="stat-list" type="number" placeholder="0"  id="stealth" name="stealth"></input>
                        </li>
                        <li className="list-group-item">Survival 
                            <input onChange={handleChange} name="Survival" className="stat-list" type="number" placeholder="0"  id="survival" name="survival"></input>
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
