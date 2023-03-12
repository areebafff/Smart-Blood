module.exports = (sequelize,DataTypes) => {
    const Blood_Donor = sequelize.define("Blood_Donor",{
        donor_id:{
            type:DataTypes.CHAR(5),
            primaryKey: true,
            allowNull: false,
            unique: true
        },
        Phone_No:{
            type:DataTypes.CHAR(11)
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
    Blood_Donor.associate = (models) =>{
        Blood_Donor.hasMany(models.Donor_Appointments,{
            onDelete:"cascade",
        });
        Blood_Donor.hasMany(models.Donor_History,{
            onDelete:"cascade",
        });
    };
    return Blood_Donor;
};