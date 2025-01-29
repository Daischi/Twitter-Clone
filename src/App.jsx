
import {Sidebar} from './components/Sidebar/index'
function App() {
  

  return (
    
      <div className='flex mx-auto max-w-7xl'>
        
        
        <Sidebar/>
        <main className='flex-grow border-l border-r border-gray-700 max-w-xl'>

          <header className='sticky top-0 z-10 bg-[var(--twitter-background)] backdrop-blur-sm'>

            <h2 className='p-4 text-xl font-bold'>For you</h2>



          </header>
        </main>


      </div>
      
   
  )
}

export default App
