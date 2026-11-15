export default function FormField({ label, htmlFor, hint, error, children}) {
    return (
        <div className="field">
            <label className="field__label" htmlFor={htmlFor}>
                {label}
            </label>
            {children}
            {error ? (
                <p className="field__error" role="alert">
                    {error}
                </p>
                ) : (
                    hint && <p className="field__hint">{hint}</p>
                )}
        </div>
    )
}