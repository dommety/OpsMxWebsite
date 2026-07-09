import { motion } from 'framer-motion'
import { LogIn, LogOut } from 'lucide-react'
import { mockSignIn, mockSignOut } from '../../services/openSecurityIntelligenceService'

export default function AuthButton({ user, onUserChange }) {
  const handleSignIn = async () => {
    const signedInUser = await mockSignIn()
    onUserChange(signedInUser)
  }

  const handleSignOut = async () => {
    await mockSignOut()
    onUserChange(null)
  }

  if (user) {
    return (
      <motion.button
        onClick={handleSignOut}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/10 border border-red-500/30 text-red-400 hover:bg-red-500/20 transition-colors"
      >
        <LogOut className="w-4 h-4" />
        Sign Out
      </motion.button>
    )
  }

  return (
    <motion.button
      onClick={handleSignIn}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/30 transition-all"
    >
      <LogIn className="w-4 h-4" />
      Sign In with Google
    </motion.button>
  )
}
