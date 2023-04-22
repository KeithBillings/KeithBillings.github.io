export default function HamburgerMenu({ callback, className, activeToggle }) {
  return (
    <div onClick={callback} className={activeToggle ? `${className} active` : className}>
      <div className="mobile-menu-icon--bar-1"></div>
      <div className="mobile-menu-icon--bar-2"></div>
      <div className="mobile-menu-icon--bar-3"></div>
    </div>
  );
}
