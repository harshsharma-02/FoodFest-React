import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToHash() {
  const { hash, pathname } = useLocation()

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      return
    }

    const id = hash.replace('#', '')
    const el = document.getElementById(id)
    if (el) {
      const navbar = document.getElementById('navbar')
      const offset = navbar ? navbar.offsetHeight : 0
      const y = el.getBoundingClientRect().top + window.pageYOffset - offset - 8
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }, [hash, pathname])

  return null
}
