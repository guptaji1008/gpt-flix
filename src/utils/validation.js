export const validateLogin = (email, password) => {
    if (!/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)) return "Email is not valid";
    if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password)) return "Password is not valid";
    return;
}

export const validateSignUp = (name, email, password, conPassword) => {
    if (name.trim().length < 3) return "Name should be atleast three words";
    if (!/^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email)) return "Email is not valid";
    if (!/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password)) return "Password is not valid";
    if (password !== conPassword) return "Password does not matches";
    return;
}