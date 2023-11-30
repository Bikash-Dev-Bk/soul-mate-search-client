import { useForm } from "react-hook-form";
import DashBoardHeroPages from "../../../components/DashBoardHeroPages/DashBoardHeroPages";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const GotMarried = () => {
  const { register, handleSubmit, reset } = useForm();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();

  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.coupleImage[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      // now send the story data to the server with the image url
      const story = {
        selfBiodata: data.selfBiodata,
        partnerBiodata: data.partnerBiodata,
        coupleImage: res.data.data.display_url,
        marriageDate: data.marriageDate,
        reviewStar: data.reviewStar,
        successStoryText: data.successStoryText,
      };

      axiosSecure.post("/stories", story).then((res) => {
        if (res.data.insertedId) {
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Story added to the Success Stories",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
    }
  };

  return (
    <div>
      <DashBoardHeroPages name="Got Married"></DashBoardHeroPages>
      <div className="max-w-[1280px] mx-auto my-12 p-5">
        <form onSubmit={handleSubmit(onSubmit)} className=" p-8">
          <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
            {/* Self Biodata Number  */}
            <div className="flex flex-col w-full  ">
              <label className="mb-2">
                <span>Self Biodata Number*</span>
              </label>
              <input
                type="text"
                placeholder="Self Biodata Number"
                {...register("selfBiodata", { required: true })}
                required
                className="w-full text-lg px-4 py-2 border-2 border-[#04AA6D] focus:outline-none rounded-lg"
              />
            </div>

            {/* Partner Biodata Number  */}
            <div className="flex flex-col w-full  ">
              <label className="mb-2">
                <span>Partner Biodata Number*</span>
              </label>
              <input
                type="text"
                placeholder="Partner Biodata Number"
                {...register("partnerBiodata", { required: true })}
                required
                className="w-full text-lg px-4 py-2 border-2 border-[#04AA6D] focus:outline-none rounded-lg"
              />
            </div>

            {/* image input */}
            <div className="flex flex-col w-full  ">
              <label className="mb-2">
                <span>Couple Image*</span>
              </label>
              <input
                {...register("coupleImage", { required: true })}
                required
                type="file"
                className="w-full text-lg px-4 py-2 border-2 border-[#04AA6D] focus:outline-none rounded-lg"
              />
            </div>

            {/* Marriage Date*/}
            <div className="flex flex-col w-full  ">
              <label className="mb-2">
                <span>Marriage Date*</span>
              </label>
              <input
                type="date"
                {...register("marriageDate", { required: true })}
                required
                className="w-full text-lg px-4 py-2 border-2 border-[#04AA6D] focus:outline-none rounded-lg"
              ></input>
            </div>

            {/* Review Star*/}
            <div className="flex flex-col w-full  ">
              <label className="mb-2">
                <span>Review Star*</span>
              </label>
              <input
                type="text"
                {...register("reviewStar", { required: true })}
                required
                placeholder="Review Star"
                className="w-full text-lg px-4 py-2 border-2 border-[#04AA6D] focus:outline-none rounded-lg"
              ></input>
            </div>
          </div>

          {/* Success Story Review  */}
          <div className="flex flex-col w-full  mt-10">
            <label className="mb-2">
              <span>Success Story Review*</span>
            </label>
            <textarea
              cols="30"
              rows="5"
              type="text"
              placeholder="Success Story Review"
              {...register("successStoryText", { required: true })}
              required
              className="w-full text-lg px-4 py-2 border-2 border-[#04AA6D] focus:outline-none rounded-lg"
            />
          </div>

          <div className="flex justify-center mb-16 mt-10">
            <button className="px-5 py-3 rounded-lg  text-white bg-[#04AA6D] hover:bg-transparent border-2 border-[#04AA6D] hover:text-[#04AA6D] ">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GotMarried;
