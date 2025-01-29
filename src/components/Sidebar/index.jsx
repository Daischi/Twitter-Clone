import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'

const Navitem = ({ icon, text }) => (

    <div className="flex items-center rounded-full cursor-pointer p-3 hover:bg-gray-600 transition-all duration-500">

        <FontAwesomeIcon icon={icon} className='text-2xl mr-4' />
        <span className='text-xl hidden xl:inline'>{text}</span>

    </div>

)

export function Sidebar() {



    return (

        <div className="w-20 xl:w-64 sticky top-0 px-2 h-screen">


            <FontAwesomeIcon icon={faTwitter} className='text-blue-400 text-3xl m-4' />




        </div>


    )


}

