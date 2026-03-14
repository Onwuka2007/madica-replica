import { useLocation } from 'react-router-dom'

const STRIP_COUNT = 3

export default function PageTransitionLoader() {
  const location = useLocation()
  const animationId = `${location.pathname}${location.search}${location.hash}-${location.key}`

  return (
    <div aria-hidden="true" className="page-transition-loader">
      {Array.from({ length: STRIP_COUNT }).map((_, index) => (
        <span
          key={`${animationId}-${index}`}
          className={`page-transition-strip page-transition-strip-${index + 1}`}
        />
      ))}
    </div>
  )
}
