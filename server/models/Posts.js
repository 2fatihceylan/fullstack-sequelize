module.exports = (sequelize, DataTypes)=>{

    // burda olusturduğumuz obje ile veritabanında otomatik olarak tablo oluşturulacak

    const Posts = sequelize.define("Posts",{
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        postText: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    })


    return Posts;
}