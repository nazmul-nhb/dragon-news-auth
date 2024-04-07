import PropTypes from 'prop-types';
import { IoShareSocialOutline } from "react-icons/io5";
import { CiBookmark } from "react-icons/ci";
import { Link } from 'react-router-dom';
import { FaEye, FaStar } from 'react-icons/fa';
import { useEffect, useState } from 'react';

const NewsCard = ({ aNews }) => {
    const [star, setStar] = useState(0);
    const [arrayStar, setArrayStar] = useState(0);

    const { title, author, _id, image_url, details, total_view, rating } = aNews;
    useEffect(() => {
        setStar(rating.number);
        const starArray = Array.from({ length: Math.round(star) }, (_, index) => index + 1);
        setArrayStar(starArray);
    }, [rating, star]);

    return (
        <div className='my-5 border border-[#E7E7E7]'>
            <div className='bg-[#F3F3F3] p-4 flex justify-between items-center'>
                <div className='flex gap-4 items-center'>
                    <img className='w-10 h-10 rounded-full' src={author.img} alt={author.name} />
                    <div className='flex flex-col gap-1'>
                        <h4 className='text-[#403F3F] font-semibold'>{author.name}</h4>
                        <h5 className='text-[#706F6F] text-sm'>{author.published_date}</h5>
                    </div>
                </div>
                <div className='flex gap-4 items-center text-xl text-[#706F6F]'>
                    <CiBookmark></CiBookmark>
                    <IoShareSocialOutline></IoShareSocialOutline>
                </div>
            </div>
            <div className="px-5 py-6">
                <h3 className='text-xl text-[#403F3F] font-bold mb-5'>{title}</h3>
                <figure className='mb-8 rounded-md'><img src={image_url} alt={title} /></figure>
                <div className="text-[#706F6F]">
                    {
                        details.length > 250
                            ? <p>{details.slice(0, 250)} <Link to={`/news/${_id}`} className='text-[#fe7827] font-bold'>Read More...</Link></p>
                            : <p>{details}</p>
                    }
                </div>
                <hr className='border border-[#E7E7E7] my-5' />
                <div className='flex items-center justify-between text-[#706F6F] font-medium'>
                    <div className='flex gap-2 items-center justify-center'>
                        {
                            star && arrayStar.map(star => <FaStar key={star} className='text-[#fe7827] text-2xl'></FaStar>)
                        }
                        <p className="ml-2">{rating.number}</p>
                    </div>
                    <div className='flex items-center gap-4'><FaEye className='text-2xl'></FaEye>{total_view}</div>
                </div>
            </div>
        </div>
    );
};

export default NewsCard;

NewsCard.propTypes = {
    aNews: PropTypes.object
}