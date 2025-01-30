import { faCalendarAlt, faChartBar, faFilm, faImage, faMapMarkedAlt, faSmile } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function TwitterForm ({onTweet}){

    function handleSubmit (){}
return (


    <div className="p-4 border-b-2 border-gray-800">

        <textarea className="w-full bg-transparent text-white text-xl resize-none outline-none" placeholder="What's happening ?"></textarea>


    <div className="flex justify-between items-center mt-4">

            <div className="flex space-x-4">

                <FontAwesomeIcon icon={faImage} className="text-blue-400 cursor-pointer hover:scale-105 transition-all duration-300 hover:opacity-80 "/>
                <FontAwesomeIcon icon={faFilm} className="text-blue-400 cursor-pointer hover:scale-105 transition-all duration-300 hover:opacity-80  "/>
                <FontAwesomeIcon icon={faChartBar} className="text-blue-400 cursor-pointer hover:scale-105 transition-all duration-300 hover:opacity-80 "/>
                <FontAwesomeIcon icon={faSmile} className="text-blue-400 cursor-pointer hover:scale-105 transition-all duration-300 hover:opacity-80 "/>
                <FontAwesomeIcon icon={faCalendarAlt} className="text-blue-400 cursor-pointer hover:scale-105 transition-all duration-300 hover:opacity-80 "/>
                <FontAwesomeIcon icon={faMapMarkedAlt} className="text-blue-400 cursor-pointer hover:scale-105 transition-all duration-300 hover:opacity-80 "/>

            </div>

            <button className="bg-blue-400 text-white font-bold px-4 py-2 rounded-full hover:opacity-80 cursor-pointer hover:scale-105 transition-all duration-300" onClick={handleSubmit}>

            Tweet

        </button>

    </div>
        

    </div>

)

}