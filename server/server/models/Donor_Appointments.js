//const { Sequelize } = require(".");

module.exports = (sequelize,DataTypes) => {
    const Donor_Appointments = sequelize.define("Donor_Appointments",{
        Appointment_id:{
            type:DataTypes.CHAR(5),
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        Time:{
            type:DataTypes.DATE,
            defaultValue: DataTypes.NOW
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
    return Donor_Appointments;
};