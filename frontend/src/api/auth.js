export const signupUser = async (email, password) => {
    try {
        const res = await fetch('http://localhost:5000/api/users/signup', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });
        if (!res.ok) throw new Error("Signup failed");
        const data = await res.json(); // ✅ await here
        console.log("Successfully Signed Up", data);
        return data; // ✅ return the user object
    } catch (error) {
        console.error("Error in Signing Up", error);
        throw error;
    }
}

export const loginUser = async (email, password) => {
    try {
        const res = await fetch('http://localhost:5000/api/users/login', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password })
        });
        if (!res.ok) throw new Error("Login failed");
        const data = await res.json(); // ✅ await here
        console.log("Successfully Logged In", data);
        return data; // ✅ return the user object
    } catch (error) {
        console.error("Error in loginUser:", error);
        throw error;
    }
}
