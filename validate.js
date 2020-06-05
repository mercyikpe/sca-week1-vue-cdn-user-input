const validateName = name => {
    if (!name.length) {
        return { valid: false, error: "This field is required" };
    }
    if (name.length < 3) {
        return { valid: false, error: "Name is too short" };
    }
    return { valid: true, error: null };
};

const validatePhone = phone => {
    if (!phone.length) {
        return { valid: false, error: 'This field is required.' };
    }

    if (!phone.match(/^[+][(]?[0-9]{1,3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,7}$/gm)) {
        return { valid: false, error: 'Please, enter a valid international phone number.' };
    }

    return { valid: true, error: null };
}

const validateEmail = email => {
    if (!email.length) {
        return { valid: false, error: "This field is required" };
    }
    if (!email.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        return { valid: false, error: "Please, enter a valid email." };
    }
    return { valid: true, error: null };
};

const validatePassword = password => {
    if (!password.length) {
        return { valid: false, error: "This field is required" };
    }
    if (password.length < 7) {
        return { valid: false, error: "Password is too short" };
    }
    return { valid: true, error: null };
};