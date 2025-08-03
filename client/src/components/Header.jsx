import { BotIcon } from 'lucide-react'

const Header = () => {
  return (
    <header className="flex items-center gap-3 px-6 py-4 bg-[#0f0f0f] border-b border-gray-800">
      <div className="bg-orange p-2 rounded-full">
        <BotIcon className="h-6 w-6 text-black" />
      </div>
      <h2 className="text-xl font-bold text-white">AI Companion</h2>
    </header>
  )
}

export default Header
