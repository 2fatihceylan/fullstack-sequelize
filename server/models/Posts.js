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
    });
    


    Posts.associate = (models) => {   // Posts tablosunu başka tablolarla ilişkilendirmek amacıyla kullanılır, eger iliski yoksa yazmaya gerek yoktur
        Posts.hasMany(models.Comments,{  //buranın anlamı: Posts birden cok Comments e sahip olabilir
            onDelete: "cascade",            //eger Postu silersen bu posta ait tum Comments leri de siler
        });
    }


    return Posts;
}