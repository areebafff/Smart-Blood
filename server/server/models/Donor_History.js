module.exports = (sequelize,DataTypes) =>{

    const Donor_History = sequelize.define("Donor_History",{

        Previous_Medications:{
            type:DataTypes.STRING(20)
        },
        Drugs:{
            type:DataTypes.STRING(3),
            allowNull:true
        }
    });
    return Donor_History;

};
