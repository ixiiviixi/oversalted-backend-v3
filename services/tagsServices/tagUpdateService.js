const tagModel = require('../../models/tagModel.js')

const tagUpdateService = async (tagId, tagBody) => {
    try {
        await tagModel.findByIdAndUpdate(
            tagId,
            {
                ...tagBody
            })
        return tagModel.findById(tagId)
    }catch(error) {

    }
}

module.exports = {
    tagUpdateService
}
