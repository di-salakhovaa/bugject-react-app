// доходы
export const INCOME_CATEGORIES = {
    salary: "Зарплата",
    transfer: "Перевод",
    cashbacl: "Кэшбек"
};

// расходы
export const EXPENSE_CATEGORIES = {
    products: "Продукты",
    car: "Автомобиль",
    services: "Коммунальные услуги"
};

export const CATEGORIES = {
    ...INCOME_CATEGORIES, 
    ...EXPENSE_CATEGORIES
};

