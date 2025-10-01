import { defineStore } from 'pinia'
import { computed, ref } from 'vue'
import { effects } from '../components/LfoEffects/Effects'
import { storedSettings } from '../types/types'

export const useLfoEffectsStore = defineStore('lfo-effects', () => {
  const reactiveEffects = ref(effects)
  const storedSettings = localStorage.getItem('lfoEffectsSettings')

  const getEffects = computed(() => {
    if (storedSettings) {
      const parsedSettings = JSON.parse(storedSettings) as storedSettings[]

      return effects.map((effect) => {
        const setting = parsedSettings.find(
          (setting) => setting.name === effect.name
        )
        if (setting && setting.freq) {
          effect.freq = setting.freq
        }
        return effect
      })
    }

    return effects
  })

  const signalSettings = (name: string, freq: number) => {
    const currentSetting = reactiveEffects.value.find(
      (effect) => effect.name === name
    )

    if (currentSetting) {
      currentSetting.freq = freq
    }

    localStorage.setItem(
      'lfoEffectsSettings',
      JSON.stringify(
        reactiveEffects.value.map((effect) => ({
          name: effect.name,
          freq: effect.freq,
        }))
      )
    )
  }

  return { signalSettings, getEffects }
})
