import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'
import { useStateContext } from 'state/context'

type MidiaProps = {
  song: string
}

export default function Midia(props: MidiaProps) {
  const { song } = props

  const [audio, _] = useState(new Audio(song))

  const { pathname } = useLocation()

  const { playAudio } = useStateContext().state

  useEffect(() => {
    if (audio.paused || playAudio) {
      audio.play()

      audio.volume = 0.1
      audio.autoplay = true
      audio.loop = true
    }
  }, [pathname, audio, playAudio])

  return <></>
}
