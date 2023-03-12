module.exports = (sequelize,DataTypes) => {
    const patient_history = sequelize.define("patient_history",{
        Previous_Medications:{
            type:DataTypes.STRING(20)
        },
        Drugs:{
            type:DataTypes.STRING(3)
        },
    });
    return patient_history;
};