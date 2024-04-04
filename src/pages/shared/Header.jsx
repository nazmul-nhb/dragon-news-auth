import logo from '../../assets/logo.svg';
import moment from 'moment';

const Header = () => {
    // const today = new Date();
    return (
        <div className='flex flex-col gap-2 justify-center items-center mt-10'>
            <img src={logo} alt="Dragon News" />
            <p className="text-lg mt-3 text-[#706F6F]">Journalism without Fear or Favour</p>
            <p className="text-2xl font-medium">{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;