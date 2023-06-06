import { useEffect, useState } from 'react'
import { useLocation, useMatch } from 'react-router'
import { PATHS } from 'router/Paths'
import { useStateContext } from 'state/context'

type MidiaProps = {
  song: string
}

export default function Midia(props: MidiaProps) {
  const { song } = props

  const [audio, _] = useState(new Audio(song))
  audio.volume = 0.1
  audio.loop = true

  const isChatPage = !!useMatch(PATHS.chat)

  const { pathname } = useLocation()

  const { allowAudio } = useStateContext().state

  useEffect(() => {
    if (isChatPage && audio.paused && allowAudio) {
      audio.play()
    }
  }, [isChatPage, pathname, audio, allowAudio])

  return <></>
}
