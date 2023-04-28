export default function HamburgerMenu({ callback, className, activeToggle }) {

  return (
    <div onClick={callback} className={`hamburger-icon ${className ? className : ""} ${activeToggle ? "active" : ""}`.trim()}>
      <div className="hamburger-icon--bar-1"></div>
      <div className="hamburger-icon--bar-2"></div>
      <div className="hamburger-icon--bar-3"></div>
    </div>
  );
}
