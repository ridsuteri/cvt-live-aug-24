import { useState } from "react";
import "./ProfileCard.css";

function ProfileCard(props) {
  let styles = {
    backgroundColor: "blanchedalmond",
    margin: "0 auto",
    width: "10rem",
  };

//   let showBio = false;
    let [showBio, setShowBio] = useState(false);
    // let {name, age} = props;

  return (
    <div className="container">
      {/*  <div style={styles}> */}
      {/* conditional rendering */}
      {props.age > 18 ? <div>Age: {props.age}</div> : <div>Underage</div>}
      {<div className={props.online ? 'online' : 'offline'}></div>}
      {/* {props.age > 18 && <div> not underage</div> } */}
      <br />
      <button
        onClick={() => {
          setShowBio(!showBio);
          console.log(showBio);
        }}
      >
        Toggle bio
      </button>
      <br />
      {showBio && <span>{props.bio}</span>}
    </div>
  );
}

export  {ProfileCard};
