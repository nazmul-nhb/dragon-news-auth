import PropTypes from 'prop-types';
import { IoShareSocialOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { Link } from 'react-router-dom';
const NewsCard = ({ aNews }) => {
    const { title, author, _id, image_url, details, total_view, rating } = aNews;
    return (
        <div>
            <div>
                <div>
                    <img src={author.img} alt={author.name} />
                    <div>
                        <h4>{author.name}</h4>
                        <h5>{author.published_date}</h5>
                    </div>
                </div>
                <div>
                    <CiBookmark></CiBookmark>
                    <IoShareSocialOutline></IoShareSocialOutline>
                </div>
            </div>
            <h3>{title}</h3>
            <figure><img src={image_url} alt={title} /></figure>
            {
                details.length > 250
                    ? <p>{details.slice(0, 250)} <Link to={`/news/${_id}`} className='text-red-600 font-bold'>Read More...</Link></p>
                    : <p>{details}</p>
            }
            <div>
                <div>{rating.number}</div>
                <div>{total_view}</div>
            </div>
        </div>
    );
};

export default NewsCard;

NewsCard.propTypes = {
    aNews: PropTypes.object
}