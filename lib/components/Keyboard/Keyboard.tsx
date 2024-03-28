import {useEffect} from 'react'

function Escape({
  then,
  children,
}: {
  then?: (e?: KeyboardEvent) => void
  children?: React.ReactNode
}) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        console.log('Escape key pressed')
        then?.(e)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [then])

  return <>{children}</>
}

function ArrowDown({
  then,
  children,
}: {
  then?: (e?: KeyboardEvent) => void
  children?: React.ReactNode
}) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        console.log('ArrowDown key pressed')
        then?.(e)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [then])

  return <>{children}</>
}

function ArrowUp({
  then,
  children,
}: {
  then?: (e?: KeyboardEvent) => void
  children?: React.ReactNode
}) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        console.log('ArrowUp key pressed')
        then?.(e)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [then])

  return <>{children}</>
}

function Tab({
  then,
  children,
}: {
  then?: (e: KeyboardEvent) => void
  children?: React.ReactNode
}) {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        console.log('Tab key pressed')
        then?.(e)
      }
    }

    document.addEventListener('keydown', handleEscape)
    return () => {
      document.removeEventListener('keydown', handleEscape)
    }
  }, [then])

  return <>{children}</>
}

const Keyboard = {Escape, ArrowDown, ArrowUp, Tab}

export default Keyboard
