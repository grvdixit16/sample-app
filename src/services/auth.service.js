const authentication = (username, password) => {
    const user = {
        username,
        password
    };
    return new Promise((resolve, reject) => {
        if (username === "" || password === "") reject({});

        setTimeout(() => {
            localStorage.setItem('user', JSON.stringify(user));
            resolve(user);
        }, 1000);
    })
}

const logout = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            localStorage.removeItem('user');
            resolve(true);
        });
    })
}

const authService = {
    authentication,
    logout,
};

export default authService; 