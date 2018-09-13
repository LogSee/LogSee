/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Users', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		Live: {
			type: DataTypes.ENUM('Y','N'),
			allowNull: false,
			defaultValue: 'Y'
		},
		Authority: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '1'
		},
		Username: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		Hash: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		Salt: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		DateCreated: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		Forename: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		Surname: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		Email: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		LastLogin: {
			type: DataTypes.DATE,
			allowNull: true
		},
		LastIP: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'Users'
	});
};
