/**
 * Open Security Intelligence Mock Service
 * Simulates API calls for artifact analysis, user auth, and data retrieval
 * TODO: Replace mock implementations with actual API calls
 */

import {
  mockActivityFeed,
  mockIndexedArtifacts,
  mockArtifactProfile,
  mockUsers,
  mockFooterStats,
} from '../data/openSecurityIntelligence'

let currentUser = null

// ─── Authentication ──────────────────────────────────────────────────────────

/**
 * TODO: Connect Google OAuth
 * Mock sign in with Google
 */
export const mockSignIn = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const randomUser = mockUsers[Math.floor(Math.random() * mockUsers.length)]
      currentUser = {
        id: randomUser.id,
        name: randomUser.name,
        email: `${randomUser.name.toLowerCase().replace(' ', '.')}@example.com`,
        avatar: randomUser.avatar,
      }
      resolve(currentUser)
    }, 800)
  })
}

/**
 * Mock sign out
 */
export const mockSignOut = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      currentUser = null
      resolve()
    }, 400)
  })
}

/**
 * Get current authenticated user
 */
export const getCurrentUser = () => {
  return currentUser
}

// ─── Artifact Analysis ───────────────────────────────────────────────────────

/**
 * TODO: Connect GitHub scanner API
 * TODO: Connect Docker scanner API
 * TODO: Connect Binary remediation API
 * TODO: Connect AI model scanner API
 * TODO: Connect Helm/Kubernetes/Terraform scanner APIs
 * Mock artifact analysis with realistic loading stages
 */
export const runAnalysis = async (artifactType, artifactValue) => {
  const stages = [
    { stage: 'Fetching artifact', progress: 20, duration: 1200 },
    { stage: 'Generating SBOM', progress: 40, duration: 1500 },
    { stage: 'Running security analysis', progress: 70, duration: 2000 },
    { stage: 'Generating remediation', progress: 100, duration: 800 },
  ]

  const results = {
    score: Math.floor(Math.random() * 30) + 60, // 60-90
    critical: Math.floor(Math.random() * 4),
    high: Math.floor(Math.random() * 8) + 2,
    medium: Math.floor(Math.random() * 15) + 5,
    low: Math.floor(Math.random() * 25) + 10,
    summary: `Security analysis of ${artifactValue} completed. ${Math.floor(Math.random() * 5) + 1} critical issues found requiring immediate attention.`,
    vulnerabilities: [
      {
        id: 'CVE-2024-1001',
        title: 'Critical Security Vulnerability',
        severity: 'Critical',
        score: 9.8,
        description: 'Remote code execution vulnerability in dependency',
        remediation: 'Update dependency to version 2.4.1 or later',
      },
      {
        id: 'CVE-2024-1002',
        title: 'High Priority Authorization Bypass',
        severity: 'High',
        score: 8.2,
        description: 'Authentication bypass in JWT validation',
        remediation: 'Implement additional token validation checks',
      },
      {
        id: 'CVE-2024-1003',
        title: 'Medium Risk SQL Injection',
        severity: 'Medium',
        score: 6.5,
        description: 'Potential SQL injection in user input handling',
        remediation: 'Use parameterized queries and input sanitization',
      },
    ],
    sbom: {
      totalDependencies: Math.floor(Math.random() * 100) + 150,
      directDependencies: Math.floor(Math.random() * 30) + 20,
      transitiveDependencies: Math.floor(Math.random() * 80) + 100,
      outdatedDependencies: Math.floor(Math.random() * 15) + 5,
      vulnerableDependencies: Math.floor(Math.random() * 8) + 2,
    },
    remediations: [
      {
        id: 'FIX-001',
        title: 'Update dependency to latest version',
        impact: 'Critical',
        complexity: 'Low',
        prUrl: 'https://github.com/example/example/pull/12345',
        status: 'ready',
      },
      {
        id: 'FIX-002',
        title: 'Implement rate limiting',
        impact: 'High',
        complexity: 'Medium',
        status: 'recommended',
      },
      {
        id: 'FIX-003',
        title: 'Enable security headers',
        impact: 'Medium',
        complexity: 'Low',
        status: 'recommended',
      },
    ],
  }

  return { stages, results }
}

// ─── Search ──────────────────────────────────────────────────────────────────

/**
 * TODO: Connect Security Index search API
 * Mock artifact search with realistic results
 */
export const searchArtifacts = async (query) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filtered = mockIndexedArtifacts.filter((artifact) =>
        artifact.name.toLowerCase().includes(query.toLowerCase()),
      )
      resolve(filtered.length > 0 ? filtered : mockIndexedArtifacts)
    }, 600)
  })
}

/**
 * TODO: Connect artifact profile API
 * Get detailed artifact profile
 */
export const getArtifactProfile = async (artifactId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockArtifactProfile)
    }, 800)
  })
}

/**
 * TODO: Connect artifact history API
 * Get artifact scan history
 */
export const getArtifactHistory = async (artifactId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockArtifactProfile.recentScans)
    }, 600)
  })
}

// ─── Activity Feed ───────────────────────────────────────────────────────────

/**
 * TODO: Connect activity feed API
 * Get community activity feed
 */
export const getActivityFeed = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockActivityFeed)
    }, 600)
  })
}

/**
 * TODO: Connect likes API
 * Like an activity item
 */
export const likeActivity = async (activityId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const activity = mockActivityFeed.find((a) => a.id === activityId)
      if (activity) {
        activity.likes += 1
        activity.userLiked = true
      }
      resolve(activity)
    }, 400)
  })
}

/**
 * TODO: Connect comments API
 * Add comment to activity
 */
export const addComment = async (activityId, comment) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const activity = mockActivityFeed.find((a) => a.id === activityId)
      if (activity) {
        activity.comments += 1
        if (!activity.commentList) {
          activity.commentList = []
        }
        activity.commentList.push({
          id: Date.now(),
          user: currentUser,
          text: comment,
          timestamp: new Date(),
        })
      }
      resolve(activity)
    }, 400)
  })
}

// ─── Footer Stats ────────────────────────────────────────────────────────────

/**
 * Get footer statistics
 */
export const getFooterStats = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockFooterStats)
    }, 400)
  })
}
