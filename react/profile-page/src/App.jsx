import {ProfileCard} from "./ProfileCard";
function App() {
  
  // let userInfo = {
  //   name: "user1",
  //   age: 17,
  //   bio: "cooldude",
  // };

  return (
    <>
      {/* <ProfileCard info={userInfo} /> */}
      <ProfileCard name="user1" age={19} bio="cooldude" online={false} />
    </>
  );
}

export default App;
