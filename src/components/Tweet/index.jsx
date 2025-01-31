import { faComment, faEllipsisH, faLifeRing, faRetweet } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Tweet({ tweet }) {

    function handleAction(action){




    }

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
                    <p className="" >{tweet.content} </p>
                        {tweet.Image && <img src={tweet.Image} className="mt-3 rounded-2xl max-w-full h-auto" alt="Imagem de conteudo do Usuario"/>}

                        <div className="flex justify-between mt-4 text-gray-500">

                            <div className="flex items-center cursor-pointer ">
                                <FontAwesomeIcon icon={faComment} onClick={() => handleAction('comment')}/>
                                <span className="ml-2">0</span>

                            </div>
                            <div className="flex items-center cursor-pointer ">
                                <FontAwesomeIcon icon={faRetweet} onClick={() => handleAction('retweet')}/>
                                <span className="ml-2">0</span>

                            </div>
                            <div className="flex items-center cursor-pointer ">
                                <FontAwesomeIcon icon={fa} onClick={() => handleAction('like')}/>
                                <span className="ml-2">0</span>

                            </div>
                            <div className="flex items-center cursor-pointer ">
                                <FontAwesomeIcon icon={faComment} onClick={() => handleAction('commente')}/>
                                <span className="ml-2">0</span>

                            </div>

                        </div>
                    
                </div>

            </div>





        </div>



    )













}