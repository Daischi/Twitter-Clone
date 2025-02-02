import PropTypes from 'prop-types'; // ES6
import { getAvatar } from '../../utils/generateImages';


export function FollowItem({ name, username }) {
    
    
    const avatar = getAvatar(`${name + Math.floor(Math.random() * 1000)}@email.com`);
  
    return (
      <div className='flex items-center justify-between py-3 hover:bg-gray-800 transition-all duration-300'>
        <div className='flex items-center'>
          <img src={avatar} alt="user avatar" className='w-12 h-12 rounded-full mr-3' />
          <div>
            <p className='font-bold'>{name}</p>
            <p className='text-gray-500'>{username}</p>
          </div>
        </div>
        <div>
          <button className='bg-white text-black font-bold px-4 py-2 rounded-full hover:bg-gray-300 transition-all duration-300'>follow</button>
        </div>
      </div>
    );
  }


  FollowItem.propTypes = {
    username: PropTypes.string,
    name: PropTypes.string,
  };
  
  