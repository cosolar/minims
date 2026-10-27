import { computed, readonly, ref } from 'vue'

type Theme = 'light' | 'dark'

const STORAGE_KEY = 'minims-theme'

function detectTheme(): Theme {
  if (typeof document === 'undefined') return 'light'
  return document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light'
}

const theme = ref<Theme>(detectTheme())

function applyTheme(next: Theme, persist: boolean) {
  theme.value = next
  if (typeof document === 'undefined') return

  const root = document.documentElement
  root.dataset.theme = next
  root.classList.toggle('dark', next === 'dark')
  root.style.colorScheme = next

  const meta = document.getElementById('theme-color')
  if (meta) meta.setAttribute('content', next === 'dark' ? '#0f1310' : '#f7f5ef')

  if (persist) {
    try {
      localStorage.setItem(STORAGE_KEY, next)
    } catch {
      /* 隐私模式下忽略 */
    }
  }
}

function toggleTheme() {
  applyTheme(theme.value === 'light' ? 'dark' : 'light', true)
}

if (typeof window !== 'undefined') {
  const media = window.matchMedia('(prefers-color-scheme: dark)')
  media.addEventListener?.('change', (event) => {
    let hasPreference = false
    try {
      hasPreference = Boolean(localStorage.getItem(STORAGE_KEY))
    } catch {
      /* 忽略 */
    }
    if (!hasPreference) applyTheme(event.matches ? 'dark' : 'light', false)
  })
}

export function useTheme() {
  return {
    theme: readonly(theme),
    isDark: computed(() => theme.value === 'dark'),
    toggleTheme,
  }
}
