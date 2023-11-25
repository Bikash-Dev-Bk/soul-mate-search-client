import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import "swiper/css";
import "swiper/css/navigation";

const SuccessStory = () => {
  const [successStory, setSuccessStory] = useState([]);

  useEffect(() => {
    fetch("successStory.json")
      .then((res) => res.json())
      .then((data) => {
        const sortedData = data.sort(
          (a, b) => new Date(a.marriageDate) - new Date(b.marriageDate)
        );
        setSuccessStory(sortedData);
      });
  }, []);

  return (
    <div className="max-w-[1280px] mx-auto p-5 my-32">
      <h2 className="text-center text-3xl font-bold mb-16">
        Matrimony Service with Millions of Success Stories
      </h2>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {successStory.map((story) => (
          <SwiperSlide key={story.id} story={story}>
            <div className="flex flex-col items-center text-justify md:text-center p-8 md:p-12 lg:px-32">
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
                <h2 className="font-semibold">Marriage Date: {story.marriageDate}</h2>
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
