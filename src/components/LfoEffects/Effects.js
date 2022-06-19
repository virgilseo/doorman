import * as Tone from 'tone'

const effects = [
  { name: 'Panner', effect: new Tone.AutoPanner().toDestination('2'),
    freq: 2, playing: false, min:1, max:16, osc: new Tone.Oscillator()
  },
  { name: 'Filter', effect: new Tone.AutoFilter().toDestination('5'),
    freq: 5, playing: false, min:1, max:16, osc: new Tone.Oscillator()
  },
  { name: 'Tremelo', effect: new Tone.Tremolo().toDestination('4'),
    freq: 4, playing: false, min:1, max:16, osc: new Tone.Oscillator()
  }
]

export default effects
