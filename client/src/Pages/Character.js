import React from 'react'
import CharacterInfo from '../Components/CharacterInfo/CharacterInfo'
import CharacterStats from '../Components/CharacterStats/CharacterStats'

const Character = () => {
  return (
    <div>
      <h3>Who are you?</h3>
      <CharacterInfo/>
      <h3>Your Story</h3>
      <div className="input-group col-md-3 mb-3">
        <textarea className="form-control" aria-label="With textarea"></textarea>
        <button className="btn btn-primary" type="submit">Save Story</button>
      </div>
      <CharacterStats/>
    </div>
  )
}

export default Character
