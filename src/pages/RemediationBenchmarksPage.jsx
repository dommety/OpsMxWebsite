import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { BarChart3, TrendingUp, BookOpen, Zap } from 'lucide-react'
import BenchmarkCategoryCards from '../components/benchmark/BenchmarkCategoryCards'
import LLMLeaderboard from '../components/benchmark/LLMLeaderboard'
import LanguageBenchmarks from '../components/benchmark/LanguageBenchmarks'
import ArtifactBenchmarks from '../components/benchmark/ArtifactBenchmarks'
import WeeklyDashboard from '../components/benchmark/WeeklyDashboard'
import ResearchLibrary from '../components/benchmark/ResearchLibrary'
import BenchmarkMethodology from '../components/benchmark/BenchmarkMethodology'
import {
  getBenchmarks,
  getLeaderboard,
  getLanguageBenchmarks,
  getArtifactBenchmarks,
  getWeeklyBenchmark,
  getResearchArticles,
  getBenchmarkMethodology,
} from '../services/remediationBenchmarksService'

export default function RemediationBenchmarksPage() {
  const [activeTab, setActiveTab] = useState('overview')
  const [benchmarks, setBenchmarks] = useState([])
  const [leaderboard, setLeaderboard] = useState([])
  const [languages, setLanguages] = useState([])
  const [artifacts, setArtifacts] = useState([])
  const [kpis, setKpis] = useState([])
  const [articles, setArticles] = useState([])
  const [methodology, setMethodology] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const [benchData, leadData, langData, artData, kpiData, artData2, methodData] = await Promise.all([
          getBenchmarks(),
          getLeaderboard(),
          getLanguageBenchmarks(),
          getArtifactBenchmarks(),
          getWeeklyBenchmark(),
          getResearchArticles(),
          getBenchmarkMethodology(),
        ])

        setBenchmarks(benchData)
        setLeaderboard(leadData)
        setLanguages(langData)
        setArtifacts(artData)
        setKpis(kpiData)
        setArticles(artData2)
        setMethodology(methodData)
        setIsLoading(false)
      } catch (error) {
        console.error('Error loading benchmark data:', error)
        setIsLoading(false)
      }
    }

    loadData()
  }, [])

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BarChart3 },
    { id: 'leaderboard', label: 'LLM Leaderboard', icon: TrendingUp },
    { id: 'languages', label: 'Language Benchmarks', icon: Zap },
    { id: 'research', label: 'Research', icon: BookOpen },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 pt-24 pb-16">
      {/* Hero Section */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="px-6 mb-16">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl font-bold text-white mb-4">Remediation Benchmarks</h1>
          <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
            The industry's first continuously updated benchmark for AI-powered security remediation across source code,
            binaries, containers, cloud infrastructure, Kubernetes, AI models, and software supply chains.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-6 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-medium hover:shadow-lg hover:shadow-cyan-500/50 transition-all">
              Explore Benchmarks
            </button>
            <button className="px-6 py-3 rounded-lg border border-cyan-500/50 text-cyan-400 font-medium hover:bg-cyan-500/10 transition-colors">
              Benchmark Methodology
            </button>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Tab Navigation */}
        <div className="flex flex-wrap gap-2 mb-12 pb-6 border-b border-white/10">
          {tabs.map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                  activeTab === tab.id
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30'
                    : 'text-slate-400 hover:text-slate-300'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            )
          })}
        </div>

        {/* Content Sections */}
        <AnimatePresence mode="wait">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              key="overview"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-12"
            >
              {/* Weekly Dashboard */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Weekly Benchmark Dashboard</h2>
                <WeeklyDashboard kpis={kpis} />
              </div>

              {/* Benchmark Categories */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Benchmark Categories</h2>
                <BenchmarkCategoryCards categories={benchmarks} />
              </div>

              {/* Language Benchmarks */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Language Benchmarks</h2>
                <LanguageBenchmarks languages={languages} />
              </div>

              {/* Artifact Benchmarks */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Artifact Benchmarks</h2>
                <ArtifactBenchmarks artifacts={artifacts} />
              </div>

              {/* Methodology */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Benchmark Methodology</h2>
                <BenchmarkMethodology steps={methodology} />
              </div>

              {/* Research Library */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">Research Library</h2>
                <ResearchLibrary articles={articles} />
              </div>
            </motion.div>
          )}

          {/* LLM Leaderboard Tab */}
          {activeTab === 'leaderboard' && (
            <motion.div
              key="leaderboard"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">LLM Remediation Leaderboard</h2>
                <p className="text-slate-400 mb-6">
                  Sortable comparison of AI models' verified fix rates, build success, test passing, and other key metrics.
                  Click column headers to sort.
                </p>
              </div>
              <div className="rounded-lg border border-white/10 bg-gradient-to-br from-white/5 to-white/[0.02] p-6 overflow-x-auto">
                <LLMLeaderboard leaderboard={leaderboard} />
              </div>
            </motion.div>
          )}

          {/* Language Benchmarks Tab */}
          {activeTab === 'languages' && (
            <motion.div
              key="languages"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Language Security & Remediation Benchmarks</h2>
                <p className="text-slate-400 mb-6">
                  Security scores and remediation capabilities benchmarked across eight programming languages.
                </p>
              </div>
              <LanguageBenchmarks languages={languages} />
            </motion.div>
          )}

          {/* Research Tab */}
          {activeTab === 'research' && (
            <motion.div
              key="research"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Security Research Library</h2>
                <p className="text-slate-400 mb-6">
                  Published research on remediation benchmarks, security trends, and AI-powered security outcomes.
                </p>
              </div>
              <ResearchLibrary articles={articles} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="max-w-6xl mx-auto px-6 mt-16"
      >
        <div className="rounded-lg border border-cyan-500/20 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-8 text-center">
          <h3 className="text-2xl font-bold text-white mb-4">Run Your Own Benchmarks</h3>
          <p className="text-slate-300 mb-6 max-w-2xl mx-auto">
            OpsMx Remediation Benchmarks is the transparent, continuously updated industry standard for measuring
            AI-powered security remediation quality.
          </p>
          <button className="px-8 py-3 rounded-lg bg-cyan-500 text-white font-medium hover:bg-cyan-600 transition-colors">
            Start Free Trial
          </button>
        </div>
      </motion.div>
    </div>
  )
}
