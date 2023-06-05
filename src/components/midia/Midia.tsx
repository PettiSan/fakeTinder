import { useEffect, useState } from 'react'
import { useLocation } from 'react-router'

type MidiaProps = {
  song: string
}

export default function Midia(props: MidiaProps) {
  const { song } = props

  const [audio, _] = useState(new Audio(song))

  const { pathname } = useLocation()

  useEffect(() => {
    if (audio.paused) {
      audio.play()

      audio.volume = 0.1
      audio.autoplay = true
      audio.loop = true
    }
  }, [pathname, audio])

  return <></>
}
