import { useState } from 'react'
import { Heart } from 'lucide-react'
import { motion } from 'framer-motion'

export default function LikeButton({ likes = 0, onLike, isLiked = false, user }) {
  const [isLiking, setIsLiking] = useState(false)

  const handleLike = async () => {
    if (!user) return
    setIsLiking(true)
    await onLike()
    setIsLiking(false)
  }

  return (
    <motion.button
      onClick={handleLike}
      disabled={!user || isLiking}
      whileHover={user ? { scale: 1.1 } : {}}
      whileTap={user ? { scale: 0.9 } : {}}
      className={`flex items-center gap-2 transition-colors ${
        user ? 'cursor-pointer hover:text-red-400' : 'cursor-not-allowed opacity-50'
      } ${isLiked ? 'text-red-400' : 'text-slate-400'}`}
    >
      <motion.div
        animate={isLiked ? { scale: [1, 1.2, 1] } : {}}
        transition={{ duration: 0.3 }}
      >
        <Heart className="w-4 h-4" fill={isLiked ? 'currentColor' : 'none'} />
      </motion.div>
      <span className="text-xs font-medium">{likes}</span>
    </motion.button>
  )
}
