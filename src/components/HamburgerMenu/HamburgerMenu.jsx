export default function HamburgerMenu({ callback, className, activeToggle }) {

  return (
    <button
      type="button"
      onClick={callback}
      className={`hamburger-icon ${className ? className : ""} ${activeToggle ? "active" : ""}`.trim()}
      aria-label="Menu"
      aria-expanded={activeToggle}
    >
      <span className="hamburger-icon--bar-1" aria-hidden="true"></span>
      <span className="hamburger-icon--bar-2" aria-hidden="true"></span>
      <span className="hamburger-icon--bar-3" aria-hidden="true"></span>
    </button>
  );
}
