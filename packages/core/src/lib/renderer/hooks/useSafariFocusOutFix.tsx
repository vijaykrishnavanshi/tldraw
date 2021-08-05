import Utils from '../../utils'
import { useEffect } from 'react'
import { useTLContext } from './useTLContext'

// Send event on iOS when a user presses the "Done" key while editing a text element.

export function useSafariFocusOutFix(): void {
  const { callbacks } = useTLContext()

  useEffect(() => {
    function handleFocusOut() {
      callbacks.onBlurEditingShape?.()
    }

    if (!Utils.isMobile()) return

    document.addEventListener('focusout', handleFocusOut)
    return () => document.removeEventListener('focusout', handleFocusOut)
  }, [callbacks])
}