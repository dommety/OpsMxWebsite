import { motion } from 'framer-motion'
import { ArrowRight, BookOpen } from 'lucide-react'

export default function ResearchLibrary({ articles = [] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {articles.map((article, idx) => (
        <motion.div
          key={article.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: idx * 0.1 }}
          className="rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] overflow-hidden hover:border-cyan-500/30 transition-all cursor-pointer group"
        >
          <div className="h-40 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center text-4xl">
            {article.coverImage}
          </div>

          <div className="p-5">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-1 rounded bg-cyan-500/20 text-cyan-400 font-medium">
                {article.category}
              </span>
            </div>

            <h3 className="font-medium text-white mb-3 line-clamp-2 group-hover:text-cyan-400 transition-colors">
              {article.title}
            </h3>

            <p className="text-xs text-slate-400 mb-3">{article.author}</p>

            <div className="flex items-center justify-between text-xs text-slate-500 mb-4 pb-4 border-b border-white/5">
              <span>{article.publishedDate}</span>
              <span>{article.readingTime}</span>
            </div>

            <button className="flex items-center gap-2 text-xs font-medium text-cyan-400 hover:text-cyan-300 transition-colors group/btn">
              Read Article
              <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
