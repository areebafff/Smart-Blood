//const Doctors = require("./Doctors");

module.exports = (sequelize,DataTypes) => {
    const Hospitals = sequelize.define("Hospitals",{
        Hospital_ID:{
            type:DataTypes.CHAR(5),
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        Name:{
            type:DataTypes.STRING(20),
            unique: false
        },
        City:{
            type:DataTypes.STRING(15)
        },
        URL:{
            type:DataTypes.STRING(30),
    
        },
        Phone_No:{
            type:DataTypes.CHAR(11),
        
        }
    }
    
    );
    
    Hospitals.associate = (models) => {
        Hospitals.hasMany(models.Doctors, {
         onDelete: "cascade",
        });
         Hospitals.hasMany(models.Results, {
           onDelete: "cascade",
         });
     };
    return Hospitals;
};