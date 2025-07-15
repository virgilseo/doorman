import * as Tone from 'tone'

const effects = [
  {
    name: 'Panner',
    effect: new Tone.AutoPanner({
      frequency: 4,
      depth: 0.6,
    }),
    freq: 4,
    playing: false,
    min: 1,
    max: 15,
    osc: new Tone.Oscillator({
      volume: -12,
      frequency: 'C4',
      type: 'square6',
    }),
    limiter: new Tone.Limiter(-20),
  },
  {
    name: 'Filter',
    effect: new Tone.AutoFilter({
      frequency: 4,
      depth: 1,
    }),
    freq: 4,
    playing: false,
    min: 1,
    max: 20,
    osc: new Tone.Oscillator({
      volume: -12,
      frequency: 'E4',
      type: 'square6',
    }),
    limiter: new Tone.Limiter(-20),
  },
  {
    name: 'Tremelo',
    effect: new Tone.Tremolo({
      frequency: 4,
      depth: 1,
    }),
    freq: 4,
    playing: false,
    min: 1,
    max: 10,
    osc: new Tone.Oscillator({
      volume: -12,
      frequency: 'A4',
      type: 'square6',
    }),
    limiter: new Tone.Limiter(-20),
  },
]

export default effects
