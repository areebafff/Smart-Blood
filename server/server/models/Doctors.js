//const Hospitals = require("./Hospitals");

module.exports = (sequelize,DataTypes) => {
    const Doctors = sequelize.define("Doctors",{
        Doctor_ID:{
            type:DataTypes.CHAR(5),
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        First_name:{
            type:DataTypes.STRING(20),
            
        },
        Last_name:{
            type:DataTypes.STRING(20)
        },
        Email:{
            type:DataTypes.STRING(20),
            
        },
        Phone_No:{
            type:DataTypes.CHAR(11),
            
        }
    });
    
     Doctors.associate = (models) => {
         Doctors.hasOne(models.Hospitals, {
           onDelete: "cascade",
         });
         Doctors.hasMany(models.Medicine, {
             onDelete: "cascade",
                });
         Doctors.hasMany(models.Results, {
         onDelete: "cascade",
         });
    
    
     };
    
    return Doctors;
    
};