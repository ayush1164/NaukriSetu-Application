import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import "./index.css";
import { useEffect, useState } from "react";

const Login = () => {
  const [allvalues, setvalues] = useState({
    username: "",
    password: "",
    errorMsg: "",
  });

  console.log(allvalues.password, allvalues.username);

  let navigate = useNavigate();

  let token = Cookies.get("my-Token");

  useEffect(() => {
    if (token !== undefined) {
      // token asal tr tu login vr jauch nhi shakat

      navigate("/");
    }
  }, []);

  const onFetchDetails = async (e) => {
    e.preventDefault();

    const api = "https://apis.ccbp.in/login";

    const userDetails = {
      username: allvalues.username,
      password: allvalues.password,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };

    try {
      const response = await fetch(api, options);
      console.log(response);

      const data = await response.json();
      console.log(data);

      if (response.ok === true) {
        setvalues({ ...allvalues, errorMsg: "" });

        Cookies.set("my-Token", data.jwt_token);

        navigate("/");
      } else {
        setvalues({ ...allvalues, errorMsg: data.error_msg });
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="main-cont">
        <form className="my-form" onSubmit={onFetchDetails}>
            <h1 style={{color:"white",fontFamily:"Segoe UI"}}>NaukriSetu</h1><br />
          <div>
            <label htmlFor="u_name">Name :</label>
            <br />
            <input
              onChange={(e) => {
                setvalues({ ...allvalues, username: e.target.value });
              }}
              id="u_name"
              type="text"
              placeholder="Enter the username"
              required
            />

            <br />
            <br />

            <label htmlFor="u_password">Password :</label>
            <br />
            <input
              onChange={(e) => {
                setvalues({ ...allvalues, password: e.target.value });
              }}
              id="u_password"
              type="password"
              placeholder="Enter the password"
              required
            />

            <br />

            <p style={{ marginLeft: "10px", marginTop: "5px", color: "red" }}>
              {allvalues.errorMsg}
            </p>

            <br />

            <button>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
