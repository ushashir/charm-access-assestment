import { DataTypes, Model } from 'sequelize';

import db from '../config/db.config';

// import { ProductInstance } from './products'

interface UserAttributes {
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    password: string,
}

export class UserInstance extends 
    Model<UserAttributes>{}

UserInstance.init(
    {
    id: {
            type: DataTypes.UUIDV4,
            primaryKey: true,
        allowNull:false
        },
    firstName: {
            type: DataTypes.STRING,
        allowNull: false,
            validate: {
            notNull: {
                msg: "Full name is required"
            },
            notEmpty: {
                msg: "Enter a field"
            }
        }
        },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Gender is required"
            },
            notEmpty: {
                msg: "Enter a field"
            }
        }   
        },
    email: {
            type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Email is required"
            },
            notEmpty: {
                msg: "Enter a field"
            }
        }
        },
    phone: {
            type: DataTypes.STRING,
        allowNull: false,
            validate: {
            notNull: {
                msg: "Phone number is required"
            },
            notEmpty: {
                msg: "Enter a field"
            }
        }
        },
    password: {
            type: DataTypes.BOOLEAN,
        allowNull: false,
        validate: {
            notNull: {
                msg: "Password is required"
            },
            notEmpty: {
                msg: "Enter a field"
            }
        }
        }
    }, {
    sequelize: db,
    tableName: 'users'
    
});

// UserInstance.hasMany(ProductInstance,
//     {
//         foreignKey: "userId",
//         as: "products"
//     });
// ProductInstance.belongsTo(UserInstance, {
//     foreignKey: 'userId',
//     as: 'user'
// })