/**
 * Remediation Benchmarks Mock Service
 * API simulation for benchmark data retrieval
 * TODO: Replace mock implementations with actual API calls
 */

import {
  benchmarkCategories,
  llmLeaderboard,
  languageBenchmarks,
  artifactBenchmarks,
  weeklyBenchmarkKPIs,
  researchArticles,
  benchmarkMethodology,
  securityScoreDistribution,
  remediationSuccessRates,
  benchmarkTrendData,
  prAcceptanceData,
  languageComparisonData,
} from '../data/remediationBenchmarks'

/**
 * TODO: Connect Benchmark API
 * Get all benchmark categories
 */
export const getBenchmarks = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(benchmarkCategories)
    }, 400)
  })
}

/**
 * TODO: Connect Leaderboard API
 * Get LLM leaderboard data
 */
export const getLeaderboard = async (sortBy = 'verifiedFixRate', order = 'desc') => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let sorted = [...llmLeaderboard]
      if (order === 'desc') {
        sorted.sort((a, b) => b[sortBy] - a[sortBy])
      } else {
        sorted.sort((a, b) => a[sortBy] - b[sortBy])
      }
      resolve(sorted)
    }, 500)
  })
}

/**
 * TODO: Connect Language Benchmarks API
 * Get language-specific benchmarks
 */
export const getLanguageBenchmarks = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(languageBenchmarks)
    }, 400)
  })
}

/**
 * TODO: Connect Artifact Benchmarks API
 * Get artifact type benchmarks
 */
export const getArtifactBenchmarks = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(artifactBenchmarks)
    }, 400)
  })
}

/**
 * TODO: Connect Weekly Benchmark API
 * Get weekly benchmark dashboard KPIs
 */
export const getWeeklyBenchmark = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(weeklyBenchmarkKPIs)
    }, 400)
  })
}

/**
 * TODO: Connect Research Articles API
 * Get published research articles
 */
export const getResearchArticles = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(researchArticles)
    }, 400)
  })
}

/**
 * TODO: Connect Methodology API
 * Get benchmark methodology details
 */
export const getBenchmarkMethodology = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(benchmarkMethodology)
    }, 400)
  })
}

/**
 * Get visualization data
 */
export const getVisualizationData = async (type) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const data = {
        scoreDistribution: securityScoreDistribution,
        remediationRates: remediationSuccessRates,
        trend: benchmarkTrendData,
        prAcceptance: prAcceptanceData,
        languageComparison: languageComparisonData,
      }
      resolve(data[type] || data)
    }, 400)
  })
}

/**
 * TODO: Connect Benchmark Details API
 * Get detailed benchmark for a specific category
 */
export const getBenchmarkDetails = async (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const category = benchmarkCategories.find((c) => c.id === categoryId)
      resolve({
        ...category,
        historicalScores: benchmarkTrendData,
        topPerformer: llmLeaderboard[0],
        artifactBreakdown: artifactBenchmarks,
      })
    }, 500)
  })
}
