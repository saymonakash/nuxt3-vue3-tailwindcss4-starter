import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    theme: 'light',
  }),
  actions: {
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light'
    },
  },
})
