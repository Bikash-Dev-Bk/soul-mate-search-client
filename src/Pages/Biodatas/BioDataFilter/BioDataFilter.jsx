import { useForm } from "react-hook-form";

const BioDataFilter = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {};

  return (
    <div>
      <h2>Filter Bio Data</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* biodata type */}
        <div className="form-control w-full my-6">
          <label className="label">
            <span className="label-text ">Biodata type*</span>
          </label>
          <select
            defaultValue="default"
            {...register("category", { required: true })}
            className="select select-bordered w-full text-lg py-2 border-2 border-[#04AA6D] focus:outline-none mt-2"
          >
            <option disabled value="default">
              Select a category
            </option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>

        {/* age */}
        <div className="form-control w-full my-6">
          <label className="label">
            <span className="label-text">Age*</span>
          </label>
          <select
            defaultValue="default"
            {...register("category", { required: true })}
            className="select select-bordered w-full text-lg py-2 border-2 border-[#04AA6D] focus:outline-none mt-2"
          >
            <option disabled value="default">
              Select a category
            </option>
            <option value="salad">20 to 25</option>
            <option value="pizza">26 to 30</option>
            <option value="soup">31 to 35</option>
            <option value="dessert">36 to 40</option>
            <option value="drinks">40 to 50</option>
            <option value="drinks">50+</option>
          </select>
        </div>

        {/* division  */}
        <div className="form-control w-full my-6">
          <label className="label">
            <span className="label-text">Division*</span>
          </label>
          <select
            defaultValue="default"
            {...register("category", { required: true })}
            className="select select-bordered w-full text-lg py-2 border-2 border-[#04AA6D] focus:outline-none mt-2"
          >
            <option disabled value="default">
              Select a category
            </option>
            <option value="Dhaka">Dhaka</option>
            <option value="Chattogram">Chattogram</option>
            <option value="Rangpur">Rangpur</option>
            <option value="Barisal">Barisal</option>
            <option value="Khulna">Khulna</option>
            <option value="Mymensingh">Mymensingh</option>
            <option value="Sylhet">Sylhet</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default BioDataFilter;
