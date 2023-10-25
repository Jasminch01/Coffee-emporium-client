import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
const Coffee = ({ coffee, setCoffees, coffees }) => {
  const { _id, name, quantity, supplier, taste, category, details, photo } =
    coffee;

  const deleteCoffee = (_id) => {
    fetch(`https://coffee-emporium-server.vercel.app/coffees/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("coffee deleted succesfully");
        }
        const remainingCoffees = coffees.filter((coff) => coff._id !== _id);

        setCoffees(remainingCoffees);
      });
  };
  return (
    <div className="flex items-center justify-between bg-slate-100 p-5">
      <div className="flex items-center gap-4">
        <div>
          <img src={photo} alt="" className="w-32" />
        </div>
        <div>
          <p className="text-xl font-bold">{name}</p>
          <p>Quantity : {quantity}</p>
          <p>Supplier : {supplier}</p>
          <p>Taste: {taste}</p>
          <p>Taste: {details}</p>
          <p>Taste: {category}</p>
        </div>
      </div>
      <div className="flex flex-col gap-3">
        <Link to={`/update-coffee/${_id}`} className="p-2 bg-black rounded">
          {" "}
          <button>
            <AiFillEye className="text-white text-xl"></AiFillEye>{" "}
          </button>
        </Link>
        <Link to={`/update-coffee/${_id}`} className="p-3 bg-black rounded">
          {" "}
          <button>
            <FiEdit className="text-white"></FiEdit>{" "}
          </button>
        </Link>
        <button className="p-2 rounded bg-red-400" onClick={() => deleteCoffee(_id)}>
          {" "}
          <MdDelete className="text-white text-xl"></MdDelete>{" "}
        </button>
      </div>
    </div>
  );
};

Coffee.propTypes = {
  coffee: PropTypes.object.isRequired,
  setCoffees: PropTypes.func,
  coffees: PropTypes.array,
};
export default Coffee;
