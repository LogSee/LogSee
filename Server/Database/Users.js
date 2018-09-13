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
			allowNull: true,
			defaultValue: 'Y'
		},
		Authority: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			defaultValue: '1'
		},
		Username: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		Hash: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		Salt: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		DateCreated: {
			type: DataTypes.DATE,
			allowNull: true,
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
