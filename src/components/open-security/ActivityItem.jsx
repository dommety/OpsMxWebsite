import { motion } from 'framer-motion'
import { Package, Code2, Zap, CheckCircle, Clock } from 'lucide-react'
import LikeButton from './LikeButton'
import CommentPanel from './CommentPanel'

const typeIcons = {
  docker: Package,
  github: Code2,
  'ai-model': Zap,
}

const statusIcons = {
  completed: CheckCircle,
  pending: Clock,
  merged: CheckCircle,
}

export default function ActivityItem({ activity, user, onLike, onComment }) {
  const Icon = typeIcons[activity.artifactType] || Code2
  const StatusIcon = statusIcons[activity.status] || Clock

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-4 rounded-lg border border-white/10 bg-white/5 hover:bg-white/8 transition-colors"
    >
      <div className="flex gap-3">
        {/* Avatar */}
        <img src={activity.user.avatar} alt={activity.user.name} className="w-10 h-10 rounded-full" />

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <div>
              <p className="text-sm">
                <span className="font-medium text-white">@{activity.user.name.split(' ')[0].toLowerCase()}</span>
                <span className="text-slate-400"> {activity.action}</span>
              </p>
              <p className="text-sm font-medium text-cyan-400 truncate">{activity.artifactName}</p>
            </div>
            <div className="flex items-center gap-2 flex-shrink-0">
              <Icon className="w-4 h-4 text-slate-400" />
              <StatusIcon className="w-4 h-4 text-green-400" />
            </div>
          </div>

          {/* Metadata */}
          <div className="mt-2 flex items-center gap-2 text-xs text-slate-400">
            <span>{activity.timestamp.toLocaleTimeString()}</span>
            {activity.score && <span>• Score: {activity.score}</span>}
            {activity.critical !== undefined && (
              <>
                <span>• 🔴 {activity.critical}</span>
                <span>• 🟠 {activity.high}</span>
              </>
            )}
          </div>

          {/* Engagement */}
          <div className="mt-3 flex items-center gap-4">
            <LikeButton
              likes={activity.likes}
              isLiked={activity.userLiked}
              onLike={() => onLike(activity.id)}
              user={user}
            />
            <CommentPanel
              comments={activity.comments}
              commentList={activity.commentList}
              onComment={(text) => onComment(activity.id, text)}
              user={user}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
