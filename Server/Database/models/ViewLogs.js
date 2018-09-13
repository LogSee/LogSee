/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('ViewLogs', {
		LSID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		LSData: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		LSDateAdded: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '0000-00-00 00:00:00'
		},
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		Filename: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		Filepath: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		RetentionDays: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		DateAdded: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: '0000-00-00 00:00:00'
		},
		ClientID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		UserID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		Username: {
			type: DataTypes.STRING(255),
			allowNull: false
		},
		Forename: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		Surname: {
			type: DataTypes.STRING(255),
			allowNull: true
		}
	}, {
		tableName: 'ViewLogs'
	});
};
