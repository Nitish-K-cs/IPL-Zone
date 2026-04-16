import { useState, useRef, useEffect } from 'react';
import './index.css';

const SearchBar = ({ value, onChange, placeholder = "Search..." }) => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef(null);

  const toggle = () => {
    setOpen(prev => !prev);
    if (!open) setTimeout(() => inputRef.current?.focus(), 280);
  };

  // Close on Escape
  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape') setOpen(false); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className="search-widget">
      <div className={`search-expand ${open ? 'open' : ''}`}>
        <span className="search-icon-inner">🔍</span>
        <input
          ref={inputRef}
          type="text"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
        />
        {value && (
          <button
            className="search-clear"
            onClick={() => onChange({ target: { value: '' } })}
          >✕</button>
        )}
      </div>
      <button
        className={`search-toggle ${open ? 'open' : ''}`}
        onClick={toggle}
        aria-label="Toggle search"
      >
        {open ? '✕' : '🔍'}
      </button>
    </div>
  );
};

export default SearchBar;