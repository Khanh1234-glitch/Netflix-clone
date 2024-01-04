const registerUser = async (userData) => {
    try {
        const response = await fetch("https://6595fb2204335332df836c29.mockapi.io/api/users/Users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(userData),
        });

        if (!response.ok) {
            throw new Error("Registration failed");
        }

        const newUser = await response.json();
        console.log("User registered:", newUser);
        return newUser;
    } catch (error) {
        console.error("Error during registration:", error.message);
        throw error;
    }
};

export { registerUser };
