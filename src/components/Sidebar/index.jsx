import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faBell, faBookmark, faEllipsisH, faEnvelope, faFeatherAlt, faHashtag, faHome, faUser, faUserFriends } from '@fortawesome/free-solid-svg-icons'
import PropTypes from 'prop-types'; // ES6

const Navitem = ({ icon, text }) => (

    <div className="flex items-center rounded-full cursor-pointer p-3 hover:bg-gray-800 transition-all duration-500 hover:scale-105">

        <FontAwesomeIcon icon={icon} className='text-2xl mr-4' />
        <span className='text-xl hidden xl:inline'>{text}</span>

    </div>

)

export function Sidebar() {



    return (

        <div className="w-20 xl:w-64 sticky top-0 px-2 pr-4 h-screen">


            <FontAwesomeIcon icon={faTwitter} className='text-blue-400 text-3xl m-4' />
            <nav>

                <Navitem icon={faHome} text='Home' />
                <Navitem icon={faHashtag} text='Explore' />
                <Navitem icon={faBell} text='Notification' />
                <Navitem icon={faEnvelope} text='Messages' />
                <Navitem icon={faBookmark} text='Favorites' />
                <Navitem icon={faUserFriends} text='Communities' />
                <Navitem icon={faTwitter} text='Premium' />
                <Navitem icon={faUser} text='Profile' />
                <Navitem icon={faEllipsisH} text='More' />


            </nav>

            <button className='bg-blue-400 text-white rounded-full font-bold px-4 py-3 mt-4 w-full cursor-pointer flex items-center text-center justify-center hover:opacity-80 transition-all duration-300 hover:scale-105'>

                <FontAwesomeIcon
                    icon={faFeatherAlt}
                    className="text-white text-3xl inline xl:!hidden"
                />

                <span className='hidden xl:inline'>Twitter</span>

            </button>


        </div>


    )


}

Navitem.propTypes = {
    icon: PropTypes.any.isRequired, 
    text: PropTypes.string.isRequired 
};