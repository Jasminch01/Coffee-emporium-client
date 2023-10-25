import { Link, useLoaderData } from "react-router-dom";
import Coffee from "../Components/Coffee/Coffee";
import { useState } from "react";
import Banner from "../Components/Banner/Banner";

const Home = () => {
  const loadedCoffees = useLoaderData();
  const [coffees, setCoffees] = useState(loadedCoffees)
  return (
    <div >
      <div className="">
        <Banner></Banner>
      </div>
      <p className="text-center text-2xl font-bold my-3">Our Populer Products</p>
      <div className="text-center">
        <button className="btn p-3 text-center">
          {" "}
          <Link to="/add-coffee">Add Coffee</Link>{" "}
        </button>
      </div>
      <div className="grid grid-cols-2 gap-5 my-10 w-[80%] mx-auto">
        {coffees.map((coffee) => (
          <Coffee key={coffee._id} coffee={coffee} setCoffees = {setCoffees} coffees = {coffees}></Coffee>
        ))}
      </div>
    </div>
  );
};

export default Home;
