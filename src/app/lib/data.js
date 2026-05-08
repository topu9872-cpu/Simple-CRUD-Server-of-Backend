export const getUers = async () => {
    const res = await fetch('http://localhost:5000/users');
    const data = await res.json();
    return data;
};

export const getUserById = async (userid) => {
    const res = await fetch(`http://localhost:5000/users/${userid}`);
    const data = await res.json();
    return data;
}