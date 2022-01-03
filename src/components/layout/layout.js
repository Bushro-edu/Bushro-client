import Link from "next/link";
import Image from "next/image";

// Images
import Logo from "../../assets/images/logo.png";
import Phone from "../../assets/images/phone.png";

const Layout = ({ children }) => {
  return (
    <>
      <header className="header">
        <Link href="/">
          <a className="logo-link">
            <Image
              className="logo"
              src={Logo}
              alt="The logo image of Bushro academy uz"
              width="208"
              height="68"
            />
          </a>
        </Link>

        <nav className="header__nav">
          <div className="hamburger">
            <span className="hamburger-stack"></span>

            <span className="hamburger-stack"></span>

            <span className="hamburger-stack"></span>
          </div>
          <ul className="header__nav-list">
            <li className="header__list-item">
              <Link href="/">
                <a className="header__link">Bosh sahifa</a>
              </Link>
            </li>
            <li className="header__list-item">
              <Link href="/about">
                <a className="header__link">Biz haqimizda</a>
              </Link>
            </li>
            <li className="header__list-item">
              <Link href="/contact">
                <a className="header__link">Bog'lanish</a>
              </Link>
            </li>
            <li className="header__list-item">
              <Link href="tel:+998990066011">
                <a className="header__link tel-number">
                  <Image
                    className="tel-icon"
                    src={Phone}
                    alt="Phone image"
                    aria-hidden="true"
                    width="18"
                    height="18"
                  />
                  <span>+998 (99) 006-60-11</span>
                </a>
              </Link>
            </li>
          </ul>
          <button className="header__register-btn">
            Kursga <span className="bla">Yozilish</span>
          </button>
        </nav>
      </header>

      {children}

      <footer></footer>
    </>
  );
};

export default Layout;
