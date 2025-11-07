const User = require("../models/User");

module.exports = {
    users: async() => await User.find(),
    user: async({ id }) => await User.findById(id),

    createUser: async({ userInput }) => {
        const user = new User(userInput);
        return await user.save();
    },

    updateUser: async({ id, userInput }) => {
        return await User.findByIdAndUpdate(id, userInput, { new: true });
    },

    deleteUser: async({ id }) => {
        await User.findByIdAndDelete(id);
        return "Kullanıcı silindi";
    }
};