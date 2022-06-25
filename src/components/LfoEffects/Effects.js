import * as Tone from 'tone'

const effects = [
  { name: 'Panner', effect: new Tone.AutoPanner().toDestination('3'),
    freq: 3, playing: false, min:1, max:35, osc: new Tone.Oscillator(),
    limiter: new Tone.Limiter(-20).toDestination(), wave: 'sawtooth24'
  },
  { name: 'Filter', effect: new Tone.AutoFilter().toDestination('5'),
    freq: 5, playing: false, min:1, max:25, osc: new Tone.Oscillator(),
    limiter: new Tone.Limiter(-20).toDestination(), wave: 'sine'
  },
  { name: 'Tremelo', effect: new Tone.Tremolo().toDestination('4'),
    freq: 4, playing: false, min:1, max:25, osc: new Tone.Oscillator(),
    limiter: new Tone.Limiter(-20).toDestination(), wave: 'square12'
  }
]

export default effects
