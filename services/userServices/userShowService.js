const usersModel = require('../../models/usersModel.js')

const userShowService = async (userID) => {
    try {
        return await usersModel.findById(userID)
    } catch (error) {
        throw Error('Error while fetching user. Location: userShowService')
    }
}

module.exports = {
    userShowService
}
