import React from 'react'

const Character = () => {
  return (
    <div>
      <h3>Who are you?</h3>
      <div className="input-group mb-3">
        <span className="input-group-text">Name </span>
        <input type="text" className="form-control" placeholder="Username" aria-label="Username"/>
        <span className="input-group-text"> Race</span>
        <input type="text" className="form-control" placeholder="Server" aria-label="Server"/>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">Gender </span>
        <input type="text" className="form-control" placeholder="Username" aria-label="Username"/>
        <span className="input-group-text"> Alignment </span>
        <input type="text" className="form-control" placeholder="Server" aria-label="Server"/>
        <span className="input-group-text"> Age </span>
        <input type="text" className="form-control" placeholder="Server" aria-label="Server"/>
      </div>
      <h3>Your Story</h3>
      <div className="input-group">
        <textarea className="form-control" aria-label="With textarea"></textarea>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h3>Stats</h3>
            <ul>
              <li>Str: 15</li>
              <li>Dex: 15</li>
              <li>Con: 15</li>
              <li>Int: 15</li>
              <li>Wis: 15</li>
              <li>Char: 15</li>
            </ul>
          </div>
          <div className="col-sm">
          <h3>Armor</h3>
            <ul>
              <li>AC: 15</li>
              <li>Speed: 15</li>
              <li>Initiative: 15</li>
              <li>Proficiency: 15</li>
            </ul>
          </div>
          <div className="col-sm">
          <h3>Health</h3>
            <ul>
              <li>Max HP: 15</li>
              <li>Current HP: 15</li>
            </ul>
          </div>
          <div className="col-sm">
          <h3>Skills</h3>
            <ul>
              <li> +1 Acrobatics</li>
              <li>Animal Handling: 15</li>
              <li>Arcana: 15</li>
              <li>Athletics: 15</li>
              <li> +1 Deception</li>
              <li> +1 History</li>
              <li> +1 Insight</li>
              <li> +1 Intimidation</li>
              <li> +1 Investigation</li>
              <li> +1 Medicine</li>
              <li> +1 Nature</li>
              <li> +1 Perception</li>
              <li> +1 Acrobatics</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Character
