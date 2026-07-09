import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { MessageCircle, Send } from 'lucide-react'

export default function CommentPanel({ comments = 0, onComment, commentList = [], user }) {
  const [isOpen, setIsOpen] = useState(false)
  const [commentText, setCommentText] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async () => {
    if (!commentText.trim() || !user) return
    setIsSubmitting(true)
    await onComment(commentText)
    setCommentText('')
    setIsSubmitting(false)
  }

  return (
    <div className="relative">
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
      >
        <MessageCircle className="w-4 h-4" />
        <span className="text-xs font-medium">{comments}</span>
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute bottom-full left-0 mb-2 w-64 bg-slate-900 border border-white/10 rounded-lg shadow-lg p-4 z-10"
          >
            <div className="space-y-3 max-h-64 overflow-y-auto mb-4">
              {commentList && commentList.map((comment) => (
                <div key={comment.id} className="text-sm">
                  <p className="font-medium text-white text-xs mb-1">{comment.user.name}</p>
                  <p className="text-slate-300 text-xs">{comment.text}</p>
                  <p className="text-slate-500 text-xs mt-1">
                    {new Date(comment.timestamp).toLocaleTimeString()}
                  </p>
                </div>
              ))}
              {(!commentList || commentList.length === 0) && (
                <p className="text-xs text-slate-400">No comments yet</p>
              )}
            </div>

            {user ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={commentText}
                  onChange={(e) => setCommentText(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSubmit()}
                  placeholder="Add a comment..."
                  className="flex-1 px-3 py-2 rounded bg-white/5 border border-white/10 text-sm text-white placeholder-slate-500 focus:border-cyan-500 focus:outline-none"
                />
                <motion.button
                  onClick={handleSubmit}
                  disabled={!commentText.trim() || isSubmitting}
                  whileHover={commentText.trim() ? { scale: 1.05 } : {}}
                  whileTap={commentText.trim() ? { scale: 0.95 } : {}}
                  className="p-2 rounded bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-400 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-4 h-4" />
                </motion.button>
              </div>
            ) : (
              <p className="text-xs text-amber-400 bg-amber-500/10 border border-amber-500/20 rounded px-2 py-1">
                Sign in to comment
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
