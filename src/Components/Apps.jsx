// import { logDOM } from "@testing-library/react";
import React from "react";
import Login from "./LogIn";

var userIsRegistered = true;
var isLoggedIn = false;

const currentTime = new Date(2024, 0o6, 12, 9).getHours();
console.log(currentTime);

// function renderConditionally() {
//   if (isLoggedIn === true) {
//     return (
//       <h1>
//         {" "}
//         Welcome <br /> to <br /> AVD University
//       </h1>
//     );
//   } else {
//     return <Login />;
//   }

//       <h1>
//         {" "}
//         Welcome <br /> to <br /> AVD University
//       </h1>
//     );
//   } else {
//     return (
//       <div className="box">
//         <h1>AVD University</h1>
//         <form className="form">
//           <input type="text" placeholder="Username" id="" />
//           <input type="password" placeholder="Password" />
//           <button type="submit">Login</button>
//         </form>
//       </div>
// }

function Apps() {
  return (
    <div className="container">
      <Login isRegistered={userIsRegistered} />
      {/*Ternary Operator*/}
      {isLoggedIn ? (
        <h1>
          {" "}
          Welcome <br /> to <br /> AVD University
        </h1>
      ) : (
        <Login />
      )}
      {/*AND Operator*/}
      {currentTime > 12 && (
        <h1>
          {" "}
          {/* Welcome <br /> to <br /> AVD University */}
          Why are you still working?
        </h1>
      )}
      {/* 
        //  :
        //   <Login />

        //   <img src="SchoolCampus.jpg" className="AVDCampus" alt="" /> */}
      {/* //    <div className="box">
        //     <h1>AVD University</h1>
        //     <form className="form">
        //       <input type="text" placeholder="Username" id="" />
        //       <input type="password" placeholder="Password" />
        //       <button type="submit">Login</button>
        //     </form>
        //   </div> {" "}
      */}
    </div>
  );
}

export default Apps;
