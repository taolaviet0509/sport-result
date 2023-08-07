function validation({ error }, { func }, { username }, { email }, { password }) {
    const errors = error || {};
    if (!username.trim()) {
        console.log(1);
        errors.username = 'Username is required !';
    } else if (username.length < 8) {
        errors.username = ' Name must be more than 8 characters';
        console.log(2);
    }

    if (!email.trim()) {
        errors.email = 'Email is required !';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        errors.email = ' Email is not valid !';
    }

    if (!password.trim()) {
        errors.password = 'Password is required !';
    } else if (password.length < 10) {
        errors.password = ' Password must be more than 10 characters';
    }

    func(errors);

    return errors;
}

export default validation;
