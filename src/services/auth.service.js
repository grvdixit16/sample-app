const authentication = (username, password) => {
    const user = {
        username,
        password
    };
    return new Promise((resolve, reject) => {
        if(username === "" || password === "") reject({});
        
        setTimeout(() => {
            resolve(user);
        });
    })
}

const authService = {
    authentication
};

export default authService; 