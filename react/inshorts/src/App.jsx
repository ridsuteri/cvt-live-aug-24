import { useState, useEffect } from "react";
import "./App.css";
import fetchApi from "./fetchApi";
import loadingGig from "./assets/loder.gif";

function App() {
  let [data, setData] = useState([]);
  let [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchApi()
      .then((response) => {
        if (response.status == "200") {
          setData(response.data);
          setLoading(false);
        }
      })
      .catch(() => {
        console.log("error fetching data");
      });
  }, []);

  return (
    <>
      {loading ? (
        <img src={loadingGig} />
      ) : (
        <div>
          <h1>Breaking news for today!!</h1>
          {data.map((news, index) => (
            <div key={index}>
              <h3>{news.title}</h3>
              <p>{news.description}</p>
              <hr />
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export default App;
