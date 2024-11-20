"use client"

import React, { useEffect } from "react"
import { createPortal } from "react-dom"
import { cn } from "../../lib/utils"
import { X } from "lucide-react"

interface DrawerProps {
  isOpen: boolean
  onClose: () => void
  children: React.ReactNode
  direction?: "left" | "right" | "top" | "bottom"
  width?: string
  height?: string
  className?: string
  closeOnOutsideClick?: boolean
  showCloseButton?: boolean
}

const Drawer: React.FC<DrawerProps> = ({
  isOpen,
  onClose,
  children,
  direction = "right",
  width = "400px",
  height = "400px",
  className,
  closeOnOutsideClick = true,
  showCloseButton = true,
}) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }

    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!isOpen) return null

  const getDrawerStyles = () => {
    const baseStyles = "fixed bg-white shadow-[0px 6px 12px 0px #2D3A481F] transition-transform duration-300 ease-in-out z-[9999]"
    const directionStyles = {
      left: `left-0 top-0 h-screen w-[${width}] transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`,
      right: `right-0 top-0 h-screen w-[${width}] transform ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`,
      top: `top-0 left-0 w-screen h-[${height}] transform ${
        isOpen ? "translate-y-0" : "-translate-y-full"
      }`,
      bottom: `bottom-0 left-0 w-screen h-[${height}] transform ${
        isOpen ? "translate-y-0" : "translate-y-full"
      }`,
    }

    return cn(baseStyles, directionStyles[direction], className)
  }

  const drawerContent = (
    <>
      {/* Backdrop */}
      <div
        className={cn(
          "fixed inset-0 bg-black/30 transition-opacity duration-300 ease-in-out z-[9998]",
          isOpen ? "opacity-100" : "opacity-0"
        )}
        onClick={() => closeOnOutsideClick && onClose()}
      />

      {/* Drawer */}
      <div className={getDrawerStyles()}>
        {showCloseButton && (
          <button
            onClick={onClose}
            className="absolute right-4 top-4 p-1 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close drawer"
          >
            <X className="h-5 w-5 text-darkGrey" />
          </button>
        )}
        <div className="h-full overflow-auto p-6">
          {children}
        </div>
      </div>
    </>
  )

  // Use createPortal to render the drawer at the document body level
  return createPortal(drawerContent, document.body)
}

export { Drawer, type DrawerProps }
