const Features = () => {
    return (
        <div className="features">
            <div className="features-list">
                <h3 className="features-name">Характеристики персонажа:</h3>
                <div className="features-item">
                    <span className="features-item__name">Сила:</span>
                    <input type="text" className="features-item__value" value="0" />
                </div>

                <div className="features-item">
                    <span className="features-item__name">Ловкость:</span>
                    <input type="text" className="features-item__value" value="0" />
                </div>

                <div className="features-item">
                    <span className="features-item__name">Интеллект:</span>
                    <input type="text" className="features-item__value" value="0" />
                </div>

                <div className="features-item">
                    <span className="features-item__name">Харизма:</span>
                    <input type="text" className="features-item__value" value="0" />
                </div>

                <div className="features-item features-item__additional">
                    <p className="features-item__name">Жизненная сила: 3+сил</p>
                </div>

                <div className="features-item features-item__additional">
                    <p className="features-item__name">Уклонение: 10+инт</p>
                </div>

                <div className="features-item features-item__additional">
                    <p className="features-item__name">Энергичность: ловк+инт</p>
                </div>
            </div>
        </div>
    )
}

export default Features;