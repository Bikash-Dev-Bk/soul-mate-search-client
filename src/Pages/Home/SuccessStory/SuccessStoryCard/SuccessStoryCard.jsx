import PropTypes from "prop-types";


const SuccessStoryCard = ({story}) => {

    const {coupleImage, marriageDate, successStoryText, reviewStar} = story;

    return (
        <div className="shadow-xl rounded-xl hover:shadow-2xl">
          <img
            src={coupleImage}
            alt=""
            className="w-full rounded-tl-xl rounded-tr-xl"
          />
          <div className="p-5 font-semibold">
            <h2>Marriage Date: {marriageDate}</h2>
            <p>Review: {reviewStar} stars</p>
            <p className="mt-2 text-justify">{successStoryText}</p>
          </div>
        </div>
      );
};

SuccessStoryCard.propTypes = {
    story: PropTypes.object.isRequired,
  };

export default SuccessStoryCard;