const voices = window.speechSynthesis?.getVoices()

const jpVoice = voices?.find((voice) => /pt-BR/.test(voice.lang))

const utterance = new SpeechSynthesisUtterance()


utterance.text = 'Carlos Timóteo Arruda' // word é a palavra que desejamos pronunciar
utterance.lang = 'pt-BR' // língua a pronunciar
utterance.voice = jpVoice // voz defina acima
utterance.rate = 0.8 // velocidade de fala

window.speechSynthesis.speak(utterance)