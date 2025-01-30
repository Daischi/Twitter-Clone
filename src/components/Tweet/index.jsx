export function Tweet ({tweet}){

    return(

        <div className="border-b border-gray-800 p-4 hover:bg-gray-800 transition-all duration-300">

            <div className="flex space-x-3">

                <img src={tweet.avatar} alt="user avatar"  className="rounded-full w-12 h-12"/>

            </div>


        </div>
    


    )













}