import { useStorageFailed } from '../../hooks/useStorageFailed'

// Shown only when the browser refuses to store data, so nothing is lost without warning.
export default function StorageNotice() {
    const failed = useStorageFailed()
    if (!failed) return null
    return (
        <div className="notice" role="alert">
            <div className="notice__inner">
                <p className="notice__title">Your browser is not saving changes.</p>
                <p> Storage is blocked or full, so tasks will be lost when you close this tab. Allow site data
          for this page in your browser settings.</p>
            </div>
        </div>
    )
}