import "./App.css";
import ListItem from "./ListItem";
function App() {
  let favFood = [
    { item: "Fried rice", rating: 3 },
    { item: "Dosa", rating: 5 },
    { item: "Tacos", rating: 4 },
    { item: "Sushi", rating: 5 },
    { item: "Pasta", rating: 4 },
  ];

  return (
    <div>
      <h2>I am learing basics of react</h2>
      <h4>My favourite food items are : </h4>
      {/* ------ option 1 ------- */}
      {/* <ul>
        <li>Fried rice</li>
        <li>Dosa</li>
        <li>Pav Bhaji</li>
      </ul> */}

      {/* ----- option 2 ----- */}
      {/* ..... still not feeling it ..... */}
      {/* <ul>
        <ListItem item="Fried rice" rating={3} />
        <ListItem item="dosa" rating={5} />
        <ListItem item="pav bhaji" rating={3} />
        <ListItem item="pav bhaji" rating={3} />
      </ul> */}

      {/* ----- option 3 ----- */}
      <ul>
        {
          favFood.map((food) => (
            <ListItem item={food.item} rating={food.rating} />
          ))
        }
      </ul>
    </div>
  );
}

export default App;
