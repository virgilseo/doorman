import * as Tone from 'tone'

export type LfoEffect = {
  name: string
  playing: boolean
  freq: number
  osc: Tone.Oscillator
  effect: Tone.AutoPanner | Tone.Panner | Tone.Tremolo
  limiter: Tone.Limiter
  min: number
  max: number
}
