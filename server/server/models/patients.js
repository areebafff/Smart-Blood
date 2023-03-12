//const { HasMany } = require("sequelize");

module.exports = (sequelize,DataTypes) => {
    const patients = sequelize.define("patients",{
        patient_id:{
            type:DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        Reg_No:{
            type:DataTypes.CHAR(13),
            unique: true,
            allowNull: false
        },
        
        Phone_No:{
            type:DataTypes.CHAR(11),
            unique: false
        },
        Blood_Group:{
            type:DataTypes.STRING(3)
        },
        Gender:{
            type:DataTypes.CHAR(1)
        },
        Address:{
            type:DataTypes.STRING(50)
        },
        City:{
            type:DataTypes.STRING(20)
        }
    });

    patients.associate = (models) => {
         patients.hasMany(models.Medicine, {
          onDelete: "cascade",
         });
         patients.hasOne(models.patient_history, {
            onDelete: "cascade",
          });
          patients.hasOne(models.Hospitals, {
            onDelete: "cascade",
          });
          patients.hasOne(models.Test_report, {
            onDelete: "cascade",
          });
          patients.hasOne(models.Results, {
            onDelete: "cascade",
          });
          patients.hasOne(models.Doctors,{
            onDelete:"cascade",
          })
      };
    return patients;
};