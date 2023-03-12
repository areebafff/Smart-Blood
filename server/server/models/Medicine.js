module.exports = (sequelize,DataTypes) => {
    const Medicine = sequelize.define("Medicine",{
        Medicine_ID:{
            type:DataTypes.CHAR(5),
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        Medicine_Name:{
            type:DataTypes.STRING(20),
            unique: false
        },
        Disease:{
            type:DataTypes.STRING(200),
        },
        Status:{
            type:DataTypes.STRING(200),
        },
        Test_Name:{
            type:DataTypes.STRING(200),
        },
        Dosage:{
            type:DataTypes.DOUBLE(4,0)
        },
        Price:{
            type:DataTypes.DOUBLE(5,0)
        }
    });
    return Medicine;
};