

module.exports = (sequelize,DataTypes) => {
    const Test_report = sequelize.define("Test_report",{

        ID:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncremental: true
        },
        Test_type:{
            type:DataTypes.STRING(20),
        },
        Test_name:{
            type:DataTypes.STRING(20),
            unique: false
        },
        Value:{
            type:DataTypes.FLOAT(6,2),
            
        },

        //initialAutoIncrement: 1000

     
    });
  

    return Test_report;
};