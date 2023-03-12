module.exports = (sequelize,DataTypes) => {
    const Blood_Tests = sequelize.define("Blood_Tests",{
        Test_ID:{
            type:DataTypes.CHAR(5),
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        Test_type:{
            type:DataTypes.STRING(20),
        },
        Test_name:{
            type:DataTypes.STRING(20),
            unique: false
        },
        MIN_Range:{
            type:DataTypes.FLOAT(6,2),
            
        },
        MAX_Range:{
            type:DataTypes.FLOAT(6,2),
            
        }
    });
    return Blood_Tests;
};