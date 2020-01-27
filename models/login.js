module.exports = function (sequelize, DataTypes) {
    var Login = sequelize.define("Login", {
        username: {
            type: DataTypes.STRING,
            unique: true,
            validate: {
                isEmail: true,
                msg: "Must enter a valid email"
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: 4,
                    msg: "Password but be longer than 4 characters"
                }
            }
        }

    });

    return Login;

}