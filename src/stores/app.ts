// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', () => {
  const hash = ref('')

  return {hash, }
})