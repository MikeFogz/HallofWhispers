import "./LoginForm.css";
import React, { useState, useContext, } from 'react';
import axios from "axios";
import AccountContext from "../../Context/AccountContext";
import { useHistory } from "react-router-dom";
// rafc

const LoginForm = () => {
    const [form, setForm] = useState();
    const { userData, setUserData } = useContext(AccountContext);
    const history = useHistory();

    const onChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    }
    const submitLoginForm = async (e) => {
        e.preventDefault();
        try {
            console.log(form);
            const { data } = await axios.post("/api/login", form);
            console.log(data);

            //Setting up my account data for state
            const myAccountData = {
                id: data.myAccount._id,
                accountName: data.myAccount.accountName,
                charCreated: data.myAccount.charCreated,
                loggedIn: true
            };


            //Setting the global user data here
            setUserData({
                token: data.token,
                account: myAccountData
            });

            //Saving the token to local storage.  This token expires in 24 hours.
            localStorage.setItem("auth-token", data.token);
            if (data.myAccount.charCreated) {
                history.push("/");
            } else {
                history.push("/character");
            }

        } catch (error) {
            console.log(error.response);
        }
    }

    //--------------------------------------------
    //Activate this block of code when appropriate
    //Function:  If the user is logged in, will go
    //straight to the home page.

    // useEffect(() => {
    //   if (userData.account) history.goBack();
    // }, [userData.account, history])

    //-----------------------------------------------

    return (
        <>
            {/* form start */}
            < form onSubmit={submitLoginForm} >
                {/* email start */}
                <div className="input-group mb-3">
                    <div className="input-group-append">
                        <span className="input-group-text"><i className="fas fa-user"></i></span>
                    </div>
                    <input onChange={onChange} type="text" name="email" className="form-control input_user" placeholder="email" />
                </div>
                {/* email end */}
                {/* password start */}
                <div className="input-group mb-2">
                    <div className="input-group-append">
                        <span className="input-group-text"><i className="fas fa-key"></i></span>
                    </div>
                    <input onChange={onChange} type="text" name="password" className="form-control input_pass" placeholder="password" />
                </div>
                {/* password end */}

                {/* button start */}
                <div className="d-flex justify-content-center mt-3 login_container">
                    <button type="submit" name="button" className="btn login_btn">Login</button>
                </div>
                {/* button end */}

                <div className="d-flex mt-3 justify-content-center links">
                    <a href="/register">Register Here</a>
                </div>
            </form >
            {/* form end */}
        </>
    )
}

export default LoginForm
