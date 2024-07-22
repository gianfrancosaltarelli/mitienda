import { useEffect, useState } from "react"

export const useDesktop = () => {

  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {

    const handleResize = () => {
      console.log("resize")
      const ancho = window.innerWidth
      if (ancho > 1000) {
        setIsDesktop(true)
      } else {
        setIsDesktop(false)
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      console.log("se desmonta")
      window.removeEventListener("resize", handleResize)
    }

  }, [])

  return isDesktop

}