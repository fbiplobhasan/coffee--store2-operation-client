import { Link, useLoaderData } from "react-router-dom";
import "./App.css";

function App() {
  const loadedAllCoffees = useLoaderData();

  const handleDelete = (_id) => {
    console.log(_id);
    fetch(`http://localhost:5000/coffees/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <>
      <h1>Coffee Store</h1>
      <div>
        {loadedAllCoffees.map((coffee) => (
          <p key={coffee._id}>
            {"Coffee Name : " + coffee.name} {coffee._id}{" "}
            <button onClick={() => handleDelete(coffee._id)} className="btn">
              X
            </button>
            <Link to={`/updateCoffee/${coffee._id}`}><button className="btn">E</button></Link>
          </p>
        ))}
      </div>
      <div className="">
        <button className="btn btn-warning">
          <Link to="/addCoffee">Add Coffee</Link>
        </button>
        <button className="btn btn-warning">
          <Link to="/updateCoffee">Update Coffee</Link>
        </button>
      </div>
    </>
  );
}

export default App;
