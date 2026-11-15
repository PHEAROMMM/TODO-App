export default function EmptyState({ title, message, children}) {
    return(
        <div className="empty-state">
            <h2>{title}</h2>
            {message && <p className="empty-state__message">{message}</p>}
            {children && <div className="empty-state__action">{children}</div>}
        </div>
    )
}