import { useLoaderData } from "react-router-dom";

const UpdateCoffee = () => {
  const allCoffees = useLoaderData();

  const handleUpdateSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const UpdatedCoffee = { name, chef, supplier, taste, category, details, photo };

    console.log(UpdatedCoffee);
    
    fetch(`http://localhost:5000/coffees/${allCoffees._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(UpdatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("Successfully updated coffee.");
        }
      });
  };
  return (
    <div>
      <h1>Update Coffee</h1>
      <div>
        <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-10">
          <h1 className="text-3xl text-gray-500 font-bold mb-4 text-center">
            Update a Coffee
          </h1>
          <p className="text-gray-500 text-center mb-6">
            Fill in the details below to add a new coffee to your collection.
          </p>
          <form onSubmit={handleUpdateSubmit} className="space-y-4">
            {/* Row 1 */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="name"
                defaultValue={allCoffees?.name}
                placeholder="Name"
                className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                name="chef"
                placeholder="Chef"
                defaultValue={allCoffees?.chef}
                className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Row 2 */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="supplier"
                placeholder="Supplier"
                defaultValue={allCoffees?.supplier}
                className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                name="taste"
                defaultValue={allCoffees?.taste}
                placeholder="Taste"
                className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Row 3 */}
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="text"
                name="category"
                placeholder="Category"
                defaultValue={allCoffees?.category}
                className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="text"
                name="details"
                placeholder="Details"
                defaultValue={allCoffees?.details}
                className="flex-1 border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            {/* Photo */}
            <input
              type="text"
              name="photo"
              placeholder="Photo URL"
              defaultValue={allCoffees?.photo}
              className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            {/* Submit */}
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded mt-4 transition"
            >
              Update a Coffee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
