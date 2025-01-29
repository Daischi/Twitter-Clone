import { faCalendarAlt, faChartBar, faFilm, faImage, faMapMarkedAlt, faSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function TwitterForm (){


return (


    <div className="p-4 border-b-2 border-gray-800">

        <textarea className="w-full bg-transparent text-white text-xl resize-none outline-none" placeholder="What's happening ?"></textarea>


    <div className="flex justify-between items-center mt-4">

            <div className="flex space-x-4">

                <FontAwesomeIcon icon={faImage} className="text-blue-400 cursor-pointer"/>
                <FontAwesomeIcon icon={faFilm} className="text-blue-400 cursor-pointer"/>
                <FontAwesomeIcon icon={faChartBar} className="text-blue-400 cursor-pointer"/>
                <FontAwesomeIcon icon={faSmile} className="text-blue-400 cursor-pointer"/>
                <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-400 cursor-pointer"/>
                <FontAwesomeIcon icon={faMapMarkedAlt} className="text-blue-400 cursor-pointer"/>

            </div>

    </div>


    </div>

)

}