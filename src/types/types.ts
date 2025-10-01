import * as Tone from 'tone'

export type LfoEffect = {
  name: string
  freq: number
  osc: Tone.Oscillator
  effect: Tone.AutoPanner | Tone.AutoFilter | Tone.Tremolo
  limiter: Tone.Limiter
  min: number
  max: number
  // isPlaying: boolean
}

export type storedSettings = {
  name: string
  freq: number | null
}
