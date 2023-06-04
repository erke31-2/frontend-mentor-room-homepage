import humbergerIcon from "../assets/images/icon-hamburger.svg";
import closeIcon from "../assets/images/icon-close.svg";
import logoIcon from "../assets/images/logo.svg";
type Props = {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const Navbar = ({ isOpen, setIsOpen }: Props) => {
  const content = isOpen ? (
    <div className="flex justify-between max-w-[85%] mx-auto items-center h-[100%] lg:hidden">
      <button onClick={() => setIsOpen(false)} className="cursor-pointer">
        <img src={closeIcon} alt="X-close-icon" />
      </button>

      <ul className="flex gap-6">
        <li>
          <a href="/">home</a>
        </li>
        <li>
          <a href="#" onClick={() => setIsOpen(false)}>
            shop
          </a>
        </li>
        <li>
          <a href="#about" onClick={() => setIsOpen(false)}>
            about
          </a>
        </li>
        <li>
          <a href="#" onClick={() => setIsOpen(false)}>
            contact
          </a>
        </li>
      </ul>
    </div>
  ) : (
    <div className="lg:hidden">
      <button className="absolute top-9 left-6" onClick={() => setIsOpen(true)}>
        <img src={humbergerIcon} alt="humbergerIcon" />
      </button>

      <img
        src={logoIcon}
        alt="room-logo"
        className="absolute top-9 left-[40%]"
      />
    </div>
  );
  return (
    <nav
      className={
        isOpen
          ? "absolute top-0 left-0 right-0 h-20 z-20 bg-White"
          : "absolute top-0 left-0 right-0 h-20 z-20"
      }
    >
      {content}
      <div className="hidden lg:flex items-center px-[70px] py-8 gap-8 text-white">
        <h2 className="text-2xl">
          <a href="/">room</a>
        </h2>
        <ul className="flex items-center gap-5 space-x-4 ml-4">
          <li>
            <a href="">home</a>
          </li>
          <li>
            <a href="">about</a>
          </li>
          <li>
            <a href="">shop</a>
          </li>
          <li>
            <a href="">contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;
