import React from "react";
import login from "../../Templates/login.htm";
const Login = () => {
  return(
  // <div style={{ position: "relative", height: "800px" }}>

  // <iframe title="Login" width="100%" height="100%" style={{ margin: "auto"}} src={login}></iframe>
  // </div>
  <div>
     <iframe name="report" height="1200px" width="100%" src={login} scrolling="no"  ></iframe>
   </div>
  )
}
export default Login;