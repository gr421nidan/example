export const validationRules = {
    firstname: {
        required: "Поле обязательно к заполнению",
        pattern: {
            value: /^[А-Яа-яЁё\-]{1,255}$/,
            message: "Поле введено некорректно"
        }
    },
    surname: {
        required: "Поле обязательно к заполнению",
        pattern: {
            value: /^[А-Яа-яЁё\-]{1,255}$/,
            message: "Поле введено некорректно"
        }
    },
    email: {
        required: "Поле обязательно к заполнению",
        pattern: {
            value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
            message: "Поле введено некорректно"
        }
    },
    password: {
        required: "Поле обязательно к заполнению",
        minLength: {
            value: 8,
            message: "Пароль должен содержать от 8 до 65 символов"
        },
        maxLength: {
            value: 65,
            message: "Пароль должен содержать от 8 до 65 символов"
        },
        pattern: {
            value: /^[a-zA-Z0-9!@#$%^&*()_+.[\]{};":'<>?,/~`-]{8,65}$/,
            message: "Поле введено некорректно"
        }
    },
    role_id: {
        required: "Выберите форму использования"
    }
};