module.exports = (sequelize, DataTypes) => {
    const Comments = sequelize.define("Comments",{
        commentBody: {
            type: DataTypes.STRING,
            allownull: false,
        },
    });

    return Comments;
}


// PostId eklemedik cunku Posts modelinde 'Posts.associate' kullandık
// yani otomatik olarak eklenecek