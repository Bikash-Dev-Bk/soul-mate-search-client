import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import "swiper/css";
import "swiper/css/navigation";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";

const SuccessStory = () => {
  const axiosPublic = useAxiosPublic();

  const { data: story = [] } = useQuery({
    queryKey: ["story"],
    queryFn: async () => {
      const res = await axiosPublic.get("/stories");
      return res.data;
    },
  });

  const successStory = story.sort(
    (a, b) => new Date(a.marriageDate) - new Date(b.marriageDate)
  );


  return (
    <div className="max-w-[1280px] mx-auto p-5 my-20">
      <h2 className="text-center text-3xl font-bold mb-16">
        Matrimony Service with Millions of Success Stories
      </h2>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {successStory.map((story) => (
          <SwiperSlide key={story._id} story={story}>
            <div className="flex flex-col items-center text-justify md:text-center p-8 md:p-12">
              <img
                src={story.coupleImage}
                alt=""
                className="w-4/12 rounded-xl"
              />
              <Rating
                className="mt-5"
                style={{ maxWidth: 180 }}
                value={story.reviewStar}
                readOnly
              />
              <div className="p-5 text-center ">
                <h2 className="font-semibold">
                  Marriage Date: {story.marriageDate}
                </h2>
                <p className="mt-2 text-justify">{story.successStoryText}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SuccessStory;
