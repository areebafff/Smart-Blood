module.exports = (sequelize,DataTypes) => {
    const Results = sequelize.define("Results",{

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
        Status:{
            type:DataTypes.STRING(30),

        },
        Comments:{
            type:DataTypes.TEXT('Long')
        },
        
        });
    //initialAutoIncrement = 1000;
    return Results;
};