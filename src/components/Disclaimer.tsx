"use client"

import React, { useEffect, useState, useCallback, useRef } from "react"
import { AlertTriangle } from "lucide-react"

const Disclaimer: React.FC = () => {
  const [showModal, setShowModal] = useState<boolean>(false)
  const [showFloatingIcon, setShowFloatingIcon] = useState<boolean>(false)
  const [mounted, setMounted] = useState<boolean>(false)
  const modalRef = useRef<HTMLDivElement | null>(null)

  const collapseToFloatingIcon = useCallback(() => {
    setShowModal(false)
    setShowFloatingIcon(true)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    // Collapse the modal to floating icon on first user scroll/touch
    const handleFirstScroll = () => {
      collapseToFloatingIcon()
      window.removeEventListener("scroll", handleFirstScroll)
      window.removeEventListener("wheel", handleFirstScroll as EventListener)
      window.removeEventListener("touchmove", handleFirstScroll as EventListener)
    }

    if (showModal) {
      window.addEventListener("scroll", handleFirstScroll, { passive: true })
      window.addEventListener("wheel", handleFirstScroll as EventListener, { passive: true })
      window.addEventListener("touchmove", handleFirstScroll as EventListener, { passive: true })
    }
    return () => {
      window.removeEventListener("scroll", handleFirstScroll)
      window.removeEventListener("wheel", handleFirstScroll as EventListener)
      window.removeEventListener("touchmove", handleFirstScroll as EventListener)
    }
  }, [showModal, collapseToFloatingIcon])

  // Allow keyboard escape to minimize
  useEffect(() => {
    if (!showModal) return
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        collapseToFloatingIcon()
      }
    }
    window.addEventListener("keydown", onKeyDown)
    return () => window.removeEventListener("keydown", onKeyDown)
  }, [showModal, collapseToFloatingIcon])

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showModal) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [showModal])

  const disclaimerContent = (
    <>
      <div className="flex items-center gap-2 text-red-600">
        <AlertTriangle className="h-5 w-5" />
        <span className="font-semibold">Disclaimer</span>
      </div>
      <div className="mt-3 space-y-3 text-sm leading-6 text-gray-700">
        <p>
          We, <span className="font-semibold">Synergy Access</span>, are the original and legally registered company operating under this name. It has come to our attention that certain individuals or entities are attempting to misuse our brand name to mislead customers.
        </p>
        <p>
          Please be advised that such impersonation is a punishable offence under applicable law. We are in the process of taking strict legal action against these parties.
        </p>
        <p>
          If you are approached by anyone claiming to represent Synergy Access without proper verification, we urge you to immediately report the matter to us. Kindly contact <span className="font-semibold">Mrs. Savita Sharma</span> at
          {" "}
          <a href="tel:+918076280367" className="font-semibold text-gray-900 underline">+91 80762 80367</a>
          {" "}
          for confirmation or assistance.
        </p>
        <p>We appreciate your support and cooperation.</p>
      </div>
    </>
  )

  if (!mounted) return null

  return (
    <>
      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center" role="dialog" aria-modal="true" aria-labelledby="disclaimer-title" aria-describedby="disclaimer-description">
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-sm" />

          <div ref={modalRef} className="relative z-[101] mx-4 w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl ring-1 ring-black/5">
            <div className="bg-gradient-to-r from-red-600 to-red-500 px-6 py-4 text-white">
              <div className="flex items-center gap-3">
                <div className="rounded-full bg-white/20 p-2">
                  <AlertTriangle className="h-5 w-5" />
                </div>
                <div>
                  <h2 id="disclaimer-title" className="text-lg font-semibold leading-6">Important Disclaimer</h2>
                  <p className="text-xs/5 opacity-80">Please read carefully. This will minimize impersonation risks.</p>
                </div>
              </div>
            </div>

            <div id="disclaimer-description" className="max-h-[70vh] overflow-y-auto px-6 py-5">{disclaimerContent}</div>

            <div className="border-t border-gray-100 bg-gray-50/60 px-6 py-4 text-xs text-gray-500">
              This message will minimize after you start scrolling or pressing Esc.
            </div>
          </div>
        </div>
      )}

      {showFloatingIcon && (
        <div className="fixed bottom-[max(5rem,env(safe-area-inset-bottom))] left-4 z-40 flex items-center gap-2">
          <button
            aria-label="Open disclaimer"
            className="group relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-red-600 text-white shadow-lg ring-2 ring-red-300 transition hover:bg-red-700 focus:outline-none focus:ring-4 focus:ring-red-300"
            onClick={() => setShowModal(true)}
            title="Read disclaimer"
          >
            <AlertTriangle className="h-6 w-6" />
          </button>

        </div>
      )}
    </>
  )
}

export default Disclaimer

