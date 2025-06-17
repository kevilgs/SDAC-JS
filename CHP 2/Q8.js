function updateProfile() {
    try{
        let userData = { name: "John Doe", age: 32 };
        userData.age += 1; 
        if (userData.age > 31) {
            throw new Error("Age exceeds maximum limit");
        }
        console.log("Profile saved successfully.");
    }
    catch (error) {
        console.error(error.name ,":", error.message);
    }
    finally {
        console.log("Profile update process completed.");
    }
}
updateProfile();