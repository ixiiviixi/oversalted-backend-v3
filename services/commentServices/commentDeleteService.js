const commentModel = require('../../models/commentsModel.js')
const userModel = require('../../models/usersModel.js')
const forumModel = require('../../models/forumsModel.js')

const commentDeleteService = (commentId) => {
         commentModel.findByIdAndDelete(
            commentId,
            (error, deletedComment) => {
                if (error) {
                    console.error(error)
                } else {
                    userModel.updateOne({}, {
                        $pull: {
                            userComments: {
                                $in: deletedComment._id
                            }
                        }
                        }, (error, updatedUserComment) => {
                        if (error) {
                            console.error(error)
                        }
                    })
                    forumModel.updateOne({}, {
                        $pull: {
                            comments: {
                                $in: deletedComment._id
                            }
                        }
                        }, (error, updatedForumComment) => {
                        if (error) {
                            console.error(error)
                        }
                    })
                    return null //this will eventually be fixed once I figure out how to handle delete routes in
                    // returning sucess message. As of right now it does its job.
                }
            })
}

module.exports = {
    commentDeleteService
}