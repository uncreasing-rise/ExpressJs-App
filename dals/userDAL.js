const User = require('../Models/User')

const createUser = async (userData) => {
    const user = new User(userData)
    return await user.save()
}

const findUserByEmail = async (email) => {
    return await User.findOne({ email })
}

module.exports = { createUser, findUserByEmail }
