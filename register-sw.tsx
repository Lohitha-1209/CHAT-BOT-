"use client"

import { useEffect } from "react"

export function RegisterSW() {
  useEffect(() => {
    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/__v0_sw.js", { scope: "/" }).catch(() => {
        /* ignore – keeps the console clean */
      })
    }
  }, [])

  return null
}
