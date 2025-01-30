import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Tweet({ tweet }) {

    return (

        <div className="border-b border-gray-800 p-4 hover:bg-gray-800 transition-all duration-300">

            <div className="flex space-x-3">

                <img src={tweet.avatar} alt="user avatar" className="rounded-full w-12 h-12" />
                <div className="flex-1">
                    <div className="flex items-center justify-between">
                        <div>
                            <span className="font-bold">

                                {tweet.name}

                            </span>
                            <span className="text-gray-500 ml-2">

                                @{tweet.username}

                            </span>
                            <span className="text-gray-500 ml-2">

                            · {tweet.time}

                            </span>

                        </div>
                        <FontAwesomeIcon icon={faEllipsisH} className="text-gray-500"/>
                    </div>
                    <p className="mt-2">
                        {tweet.content}
                    </p>
                </div>

            </div>





        </div>



    )













}