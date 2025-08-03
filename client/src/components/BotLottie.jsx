import Lottie from 'lottie-react'
import botAnimation from '../assets/bot-wave.json' 

const BotLottie = () => {
  return (
    <div className="w-32 h-32 mx-auto">
      <Lottie animationData={botAnimation} loop={true} />
    </div>
  )
}

export default BotLottie
