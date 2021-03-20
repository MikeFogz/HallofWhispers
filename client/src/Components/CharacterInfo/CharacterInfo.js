import React from 'react'

function CharacterInfo() {
    return (
        <div className="container-sm">
            <form>
                <div className="form-row row">
                <h3>Who are you?</h3>
                    <div className="col-sm-4 mb-3">
                        <label for="validationServer01">First name</label>
                        <input type="text" className="form-control is-valid" id="validationServer01" placeholder="First name" value="Mark" required/>
                        <div className="valid-feedback">
                        Looks good!
                        </div>
                    </div>
                    <div className="col-sm-4 mb-3">
                        <label for="validationServer02">Last name</label>
                        <input type="text" className="form-control is-valid" id="validationServer02" placeholder="Last name" value="Otto" required/>
                        <div className="valid-feedback">
                        Looks good!
                        </div>
                    </div>
                    <div className="col-sm-4 mb-3">
                        <label for="validationServerUsername">Username</label>
                        <div className="input-group">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="inputGroupPrepend3">@</span>
                        </div>
                        <input type="text" className="form-control is-invalid" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required/>
                        <div className="invalid-feedback">
                            Please choose a username.
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="form-row row">
                        <div className="col-sm-3 mb-3">
                            <label for="validationServer03">Class</label>
                            <input type="text" className="form-control is-invalid" id="validationServer03" placeholder="Class" required/>
                            <div className="invalid-feedback">
                            Please provide a Class or Subclass.
                            </div>
                        </div>
                        <div className="col-sm-3 mb-3 form-group">
                            <label for="validationServer04">Race</label>
                            <select className="form-control" id="exampleFormControlSelect1">
                            <option>Dwarf</option>
                            <option>Elf</option>
                            <option>Human</option>
                            <option>Orc</option>
                            <option>Tiefling</option>
                            </select>
                            <div className="invalid-feedback">
                            Please select a Race.
                            </div>
                        </div>
                        <div className="col-sm-3 mb-3">
                        <label for="validationServer05">Alignment</label>
                        <select className="form-control" id="alignment">
                        <option>Lawful Good</option>
                        <option>Neutral Good</option>
                        <option>Chaotic Good</option>
                        <option>Lawful Neutral</option>
                        <option>Neutral</option>
                        <option>Chaotic Neutral</option>
                        <option>Lawful Evil</option>
                        <option>Neutral Evil</option>
                        <option>Chaotic Evil</option>
                        </select>
                            <div className="invalid-feedback">
                            Please select an Alignment.
                            </div>
                        </div>
                    <div className="form-row row">
                        <h3>Your Story</h3>
                        <div className="input-group col-md-3 mb-3">
                            <textarea className="form-control" aria-label="With textarea"></textarea>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default CharacterInfo
