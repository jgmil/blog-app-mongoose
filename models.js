const mongoose = require('mongoose');

// this is our schema to represent a restaurant
const blogPostSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    author: {
        firstName: String,
        lastName: String,
    },
});

// *virtuals* (http://mongoosejs.com/docs/guide.html#virtuals)
//example of restaurant virual
//restaurantSchema.virtual('addressString').get(function() {
//    return `${this.address.building} ${this.address.street}`.trim()});

// this virtual will display the author's first and last name, separated by a space
restaurantSchema.virtual('authorName').get(function () {
    //need to define this virtual
});


blogPostSchema.methods.serialize = function () {

    return {
        id: this._id,
        title: this.title,
        author: this.authorName,
        content: this.content,
    };
}

// note that all instance methods and virtual properties on our
// schema must be defined *before* we make the call to `.model`.
const BlogPosts = mongoose.model('BlogPosts', blogPostSchema);

module.exports = {
    BlogPosts
};
