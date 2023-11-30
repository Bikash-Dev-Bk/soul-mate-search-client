import { useQuery } from "@tanstack/react-query";
import DashBoardHeroPages from "../../../components/DashBoardHeroPages/DashBoardHeroPages";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Modal from "./Modal";
import { useState } from "react";

const SuccessStory = () => {
  const axiosPublic = useAxiosPublic();

  const { data: stories = [] } = useQuery({
    queryKey: ["stories"],
    queryFn: async () => {
      const res = await axiosPublic.get("/stories");
      return res.data;
    },
  });

  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => setModalOpen(true);
  const closeModal = () => setModalOpen(false);

  return (
    <div>
      <DashBoardHeroPages name="Success Story"></DashBoardHeroPages>
      <div className="max-w-[1280px] mx-auto my-12 p-5">
        <table className="w-full leading-normal font-semibold my-12 p-12">
          <thead className="font-bold">
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-500 bg-gray-200 text-left text-md  text-gray-700 uppercase tracking-wider">
                Male Biodata Id
              </th>
              <th className="px-5 py-3 border-b-2 border-gray-500 bg-gray-200 text-left text-md  text-gray-700 uppercase tracking-wider">
                Female Biodata Id
              </th>

              <th className="px-5 py-3 border-b-2 border-gray-500 bg-gray-200 text-left text-md  text-gray-700 uppercase tracking-wider">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {stories.map((story) => (
              <tr key={story._id}>
                <td className="px-5 py-5 border-b border-gray-500 bg-white text-sm">
                  {story.selfBiodata}
                </td>
                <td className="px-5 py-5 border-b border-gray-500 bg-white text-sm">
                  {story.partnerBiodata}
                </td>

                <td className="px-5 py-5 border-b border-gray-500 bg-white text-sm">
                  <button
                    onClick={openModal}
                    className="text-white hover:text-[#04AA6D] bg-[#04AA6D] hover:bg-white border-2 border-[#04AA6D] px-4 py-2 rounded-full"
                  >
                    View Story
                  </button>
                  <Modal isOpen={isModalOpen} onClose={closeModal}>
                    <div className="p-6">
                      <h1 className="text-2xl font-semibold mb-4">
                        Success Story
                      </h1>
                      <p>{story.successStoryText}</p>
                      <button
                        onClick={closeModal}
                        className="mt-4 bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                      >
                        Close Modal
                      </button>
                    </div>
                  </Modal>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SuccessStory;
