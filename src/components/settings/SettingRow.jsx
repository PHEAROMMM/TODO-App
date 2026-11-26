export default function SettingRow({ label, description, htmlFor, children }) {
  return (
    <div className="setting-row">
      <div className="setting-row__text">
        <label className="setting-row__label" htmlFor={htmlFor}>
          {label}
        </label>
        {description && <p className="setting-row__desc">{description}</p>}
      </div>
      <div className="setting-row__control">{children}</div>
    </div>
  )
}
