import { PropsWithChildren, useEffect } from 'react'

// * Define a propriedade ***addeventatc*** ao escopo global...
// ? Link da lib: https://www.addevent.com/
declare global {
  interface Window {
    addeventatc: any
  }
}

type CalendarButtonProps = PropsWithChildren

export function CalendarButton(props: CalendarButtonProps) {
  const { children } = props

  useEffect(() => {
    // ! Async reasons, é necessário dar um refresh no plugin do ***addEvent***
    if (window.addeventatc) window.addeventatc.refresh()
  }, [])

  return (
    <div title="Add to Calendar" className="addeventatc text-center ">
      {children}
      <span className="date_format">DD/MM/YYYY</span>
      <span className="start">07/06/2023 08:00 PM</span>
      <span className="end">08/06/2023 01:00 AM</span>
      <span className="timezone">America/Sao_Paulo</span>
      <span className="title">Outback Night</span>
      <span className="description">
        Bora tentar esquecer os problemas e se divertir...
      </span>
      <span className="location">Outback - Praia de Belas</span>
      <span className="organizer">Filipe Petitemberte</span>
      <span className="organizer_email">filipe.petitemberte@gmail.com</span>
      <span className="calname">outback</span>
      <span className="status">CONFIRMED</span>
    </div>
  )
}
