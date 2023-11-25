import { useEffect, useState } from "react";
import SuccessStoryCard from "./SuccessStoryCard/SuccessStoryCard";

const SuccessStory = () => {

    const [successStory, setSuccessStory] = useState([]);

    useEffect(() => {
        fetch("successStory.json")
          .then((res) => res.json())
          .then((data) => {
            const sortedData = data.sort((a, b) => new Date(a.marriageDate) - new Date(b.marriageDate));
            setSuccessStory(sortedData)
        });
      }, []);

    return (
        <div className="max-w-[1280px] mx-auto p-5 my-32">
          <h2 className="text-center text-3xl font-bold mb-16">Matrimony Service with Millions of Success Stories</h2>
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-between items-center">
            {successStory.slice(0, 6).map((story) => (
              <SuccessStoryCard
                key={story.id}
                story={story}
              ></SuccessStoryCard>
            ))}
          </div>
        </div>
      );
    };

export default SuccessStory;