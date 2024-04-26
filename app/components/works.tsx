function Works() {
  return (
    <div className="main__works" id="works">
      <h2 className="visually-hidden">1-Блок</h2>
      <h2 className="main__works-title">Как это работает</h2>
      <div className="main__works-info">
        <div className="info">
          <picture>
            <img className="info__image" src="/img/waiting.svg" alt="ожидание."/>
          </picture>
          <h3 className="info__title">Прочитай задание внимательно</h3>
          <p className="info__description">Думаю у тебя не займет это больше двух-трех минут</p>
        </div>
        <div className="info">
          <picture>
            <img className="info__image" src="/img/delivery-truck.svg" alt="доставка-грузовой автомобиль."/>
          </picture>
          <h3 className="info__title">Изучи весь макет заранее</h3>
          <p className="info__description">Подумай как это будет работать на разных разрешениях и при скролле</p>
        </div>
        <div className="info">
          <picture>
            <img className="info__image" src="/img/secure.svg" alt="безопасность."/>
          </picture>
          <h3 className="info__title">Сделай хорошо</h3>
          <p className="info__description">Чтобы мы могли тебе доверить подобные задачи в будущем</p>
        </div>
        <div className="info">
          <picture>
            <img className="info__image" src="/img/money-bags.svg" alt="деньги."/>
          </picture>
          <h3 className="info__title">Получи предложение</h3>
          <p className="info__description">Ну тут все просто, не я придумал правила, но думаю так и будет)))</p>
        </div>
      </div>
    </div>
  )
}

export default Works;