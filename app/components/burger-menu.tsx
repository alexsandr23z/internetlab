'use client';
import { useState } from "react";

type TBurgerMenu = {
  setActiveMenu: (arg: boolean) => void;
}

function BurgerMenu({setActiveMenu}: TBurgerMenu) {
  const [activeNavLink, setActiveNavLink] = useState<string>('');
  
  const handleNavLinkClick = (id: string) => {
    setActiveNavLink(id);
  };

  const handleClosedMenu = () => {
    setActiveMenu(false);
  };
  
  return (
    <div className="burger__menu">
      <div className="burger__menu-wrap">
        <div className="burger__menu--active">
          <button className="menu__toggle--closed" type="button"
            onClick={handleClosedMenu}>
            <span className="visually-hidden">Открыть меню</span>
          </button>
        </div>
        <div className="menu__testLab">
          <div className="menu-testLab__checkbox">
            <input className="menu-testLab__checkbox-input menu-input__testLab" id="testLab" autoComplete="off" name="checkbox" title="checkbox" placeholder="checkbox" type="checkbox" />
            <label className="menu-testLab" htmlFor="testLab" />
          </div>
          <span className="menu-testLab__title">testLab</span>
        </div>
      </div>
      <div className="menu__nav">
        <ul className="menu-nav__list menu-list">
          <li className="menu-list__item">
            <a
              className={`menu-list__link ${activeNavLink === 'works' ? 'menu-list__link--active' : ''}`}
              href="#works"
              onClick={() => handleNavLinkClick('works')}
            >
              Как это работает
            </a>
            <div className="menu__burger-arrow"></div>
          </li>
          <li className="menu-list__item">
            <a
              className={`menu-list__link ${activeNavLink === 'thirdBlock' ? 'menu-list__link--active' : ''}`}
              href="#thirdBlock"
              onClick={() => handleNavLinkClick('thirdBlock')}
            >
              3-й блок
            </a>
            <div className="menu__burger-arrow"></div>
          </li>
          <li className="menu-list__item">
            <a
              className={`menu-list__link ${activeNavLink === 'questions' ? 'menu-list__link--active' : ''}`}
              href="#questions"
              onClick={() => handleNavLinkClick('questions')}
            >
              Вопросы и ответы
            </a>
            <div className="menu__burger-arrow"></div>
          </li>
          <li className="menu-list__item">
            <a
              className={`menu-list__link ${activeNavLink === 'form' ? 'menu-list__link--active' : ''}`}
              href="#form"
              onClick={() => handleNavLinkClick('form')}
            >
              Форма
            </a>
            <div className="menu__burger-arrow"></div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default BurgerMenu;