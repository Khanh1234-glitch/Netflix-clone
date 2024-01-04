const loginUser = async (credentials) => {
    try {
        const response = await fetch("https://6595fb2204335332df836c29.mockapi.io/api/users/Users", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            throw new Error("Error checking user existence");
        }

        const users = await response.json();
        const user = users.find((u) => u.email === credentials.email && u.password === credentials.password);

        if (!user) {
            throw new Error("Login failed");
        }

        console.log("User logged in:", user);
        return user;
    } catch (error) {
        console.error("Error during login:", error.message);
        throw error;
    }
};

export { loginUser };
