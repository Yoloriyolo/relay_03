const regExp = {
    id: /^[a-zA-Z0-9]{4,15}$/,
    password: /^[a-zA-Z0-9]{6,15}$/,
};

export const isId = (isId) => {
    return regExp.id.test(isId);
}

export const isPassword = (isPassword) => {
    return regExp.password.test(isPassword);
}

// 추가하시고 싶은거 있으시면 추가하세요 !