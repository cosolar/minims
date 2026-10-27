import { reactive, readonly, ref } from 'vue'

export type RepoName = 'minidocs' | 'halo-theme-cosolar' | 'miniwho'

export interface RepoStat {
  stars: number
  pushedAt: string
  htmlUrl: string
}

const REPOS: RepoName[] = ['minidocs', 'halo-theme-cosolar', 'miniwho']
const CACHE_KEY = 'minims:github:v1'
const CACHE_TTL = 30 * 60 * 1000

const FALLBACK: Record<RepoName, RepoStat> = {
  minidocs: {
    stars: 1,
    pushedAt: '2026-10-15T00:51:42Z',
    htmlUrl: 'https://github.com/cosolar/minidocs',
  },
  'halo-theme-cosolar': {
    stars: 19,
    pushedAt: '2026-10-19T02:07:01Z',
    htmlUrl: 'https://github.com/cosolar/halo-theme-cosolar',
  },
  miniwho: {
    stars: 1,
    pushedAt: '2026-10-26T02:34:28Z',
    htmlUrl: 'https://github.com/cosolar/miniwho',
  },
}

interface CachePayload {
  at: number
  data: Partial<Record<RepoName, RepoStat>>
}

function readCache(): CachePayload | null {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const parsed = JSON.parse(raw) as CachePayload
    if (!parsed || typeof parsed.at !== 'number' || !parsed.data) return null
    return parsed
  } catch {
    return null
  }
}

const cache = readCache()
const stats = reactive<Record<RepoName, RepoStat>>({ ...FALLBACK })
if (cache) {
  for (const name of REPOS) {
    const item = cache.data[name]
    if (item && typeof item.stars === 'number' && typeof item.pushedAt === 'string') {
      stats[name] = item
    }
  }
}

const loading = ref(false)
const failed = ref(false)
const lastFetchedAt = ref<number | null>(cache?.at ?? null)
let started = false

async function refresh() {
  if (loading.value) return
  loading.value = true
  failed.value = false

  try {
    const results = await Promise.allSettled(
      REPOS.map(async (name) => {
        const response = await fetch(`https://api.github.com/repos/cosolar/${name}`, {
          headers: { Accept: 'application/vnd.github+json' },
        })
        if (!response.ok) throw new Error(`GitHub API ${response.status}`)
        const data = (await response.json()) as {
          stargazers_count: number
          pushed_at: string
          html_url: string
        }
        return [
          name,
          {
            stars: data.stargazers_count,
            pushedAt: data.pushed_at,
            htmlUrl: data.html_url,
          },
        ] as const
      }),
    )

    let updated = 0
    for (const result of results) {
      if (result.status === 'fulfilled') {
        const [name, stat] = result.value
        stats[name] = stat
        updated += 1
      }
    }

    if (updated === 0) throw new Error('GitHub API unavailable')

    failed.value = updated < REPOS.length
    lastFetchedAt.value = Date.now()
    try {
      localStorage.setItem(CACHE_KEY, JSON.stringify({ at: Date.now(), data: stats }))
    } catch {
      /* 忽略存储失败 */
    }
  } catch {
    failed.value = true
  } finally {
    loading.value = false
  }
}

export function useGithubStats() {
  if (!started) {
    started = true
    const cacheIsFresh = cache && Date.now() - cache.at < CACHE_TTL
    if (!cacheIsFresh) void refresh()
  }

  return {
    stats,
    loading: readonly(loading),
    failed: readonly(failed),
    lastFetchedAt: readonly(lastFetchedAt),
    refresh,
  }
}

export function formatStars(value: number): string {
  return new Intl.NumberFormat('zh-CN').format(value)
}

export function formatUpdated(iso: string): string {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return '最近更新'

  const today = new Date()
  const startOfToday = Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())
  const startOfDate = Date.UTC(date.getFullYear(), date.getMonth(), date.getDate())
  const days = Math.round((startOfToday - startOfDate) / 86400000)

  if (days <= 0) return '今天更新'
  if (days === 1) return '昨天更新'
  if (days < 30) return `${days} 天前更新`
  return `${date.getMonth() + 1} 月 ${date.getDate()} 日更新`
}

export function formatFullDate(iso: string): string {
  const date = new Date(iso)
  if (Number.isNaN(date.getTime())) return iso
  return new Intl.DateTimeFormat('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(date)
}
