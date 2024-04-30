'use client';
import { useState } from "react";
import BurgerMenu from "./burger-menu";

function Header() {
  const [activeNavLink, setActiveNavLink] = useState<string>('');
  const [activeMenu, setActiveMenu] = useState<boolean>(false);
  
  const handleNavLinkClick = (id: string) => {
    setActiveNavLink(id);
  };

  const handleActiveMenuClick = () => {
    setActiveMenu(true);
  };

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__wrapper">
          <button className="header__toggle" type="button"
            onClick={handleActiveMenuClick}>
            <span className="visually-hidden">Открыть меню</span>
          </button>
          {activeMenu && <BurgerMenu setActiveMenu={setActiveMenu}></BurgerMenu>}
          <div className="header__testLab">
            <div className="testLab__checkbox">
              <input className="testLab__checkbox-input input__testLab" id="testLab" autoComplete="off" name="checkbox" title="checkbox" placeholder="checkbox" type="checkbox" />
              <label className="testLab" htmlFor="testLab" />
            </div>
            <span className="testLab__title">testLab</span>
          </div>
          <div className="header__nav">
            <ul className="header__nav__list site-list">
              <li className="site-list__item">
                <a
                  className={`site-list__link ${activeNavLink === 'works' ? 'site-list__link--active' : ''}`}
                  href="#works"
                  onClick={() => handleNavLinkClick('works')}
                >
                  Как это работает
                </a>
              </li>
              <li className="site-list__item">
                <a
                  className={`site-list__link ${activeNavLink === 'thirdBlock' ? 'site-list__link--active' : ''}`}
                  href="#thirdBlock"
                  onClick={() => handleNavLinkClick('thirdBlock')}
                >
                  3-й блок
                </a>
              </li>
              <li className="site-list__item">
                <a
                  className={`site-list__link ${activeNavLink === 'questions' ? 'site-list__link--active' : ''}`}
                  href="#questions"
                  onClick={() => handleNavLinkClick('questions')}
                >
                  Вопросы и ответы
                </a>
              </li>
              <li className="site-list__item">
                <a
                  className={`site-list__link ${activeNavLink === 'form' ? 'site-list__link--active' : ''}`}
                  href="#form"
                  onClick={() => handleNavLinkClick('form')}
                >
                  Форма
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header__content">
          <h1 className="header__title">Говорят, никогда не поздно <br />сменить профессию<br /></h1>
          <p className="header__description">Сделай круто тестовое задание и у тебя получится</p>
        </div>
        <button type="button" className="header__button">Проще простого!</button>
      </div>
    </header>
  )
}

export default Header;

