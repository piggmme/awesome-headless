import React, {forwardRef, useEffect, useRef} from 'react'

const Enter = forwardRef<
  HTMLElement,
  {
    then?: (e: KeyboardEvent) => void
    children?: React.ReactNode
  }
>(function Enter({then, children}, ref) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEnter = (e: KeyboardEvent) => {
      if (e.key === 'Enter') {
        then?.(e)
      }
    }

    const container =
      (ref && typeof ref !== 'function' && ref.current) || containerRef.current
    if (container) {
      container.addEventListener('keydown', handleEnter)
    }

    return () => {
      if (container) {
        container.removeEventListener('keydown', handleEnter)
      }
    }
  }, [then, ref])

  if (ref && typeof ref !== 'function' && ref.current) return <>{children}</>

  return <div ref={containerRef}>{children}</div>
})

const Space = forwardRef<
  HTMLElement,
  {
    then?: (e: KeyboardEvent) => void
    children?: React.ReactNode
  }
>(function Space({then, children}, ref) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleSpace = (e: KeyboardEvent) => {
      if (e.code === 'Space') {
        then?.(e)
      }
    }

    const container =
      (ref && typeof ref !== 'function' && ref.current) || containerRef.current
    if (container) {
      container.addEventListener('keydown', handleSpace)
    }

    return () => {
      if (container) {
        container.removeEventListener('keydown', handleSpace)
      }
    }
  }, [then, ref])

  if (ref && typeof ref !== 'function' && ref.current) return <>{children}</>

  return <div ref={containerRef}>{children}</div>
})

const Escape = forwardRef<
  HTMLElement,
  {
    then?: (e: KeyboardEvent) => void
    children?: React.ReactNode
  }
>(function Escape({then, children}, ref) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        then?.(e)
      }
    }

    const container =
      (ref && typeof ref !== 'function' && ref.current) || containerRef.current
    if (container) {
      container.addEventListener('keydown', handleEscape)
    }

    return () => {
      if (container) {
        container.removeEventListener('keydown', handleEscape)
      }
    }
  }, [then, ref])

  if (ref && typeof ref !== 'function' && ref.current) return <>{children}</>

  return <div ref={containerRef}>{children}</div>
})

const ArrowDown = forwardRef<
  HTMLElement,
  {
    then?: (e: KeyboardEvent) => void
    children?: React.ReactNode
  }
>(function ArrowDown({then, children}, ref) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleArrowDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        then?.(e)
      }
    }

    const container =
      (ref && typeof ref !== 'function' && ref.current) || containerRef.current
    if (container) {
      container.addEventListener('keydown', handleArrowDown)
    }

    return () => {
      if (container) {
        container.removeEventListener('keydown', handleArrowDown)
      }
    }
  }, [then, ref])

  if (ref && typeof ref !== 'function' && ref.current) return <>{children}</>

  return <div ref={containerRef}>{children}</div>
})

const ArrowUp = forwardRef<
  HTMLElement,
  {
    then?: (e: KeyboardEvent) => void
    children?: React.ReactNode
  }
>(function ArrowUp({then, children}, ref) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleArrowUp = (e: KeyboardEvent) => {
      if (e.key === 'ArrowUp') {
        then?.(e)
      }
    }

    const container =
      (ref && typeof ref !== 'function' && ref.current) || containerRef.current
    if (container) {
      container.addEventListener('keydown', handleArrowUp)
    }

    return () => {
      if (container) {
        container.removeEventListener('keydown', handleArrowUp)
      }
    }
  }, [then, ref])

  if (ref && typeof ref !== 'function' && ref.current) return <>{children}</>

  return <div ref={containerRef}>{children}</div>
})

const Tab = forwardRef<
  HTMLElement,
  {
    then?: (e: KeyboardEvent) => void
    children?: React.ReactNode
  }
>(function Tab({then, children}, ref) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleTab = (e: KeyboardEvent) => {
      if (e.key === 'Tab') {
        then?.(e)
      }
    }

    const container =
      (ref && typeof ref !== 'function' && ref.current) || containerRef.current
    if (container) {
      container.addEventListener('keydown', handleTab)
    }

    return () => {
      if (container) {
        container.removeEventListener('keydown', handleTab)
      }
    }
  }, [then, ref])

  if (ref && typeof ref !== 'function' && ref.current) return <>{children}</>

  return <div ref={containerRef}>{children}</div>
})

const Keyboard = {Escape, ArrowDown, ArrowUp, Tab, Enter, Space}

export default Keyboard
