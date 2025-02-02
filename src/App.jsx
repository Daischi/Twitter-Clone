
import { Sidebar } from './components/Sidebar/index'
import { Tweet } from './components/Tweet'
import { TwitterForm } from './components/TwitterForm'
import { v4 } from 'uuid'
import { getAvatar, getRandomImage } from './utils/generateImages'
import { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [tweets, setTweets] = useState([])


  useEffect(() => {
    const interval = setInterval(() => {
      addNewRandomTweet()

    }, 10000)
    return () => clearInterval(interval)
  }, [])

  const addNewRandomTweet = () => {
    const randomTweets = [
      'Acabei de entrar no clone do Twitter! Estou animado para me conectar com todos aqui. 👋 #NovoUsuário',
      'Mais um dia, mais uma linha de código. Continuem avançando, colegas desenvolvedores! 💻 #VidaDeCodificação',
      'Quem mais vai ficar acordado até tarde para assistir à chuva de meteoros hoje à noite? 🌠 #CéuNoturno',
      'Lembrete: seja gentil consigo mesmo e com os outros. Um pouco de compaixão faz toda a diferença. #Positividade',
      'Dica técnica do dia: sempre faça backup dos seus dados! Você vai agradecer a si mesmo mais tarde. 💾 #ConselhoTecnológico',
      'Nada como um café quente e um bom desafio de programação para começar o dia! ☕💡 #Desenvolvimento',
      'O aprendizado nunca para! Qual é a última tecnologia que você está estudando? 📚 #SempreAprendendo',
      'Se um bug está te deixando maluco, faça uma pausa. A solução pode aparecer quando você menos espera! 🐛🔧 #DicaDeDev',
      'A inteligência artificial está revolucionando o mundo! Qual a sua opinião sobre isso? 🤖 #FuturoTech',
      'Você já elogiou alguém hoje? Pequenos gestos podem mudar o dia de alguém. 💙 #GentilezaGeraGentileza',
      'Novos desafios trazem novas oportunidades. Nunca tenha medo de tentar algo novo! 🚀 #Motivação',
      'Sexta-feira chegou! O que vocês estão planejando para o fim de semana? 🎉 #Relaxamento',
      'A programação é uma arte, e cada linha de código é um traço no quadro da inovação. 🎨💻 #CódigoCriativo',
      'A melhor maneira de prever o futuro é criá-lo. Vamos codar! 🚀 #Inovação',
      'Segundas-feiras são apenas bugs no código da semana. Vamos depurá-los! 🐞💻 #HumorDeDev',
      'Se fosse possível viajar no tempo, para qual época você iria? ⏳ #Curiosidade',
      'A cada erro cometido, uma nova lição aprendida. Falhar faz parte do progresso! 💡 #Aprendizado',
      'Você prefere desenvolver de madrugada ou durante o dia? 🌙☀️ #RotinaDeDev',
      'Escrever código é como cozinhar: siga a receita, mas não tenha medo de experimentar! 🍳💻 #Criatividade',
      'O que te motiva a continuar aprendendo todos os dias? 💭 #Reflexão',
      'Pausa para o café e uma revisão de código! Quem mais tem esse ritual? ☕ #DevLife',
      'Seu código pode estar funcionando, mas ele está otimizado? 🤔 #Performance',
      'Já bebeu água hoje? A hidratação é importante até para programadores! 💧 #DicaSaudável',
      'Quanto mais você aprende, mais percebe o quanto ainda há para aprender. 🚀 #Evolução',
      'O fim de semana está aí! Hora de relaxar ou continuar codando? 😆 #DevViciado',
      'A vida é um grande algoritmo: cheia de loops, condições e, às vezes, alguns bugs. 🤖 #FilosofiaDev',
      'O que você faria se tivesse um dia inteiro sem internet? 🌍📵 #Desafio',
      'Se código fosse música, qual seria o gênero do seu projeto atual? 🎵💻 #DevMusical',
      'Se você pudesse adicionar um superpoder ao seu código, qual seria? ⚡ #IdeiasMalucas',
      'O melhor framework é aquele que resolve o seu problema. Escolha com sabedoria! 🔍 #DicasDeDev',
      'Se programar fosse um jogo, qual seria a sua dificuldade atual? 🎮 #DevGamer',
      'Escrever documentação pode ser chato, mas seu eu do futuro agradecerá! 📖 #BoasPráticas',
      'O que faz um bom programador? A lógica, a criatividade ou a paciência? 🤔 #DiscussãoTech',
      'Nada é impossível, só leva um pouco mais de tempo para ser resolvido! ⏳ #Persistência',
      'Refatorar código é como arrumar a casa: ninguém gosta, mas o resultado vale a pena. 🏡💻 #CódigoLimpo',
      'Se tivesse que explicar programação para uma criança, como faria? 🎈 #Desafio',
      'Sabe aquela sensação de quando um código funciona de primeira? Raro, mas incrível! 🎉 #DevFeliz',
      'Qual foi o erro mais bizarro que você já encontrou ao programar? 😂 #FalhaÉAprendizado',
      'Escrever código pode ser difícil, mas consertar código de outra pessoa é um nível acima! 🧐 #DesafioDev'
    ];



    const randomTweet = randomTweets[Math.floor(Math.random() * randomTweets.length)]


    addNewTweet(randomTweet, Math.random() > 0.7)
  }

  useEffect(() => {




  }, [tweets])


  const addNewTweet = (content, includeImage = false) => {
    const newTweet = {
      id: v4(),
      name: "User",
      username: `user${Math.floor(Math.random() * 1000)}`,
      avatar: getAvatar(`user${Math.floor(Math.random() * 1000)} @gmail.com`),
      content,
      time: new Date().toLocaleString([], {

        hour: '2-digit',
        minute: '2-digit'



      }),
      Image: includeImage ? getRandomImage() : null,
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


        <TwitterForm onTweet={(conteudo) => addNewTweet(conteudo, Math.random() > 0.6)} />


        <div>
          {tweets.map(tweet => (<Tweet key={tweet.id} tweet={tweet} />))}


        </div>
      </main>
      <aside className='hidden xl:block w-80 px-4'>
        <div className='sticky top-0 pt-2'>


          <div className='relative'>

            <FontAwesomeIcon icon={faSearch} className='absolute top-3 left-3 text-gray-500' />
            <input placeholder='Search Twitter' className='w-full bg-gray-800 outline-none rounded-full py-2 pl-10 pr-4 text-white' />


          </div>




          <div className='bg-gray-800 rounded-xl mt-4 p-4'>

            <h2 className='font-bold text-xl mb-4 '>Subscribe to Premium</h2>
            <p className='text-gray-400 mb-4'>
              Subscribe to unlock new features and, if eligible, receive a share of the revenue.
            </p>
            <button className='bg-[var(--twitter-blue)] text-white font-bold py-2 px-4 rounded-full hover:bg-blue-500 duration-300 transition-all hover:scale-105'>

              Subscribe
            </button>
          </div>


          <div className='bg-gray-800 rounded-xl mt-4 p-4'>
            <h2 className='font-bold text-xl mb-4'>Whats happening</h2>
            <TrendItem category="NFL · LIVE" name="Cardinals at Bills" />
            <TrendItem category="Sports · Trending" name="Kyle Dugger" />
            <TrendItem category="Sports · Trending" name="Anthony Richardson" tweetCount="13,445" />
            <TrendItem category="Sports · Trending" name="Bryce Young" tweetCount="5,455" />
            <TrendItem category="Sports · Trending" name="Daboll" tweetCount="1,342" />
          </div>

        </div>



      </aside>




    </div>


  )
}

export default App
