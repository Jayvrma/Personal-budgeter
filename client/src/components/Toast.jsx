import { useEffect } from 'react'
import './Toast.css'

// Small popup in the bottom-right corner. Closes itself after `duration` ms.
// type: 'success' | 'error'
function Toast({ message, type = 'success', onClose, duration = 4000 }) {
    useEffect(() => {
        const timer = setTimeout(onClose, duration)
        return () => clearTimeout(timer)
    }, [message, onClose, duration])

    return (
        <div className={`toast toast-${type}`} role={type === 'error' ? 'alert' : 'status'}>
            <span>{message}</span>
            <button type="button" className="toast-close" onClick={onClose} aria-label="Close">
                ×
            </button>
        </div>
    )
}

export default Toast
