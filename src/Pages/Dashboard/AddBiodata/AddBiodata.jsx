import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import DashBoardHeroPages from "../../../components/DashBoardHeroPages/DashBoardHeroPages";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddBiodata = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.profileImage[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      // now send the biodata data to the server
      const biodata = {
        name: data.name,
        biodataType: data.biodataType,
        profileImage: res.data.data.display_url,
        dateOfBirth: data.dateOfBirth,
        height: data.height,
        weight: data.weight,
        age: data.age,
        occupation: data.occupation,
        race: data.race,
        fathersName: data.fathersName,
        mothersName: data.mothersName,
        permanentDivision: data.permanentDivision,
        presentDivision: data.presentDivision,
        expectedPartnerAge: data.expectedPartnerAge,
        expectedPartnerHeight: data.expectedPartnerHeight,
        expectedPartnerWeight: data.expectedPartnerWeight,
        contactEmail: data.contactEmail,
        mobileNumber: data.mobileNumber,
      };

      axiosSecure.post("/biodatas", biodata).then((res) => {
        if (res.data.insertedId) {
          reset();
          Swal.fire({
            position: "center",
            icon: "success",
            title: "You Successfully created Your Bio data",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate("/dashboard/viewBioData")
        }
      });
    }
  };

  return (
    <div>
      <DashBoardHeroPages name="Add Bio Data"></DashBoardHeroPages>
      <form onSubmit={handleSubmit(onSubmit)} className=" p-8">
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2">
          {/* Biodata Type */}
          <div className="flex flex-col w-full  ">
            <label className="mb-2">
              <span>Biodata Type*</span>
            </label>
            <select
              defaultValue="default"
              {...register("biodataType", { required: true })}
              required
              className="w-full text-lg py-2 px-2 border-2 border-[#04AA6D] focus:outline-none    "
            >
              <option disabled value="default">
                Select Biodata Type
              </option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          {/* name  */}
          <div className="flex flex-col w-full  ">
            <label className="mb-2">
              <span>Name*</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              {...register("name", { required: true })}
              required
              className="w-full text-lg px-4 py-2 border-2 border-[#04AA6D] focus:outline-none   "
            />
          </div>

          {/* image input */}
          <div className="flex flex-col w-full  ">
            <label className="mb-2">
              <span>Profile Image*</span>
            </label>
            <input
              {...register("profileImage", { required: true })}
              required
              type="file"
              className="w-full text-lg px-4 py-2 border-2 border-[#04AA6D] focus:outline-none   "
            />
          </div>

          {/* Date of birth */}
          <div className="flex flex-col w-full  ">
            <label className="mb-2">
              <span>Date of birth*</span>
            </label>
            <input
              type="date"
              {...register("dateOfBirth", { required: true })}
              required
              className="w-full text-lg px-4 py-2 border-2 border-[#04AA6D] focus:outline-none   "
            ></input>
          </div>

          {/* Height  */}
          <div className="flex flex-col w-full  ">
            <label className="mb-2">
              <span>Height(cm)*</span>
            </label>
            <select
              defaultValue="default"
              {...register("height", { required: true })}
              required
              className=" w-full text-lg py-2 px-2 border-2 border-[#04AA6D] focus:outline-none    "
            >
              <option disabled value="default">
                Select Height
              </option>
              <option value="140">140</option>
              <option value="145">145</option>
              <option value="150">150</option>
              <option value="155">155</option>
              <option value="160">160</option>
              <option value="165">165</option>
              <option value="170">170</option>
              <option value="175">175</option>
              <option value="180">180</option>
              <option value="185">185</option>
              <option value="190">190</option>
              <option value="195">195</option>
              <option value="200">200</option>
            </select>
          </div>
          {/* Weight  */}
          <div className="flex flex-col w-full  ">
            <label className="mb-2">
              <span>Weight(kg)*</span>
            </label>
            <select
              defaultValue="default"
              {...register("weight", { required: true })}
              required
              className=" w-full text-lg py-2 px-2 border-2 border-[#04AA6D] focus:outline-none    "
            >
              <option disabled value="default">
                Select Weight
              </option>
              <option value="40">40</option>
              <option value="45">45</option>
              <option value="50">50</option>
              <option value="55">55</option>
              <option value="60">60</option>
              <option value="65">65</option>
              <option value="70">70</option>
              <option value="75">75</option>
              <option value="80">80</option>
              <option value="85">85</option>
              <option value="90">90</option>
              <option value="95">95</option>
              <option value="100">100</option>
              <option value="110">110</option>
              <option value="120">120</option>
            </select>
          </div>

          {/* age  */}
          <div className="flex flex-col w-full  ">
            <label className="mb-2">
              <span>Age*</span>
            </label>
            <input
              type="number"
              placeholder="Age"
              {...register("age", { required: true })}
              required
              className="w-full text-lg px-4 py-2 border-2 border-[#04AA6D] focus:outline-none   "
            />
          </div>

          {/* Occupation  */}
          <div className="flex flex-col w-full  ">
            <label className="mb-2">
              <span>Occupation*</span>
            </label>
            <select
              defaultValue="default"
              {...register("occupation", { required: true })}
              required
              className=" w-full text-lg py-2 px-2 border-2 border-[#04AA6D] focus:outline-none    "
            >
              <option disabled value="default">
                Select Occupation
              </option>
              <option value="Engineer">Engineer</option>
              <option value="Doctor">Doctor</option>
              <option value="Artist">Artist</option>
              <option value="Student">Student</option>
              <option value="Entrepreneur">Entrepreneur</option>
              <option value="Designer">Designer</option>
              <option value="Writer">Writer</option>
              <option value="Accountant">Accountant</option>
              <option value="Chef">Chef</option>
              <option value="Scientist">Scientist</option>
              <option value="Photographer">Photographer</option>
              <option value="Lawyer">Lawyer</option>
              <option value="Nurse">Nurse</option>
              <option value="Police Officer">Police Officer</option>
              <option value="Musician">Musician</option>
              <option value="Real Estate Agent">Real Estate Agent</option>
              <option value="Pilot">Pilot</option>
              <option value="Fitness Trainer">Fitness Trainer</option>
              <option value="Marketing Professional">
                Marketing Professional
              </option>
            </select>
          </div>

          {/* Race  */}
          <div className="flex flex-col w-full  ">
            <label className="mb-2">
              <span>Race*</span>
            </label>
            <select
              defaultValue="default"
              {...register("race", { required: true })}
              required
              className=" w-full text-lg py-2 px-2 border-2 border-[#04AA6D] focus:outline-none    "
            >
              <option disabled value="default">
                Select Race
              </option>
              <option value="African American">African American</option>
              <option value="Asian">Asian</option>
              <option value="Caucasian">Caucasian</option>
              <option value="Hispanic/Latino">Hispanic/Latino</option>
              <option value="Native American">Native American</option>
              <option value="Pacific Islander">Pacific Islander</option>
              <option value="Other">Other</option>
            </select>
          </div>

          {/*Fathers name  */}
          <div className="flex flex-col w-full  ">
            <label className="mb-2">
              <span>Fathers Name*</span>
            </label>
            <input
              type="text"
              placeholder="Fathers Name"
              {...register("fathersName", { required: true })}
              required
              className="w-full text-lg px-4 py-2 border-2 border-[#04AA6D] focus:outline-none   "
            />
          </div>

          {/*Mothers name  */}
          <div className="flex flex-col w-full  ">
            <label className="mb-2">
              <span>Mothers Name*</span>
            </label>
            <input
              type="text"
              placeholder="Mothers Name"
              {...register("mothersName", { required: true })}
              required
              className="w-full text-lg px-4 py-2 border-2 border-[#04AA6D] focus:outline-none   "
            />
          </div>

          {/* Permanent Division name  */}
          <div className="flex flex-col w-full  ">
            <label className="mb-2">
              <span>Permanent Division name*</span>
            </label>
            <select
              defaultValue="default"
              {...register("permanentDivision", { required: true })}
              required
              className=" w-full text-lg py-2 px-2 border-2 border-[#04AA6D] focus:outline-none    "
            >
              <option disabled value="default">
                Select Permanent Division name
              </option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Barisal">Barisal</option>
              <option value="Khulna">Khulna</option>
              <option value="Mymensingh">Mymensingh</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Rajshahi">Rajshahi</option>
            </select>
          </div>

          {/* Present Division name  */}
          <div className="flex flex-col w-full  ">
            <label className="mb-2">
              <span>Present Division name*</span>
            </label>
            <select
              defaultValue="default"
              {...register("presentDivision", { required: true })}
              required
              className=" w-full text-lg py-2 px-2 border-2 border-[#04AA6D] focus:outline-none    "
            >
              <option disabled value="default">
                Select Present Division name
              </option>
              <option value="Dhaka">Dhaka</option>
              <option value="Chattogram">Chattogram</option>
              <option value="Rangpur">Rangpur</option>
              <option value="Barisal">Barisal</option>
              <option value="Khulna">Khulna</option>
              <option value="Mymensingh">Mymensingh</option>
              <option value="Sylhet">Sylhet</option>
              <option value="Rajshahi">Rajshahi</option>
            </select>
          </div>

          {/* Expected Partner Age  */}
          <div className="flex flex-col w-full  ">
            <label className="mb-2">
              <span>Expected Partner Age*</span>
            </label>
            <input
              type="number"
              placeholder="Expected Partner Age"
              {...register("expectedPartnerAge", { required: true })}
              required
              className="w-full text-lg px-4 py-2 border-2 border-[#04AA6D] focus:outline-none   "
            />
          </div>

          {/* Expected Partner Height  */}
          <div className="flex flex-col w-full  ">
            <label className="mb-2">
              <span>Expected Partner Height(cm)*</span>
            </label>
            <select
              defaultValue="default"
              {...register("expectedPartnerHeight", { required: true })}
              required
              className=" w-full text-lg py-2 px-2 border-2 border-[#04AA6D] focus:outline-none    "
            >
              <option disabled value="default">
                Select Expected Partner Height
              </option>
              <option value="140">140</option>
              <option value="145">145</option>
              <option value="150">150</option>
              <option value="155">155</option>
              <option value="160">160</option>
              <option value="165">165</option>
              <option value="170">170</option>
              <option value="175">175</option>
              <option value="180">180</option>
              <option value="185">185</option>
              <option value="190">190</option>
              <option value="195">195</option>
              <option value="200">200</option>
            </select>
          </div>

          {/* Expected Partner Weight  */}
          <div className="flex flex-col w-full  ">
            <label className="mb-2">
              <span>Expected Partner Weight(kg)*</span>
            </label>
            <select
              defaultValue="default"
              {...register("expectedPartnerWeight", { required: true })}
              required
              className=" w-full text-lg py-2 px-2 border-2 border-[#04AA6D] focus:outline-none    "
            >
              <option disabled value="default">
                Select Expected Partner Weight
              </option>
              <option value="40">40</option>
              <option value="45">45</option>
              <option value="50">50</option>
              <option value="55">55</option>
              <option value="60">60</option>
              <option value="65">65</option>
              <option value="70">70</option>
              <option value="75">75</option>
              <option value="80">80</option>
              <option value="85">85</option>
              <option value="90">90</option>
              <option value="95">95</option>
              <option value="100">100</option>
              <option value="110">110</option>
              <option value="120">120</option>
            </select>
          </div>

          {/* Contact Email  */}
          <div className="flex flex-col w-full  ">
            <label className="mb-2">
              <span>Contact Email*</span>
            </label>
            <input
              type="text"
              {...register("contactEmail", { required: true })}
              defaultValue={user.email}
              required
              readOnly
              className="w-full text-black text-lg px-4 py-2 border-2 border-[#04AA6D] focus:outline-none   "
            />
          </div>

          {/* Mobile Number  */}
          <div className="flex flex-col w-full  ">
            <label className="mb-2">
              <span>Mobile Number*</span>
            </label>
            <input
              type="text"
              placeholder="Mobile Number"
              {...register("mobileNumber", { required: true })}
              required
              className="w-full text-lg px-4 py-2 border-2 border-[#04AA6D] focus:outline-none   "
            />
          </div>
        </div>

        <div className="flex justify-center mb-16 mt-10">
          <button className="px-5 py-3     text-white bg-[#04AA6D] hover:bg-transparent border-2 border-[#04AA6D] hover:text-[#04AA6D] ">
            Save And Publish
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddBiodata;
