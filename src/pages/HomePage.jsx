const HomePage = () => {
    return (
        <section>
            <div className="container">
                <div className="balance">
                    <h2>30 000 руб.</h2>
                </div>

                <div className="balance-form">
                    <form>
                        <h3>Добавить операцию</h3>

                        <div className="wrapper">
                            <input type="number" name="balance" placeholder="30 000" />

                            <select name="category">
                                <option value="products">Продукты</option>
                            </select>

                            <button className="button">Добавить операцию</button>
                        </div>
                    </form>
                </div>

                <div className="operations__wrapper">
                    <h2 className="operation__title">Операции:</h2>

                    <div className="filter">
                        <button>Все операции</button>
                        <button>Все доходы</button>
                        <button>Все расходы</button>
                    </div>

                    <div className="operations">
                        <div className="operation">
                            <h4 className="total">30 000 руб.</h4>
                            <p className="category">Категория: автомобиль</p>
                            <button className="button button--remove">Удалить</button>
                        </div>
                    </div>

                    <div className="paginations">
                        <button className="pagination__button">1</button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomePage;