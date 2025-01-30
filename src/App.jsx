
import { Sidebar } from './components/Sidebar/index'
import { Tweet } from './components/Tweet'
import { TwitterForm } from './components/TwitterForm'
import { v4 } from 'uuid'
import { getAvatar, getRandomImage } from './utils/generateImages'
import { useState, useEffect } from 'react'

function App() {
  const [tweets, setTweets] = useState([])

    useEffect(() => {




    }, [tweets])
  

  const addNewTweet = (content, includeImage = false) => {
    const newTweet = {
      id: v4(),
      name: "User",
      username: `user${Math.floor(Math.random() * 1000)}`,
      avatar: getAvatar(`user${Math.floor(Math.random() * 1000)} @gmail.com`),
      content,
      time: new Date().toLocaleString([],{
        
        hour: '2-digit',
        minute: '2-digit'



      }),
      Image: includeImage ? getRandomImage(): null,
      likes: 0,
      retweets: 0,
      comments: 0,

    }
    setTweets((prevTweets) => [newTweet, ...prevTweets])

  }
  
  

  return (

    <div className='flex mx-auto max-w-7xl'>


      <Sidebar />
      <main className='flex-grow border-l border-r border-gray-700 max-w-xl'>

        <header className='sticky top-0 z-10 bg-[var(--twitter-background)] backdrop-blur-sm'>

          <h2 className='p-4 text-xl font-bold'>For you</h2>



        </header>


        <TwitterForm onTweet={(conteudo) => addNewTweet (conteudo, Math.random() > 0.6)}/>


        <div>

          <Tweet />

        </div>
      </main>




    </div>


  )
}

export default App
