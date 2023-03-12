module.exports = (sequelize,DataTypes) => {
    const Blood_Bank = sequelize.define("Blood_Bank",{
        Blood_Bank_ID:{
            type:DataTypes.CHAR(5),
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        Name:{
            type:DataTypes.STRING(20),
            
        },
        City:{
            type:DataTypes.STRING(15)
        },
        Country_ID:{
            type:DataTypes.STRING(30),
            
        }
    });
    return Blood_Bank;
};