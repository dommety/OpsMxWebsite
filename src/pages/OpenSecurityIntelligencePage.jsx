import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Helmet } from 'react-helmet-async'
import { Activity, Search as SearchIcon, Zap, ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'
import FinalCTA from '../components/FinalCTA'
import AuthButton from '../components/open-security/AuthButton'
import UserMenu from '../components/open-security/UserMenu'
import ArtifactTypeSelector from '../components/open-security/ArtifactTypeSelector'
import ArtifactInput from '../components/open-security/ArtifactInput'
import SecurityGauge from '../components/open-security/SecurityGauge'
import VulnerabilityTable from '../components/open-security/VulnerabilityTable'
import RemediationTable from '../components/open-security/RemediationTable'
import ActivityItem from '../components/open-security/ActivityItem'
import SearchBar from '../components/open-security/SearchBar'
import ArtifactCard from '../components/open-security/ArtifactCard'
import StatsFooter from '../components/open-security/StatsFooter'
import {
  suggestedSearches,
  mockIndexedArtifacts,
  mockArtifactProfile,
} from '../data/openSecurityIntelligence'
import {
  getCurrentUser,
  mockSignOut,
  runAnalysis,
  searchArtifacts,
  getActivityFeed,
  getFooterStats,
  likeActivity,
  addComment,
} from '../services/openSecurityIntelligenceService'

export default function OpenSecurityIntelligencePage() {
  const [user, setUser] = useState(null)
  const [selectedArtifactType, setSelectedArtifactType] = useState('github')
  const [artifactInput, setArtifactInput] = useState('')
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResults, setAnalysisResults] = useState(null)
  const [analysisStages, setAnalysisStages] = useState([])
  const [currentStage, setCurrentStage] = useState(0)

  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState(mockIndexedArtifacts)
  const [selectedArtifact, setSelectedArtifact] = useState(null)

  const [activityFeed, setActivityFeed] = useState([])
  const [footerStats, setFooterStats] = useState(null)

  const [activeTab, setActiveTab] = useState('analyze')

  // Initialize
  useEffect(() => {
    const currentUser = getCurrentUser()
    setUser(currentUser)

    // Load activity feed
    getActivityFeed().then(setActivityFeed)
    getFooterStats().then(setFooterStats)
  }, [])

  const handleAnalyze = async () => {
    if (!user) {
      alert('Please sign in to analyze artifacts')
      return
    }

    setIsAnalyzing(true)
    setCurrentStage(0)

    const { stages, results } = await runAnalysis(selectedArtifactType, artifactInput)
    setAnalysisStages(stages)

    // Simulate stage progression
    for (let i = 0; i < stages.length; i++) {
      setCurrentStage(i)
      await new Promise((resolve) => setTimeout(resolve, stages[i].duration))
    }

    setAnalysisResults(results)
    setIsAnalyzing(false)
  }

  const handleSearch = async () => {
    const results = await searchArtifacts(searchQuery)
    setSearchResults(results)
  }

  const handleUserChange = (newUser) => {
    setUser(newUser)
  }

  const handleLike = async (activityId) => {
    const updated = await likeActivity(activityId)
    setActivityFeed(activityFeed.map((a) => (a.id === activityId ? updated : a)))
  }

  const handleComment = async (activityId, comment) => {
    const updated = await addComment(activityId, comment)
    setActivityFeed(activityFeed.map((a) => (a.id === activityId ? updated : a)))
  }

  return (
    <>
      <Helmet>
        <title>Open Security Intelligence | OpsMx</title>
        <meta name="description" content="Public security intelligence and remediation portal for software artifacts. Analyze, track, and remediate security issues in real-time." />
        <meta property="og:title" content="Open Security Intelligence | OpsMx" />
        <meta property="og:description" content="Public security intelligence and remediation portal for software artifacts." />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-b from-slate-950 to-navy-950">
        <Navbar />

        {/* Header */}
        <header className="border-b border-white/10 bg-gradient-to-b from-slate-900/50 to-transparent">
          <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-white mb-2">Open Security Intelligence</h1>
              <p className="text-slate-400">Analyze artifacts, track community remediation, search the security index</p>
            </div>
            <div className="flex items-center gap-3">
              <AuthButton user={user} onUserChange={handleUserChange} />
              {user && <UserMenu user={user} onSignOut={() => handleUserChange(null)} />}
            </div>
          </div>
        </header>

        {/* Navigation Tabs */}
        <div className="border-b border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex items-center gap-8">
              <motion.button
                onClick={() => {
                  setActiveTab('analyze')
                  setSelectedArtifact(null)
                }}
                className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                  activeTab === 'analyze'
                    ? 'border-cyan-500 text-white'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Analyze Artifact
                </div>
              </motion.button>
              <motion.button
                onClick={() => setActiveTab('activity')}
                className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                  activeTab === 'activity'
                    ? 'border-cyan-500 text-white'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <Activity className="w-4 h-4" />
                  Live Activity
                </div>
              </motion.button>
              <motion.button
                onClick={() => setActiveTab('search')}
                className={`py-4 px-2 border-b-2 font-medium transition-colors ${
                  activeTab === 'search'
                    ? 'border-cyan-500 text-white'
                    : 'border-transparent text-slate-400 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2">
                  <SearchIcon className="w-4 h-4" />
                  Search Index
                </div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-12">
          <AnimatePresence mode="wait">
            {/* Tab 1: Analyze Artifact */}
            {activeTab === 'analyze' && !selectedArtifact && (
              <motion.div
                key="analyze"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-12"
              >
                {/* Analyze Section */}
                <section className="space-y-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">Analyze an Artifact</h2>
                    <p className="text-slate-400">Select artifact type and submit for comprehensive security analysis</p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-sm font-medium text-white mb-4">Artifact Type</label>
                      <ArtifactTypeSelector selected={selectedArtifactType} onSelect={setSelectedArtifactType} />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-white mb-4">Input</label>
                      <ArtifactInput
                        artifactType={selectedArtifactType}
                        value={artifactInput}
                        onInput={setArtifactInput}
                        onAnalyze={handleAnalyze}
                        isLoading={isAnalyzing}
                        requiresAuth={!user}
                      />
                    </div>
                  </div>
                </section>

                {/* Analysis Progress */}
                {isAnalyzing && (
                  <motion.section initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-6">
                    <div className="p-6 rounded-lg border border-white/10 bg-white/5">
                      <p className="text-sm font-medium text-white mb-4">Analysis in progress...</p>
                      <div className="space-y-3">
                        {analysisStages.map((stage, idx) => (
                          <div key={stage.stage}>
                            <p className="text-xs text-slate-400 mb-2">{stage.stage}</p>
                            <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                              <motion.div
                                className="h-full bg-gradient-to-r from-cyan-500 to-blue-500"
                                initial={{ width: 0 }}
                                animate={{ width: currentStage >= idx ? `${stage.progress}%` : 0 }}
                                transition={{ duration: 0.5 }}
                              />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.section>
                )}

                {/* Analysis Results */}
                {analysisResults && (
                  <motion.section
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="space-y-8"
                  >
                    {/* Score Overview */}
                    <div className="grid md:grid-cols-4 gap-6">
                      <div className="p-6 rounded-lg border border-white/10 bg-white/5 flex flex-col items-center justify-center">
                        <SecurityGauge score={analysisResults.score} size="md" />
                      </div>
                      <div className="p-6 rounded-lg border border-white/10 bg-white/5">
                        <p className="text-xs font-medium text-slate-400 mb-4">Vulnerability Breakdown</p>
                        <div className="space-y-2">
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-red-400">Critical</span>
                            <span className="font-mono text-red-400">{analysisResults.critical}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-orange-400">High</span>
                            <span className="font-mono text-orange-400">{analysisResults.high}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-yellow-400">Medium</span>
                            <span className="font-mono text-yellow-400">{analysisResults.medium}</span>
                          </div>
                          <div className="flex items-center justify-between text-sm">
                            <span className="text-cyan-400">Low</span>
                            <span className="font-mono text-cyan-400">{analysisResults.low}</span>
                          </div>
                        </div>
                      </div>
                      <div className="p-6 rounded-lg border border-white/10 bg-white/5 md:col-span-2">
                        <p className="text-xs font-medium text-slate-400 mb-4">AI Summary</p>
                        <p className="text-sm text-slate-300 leading-relaxed">{analysisResults.summary}</p>
                      </div>
                    </div>

                    {/* Tabs for results */}
                    <div className="space-y-6">
                      <div className="flex gap-4 border-b border-white/10">
                        <button className="px-4 py-3 border-b-2 border-cyan-500 text-cyan-400 font-medium text-sm">
                          Vulnerabilities
                        </button>
                        <button className="px-4 py-3 border-b-2 border-transparent text-slate-400 hover:text-white font-medium text-sm">
                          SBOM
                        </button>
                        <button className="px-4 py-3 border-b-2 border-transparent text-slate-400 hover:text-white font-medium text-sm">
                          Remediations
                        </button>
                      </div>

                      <VulnerabilityTable vulnerabilities={analysisResults.vulnerabilities} />

                      <div className="flex gap-3">
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 rounded-lg bg-red-500/20 border border-red-500/30 text-red-400 font-medium hover:bg-red-500/30 transition-colors flex items-center gap-2"
                        >
                          Fix Selected <ArrowRight className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="px-6 py-3 rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 font-medium hover:bg-cyan-500/30 transition-colors flex items-center gap-2"
                        >
                          Fix All <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>
                  </motion.section>
                )}
              </motion.div>
            )}

            {/* Tab 2: Live Activity */}
            {activeTab === 'activity' && (
              <motion.section
                key="activity"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-6"
              >
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Live Remediation Activity</h2>
                  <p className="text-slate-400">Community security remediation in real-time</p>
                </div>

                <div className="space-y-3">
                  {activityFeed.map((activity) => (
                    <ActivityItem
                      key={activity.id}
                      activity={activity}
                      user={user}
                      onLike={handleLike}
                      onComment={handleComment}
                    />
                  ))}
                </div>
              </motion.section>
            )}

            {/* Tab 3: Search Index */}
            {activeTab === 'search' && !selectedArtifact && (
              <motion.section
                key="search"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-white mb-2">Search Security Index</h2>
                  <p className="text-slate-400">Find and analyze previously indexed artifacts</p>
                </div>

                <div className="sticky top-20 z-10">
                  <SearchBar
                    value={searchQuery}
                    onChange={setSearchQuery}
                    onSearch={handleSearch}
                    suggestions={suggestedSearches}
                  />
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {searchResults.map((artifact, idx) => (
                    <ArtifactCard
                      key={artifact.id}
                      artifact={artifact}
                      onView={() => setSelectedArtifact(artifact)}
                      idx={idx}
                    />
                  ))}
                </div>
              </motion.section>
            )}

            {/* Artifact Detail View */}
            {selectedArtifact && (
              <motion.section
                key="artifact-detail"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="space-y-8"
              >
                <motion.button
                  onClick={() => setSelectedArtifact(null)}
                  className="text-cyan-400 hover:text-cyan-300 flex items-center gap-2 text-sm font-medium"
                >
                  ← Back to Search
                </motion.button>

                {/* Header */}
                <div className="space-y-4">
                  <div>
                    <h2 className="text-3xl font-bold text-white">{selectedArtifact.name}</h2>
                    <p className="text-slate-400 mt-1">{selectedArtifact.type}</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="p-6 rounded-lg border border-white/10 bg-white/5 flex flex-col items-center justify-center">
                      <SecurityGauge score={selectedArtifact.score} size="lg" />
                    </div>
                    <div className="p-6 rounded-lg border border-white/10 bg-white/5">
                      <p className="text-xs font-medium text-slate-400 mb-4">Current Issues</p>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-red-400">Critical</span>
                          <span className="font-mono text-red-400">{selectedArtifact.critical}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-orange-400">High</span>
                          <span className="font-mono text-orange-400">{selectedArtifact.high}</span>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-yellow-400">Medium</span>
                          <span className="font-mono text-yellow-400">{selectedArtifact.medium}</span>
                        </div>
                      </div>
                    </div>
                    <div className="p-6 rounded-lg border border-white/10 bg-white/5">
                      <p className="text-xs font-medium text-slate-400 mb-4">Metadata</p>
                      <div className="space-y-2 text-sm text-slate-300">
                        <p>Last scanned: {selectedArtifact.lastScanned.toLocaleTimeString()}</p>
                        <p>Total scans: {selectedArtifact.totalScans}</p>
                        <p>Trend: {selectedArtifact.trend[0]} → {selectedArtifact.trend[selectedArtifact.trend.length - 1]}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* AI Summary and Recommendations */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="p-6 rounded-lg border border-white/10 bg-white/5">
                    <h3 className="text-lg font-bold text-white mb-4">AI Security Summary</h3>
                    <p className="text-slate-300 leading-relaxed">{mockArtifactProfile.aiSummary}</p>
                  </div>
                  <div className="p-6 rounded-lg border border-white/10 bg-white/5">
                    <h3 className="text-lg font-bold text-white mb-4">Recommended Remediations</h3>
                    <ul className="space-y-2">
                      {mockArtifactProfile.recommendations.map((rec, idx) => (
                        <li key={idx} className="text-sm text-slate-300 flex items-start gap-2">
                          <span className="text-cyan-400 mt-1">✓</span>
                          {rec}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.section>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Stats */}
        {footerStats && <StatsFooter stats={footerStats} />}

        <FinalCTA />
      </div>
    </>
  )
}
