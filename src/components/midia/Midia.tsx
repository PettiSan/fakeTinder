import clsx from 'clsx'
import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router'
import { PATHS } from 'router/Paths'
import styles from './Midia.module.css'

type VideoProps = {
  video: string
  song: string
}

export default function Midia(props: VideoProps) {
  const { video, song } = props

  const [audio, _] = useState(new Audio(song))

  const { pathname } = useLocation()

  const videoRef = useRef<HTMLMediaElement>(null)

  useEffect(() => {
    if (pathname === PATHS.home || pathname === PATHS.itsAMatche) {
      videoRef?.current?.pause()

      audio.play()

      audio.volume = 0.1
      audio.autoplay = true
      audio.loop = true
    }

    if (pathname === PATHS.matches || pathname === PATHS.chat) {
      videoRef?.current?.play()

      audio.pause()
    }
  }, [videoRef, pathname, audio])

  return (
    <video className={clsx(styles.midia)} loop autoPlay ref={videoRef as any}>
      <track kind="captions" src={video} />
      <source src={video} type="video/mp4" />
    </video>
  )
}
