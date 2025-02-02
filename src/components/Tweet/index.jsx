import { faChartBar, faComment, faEllipsisH, faHeart,faRetweet, faUpload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import PropTypes from 'prop-types'; // ES6


export function Tweet({ tweet }) {
    const [comments, setComments] = useState(0)
    const [like, setLikes] = useState(0)
    const [retweet, setRetweet] = useState(0)

    function handleAction(action) {

        switch (action) {
            case 'like':
                setLikes((like) => like + 1)
                break;


            case 'retweet':
                setRetweet((retweet) => retweet + 1)
                break;

            default:
                setComments((comments) => comments + 1)
                break;
        }


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
                        <FontAwesomeIcon icon={faEllipsisH} className="text-gray-500" />
                    </div>
                    <p className="" >{tweet.content} </p>
                    {tweet.Image && <img src={tweet.Image} className="mt-3 rounded-2xl max-w-full h-auto" alt="Imagem de conteudo do Usuario" />}

                    <div className="flex justify-between mt-4 text-gray-500">

                        <div className="flex items-center cursor-pointer hover:text-blue-400 transition-all duration-300">
                            <FontAwesomeIcon icon={faComment} onClick={() => handleAction('comments')} />
                            <span className="ml-2">{comments}</span>

                        </div>
                        <div className="flex items-center cursor-pointer hover:text-green-300 transition-all duration-300">
                            <FontAwesomeIcon icon={faRetweet} onClick={() => handleAction('retweet')} />
                            <span className="ml-2">{retweet}</span>

                        </div>

                        <div className="flex items-center cursor-pointer hover:text-red-400 transition-all duration-300">
                            <FontAwesomeIcon icon={faHeart} onClick={() => handleAction('like')} />
                            <span className="ml-2">{like}</span>

                        </div>
                        <div className="flex items-center cursor-pointer hover:text-pink-300 transition-all duration-300">
                            <FontAwesomeIcon icon={faChartBar} onClick={() => handleAction('')} />
                            <span className="ml-2">0</span>

                        </div>
                        <div className="flex items-center cursor-pointer ">
                            <FontAwesomeIcon icon={faUpload} />



                        </div>

                    </div>

                </div>

            </div>





        </div>



    )


}

Tweet.propTypes = {


    tweet: PropTypes.func


}