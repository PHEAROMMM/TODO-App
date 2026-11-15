export default function SearchInput({ value, onChange, 
    placeholder = 'Search...', label = 'Search'}) {
        return(
            <input
            type="search"
            className="input"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            aria-label={label}
            />
        )
    }