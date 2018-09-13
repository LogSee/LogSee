/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('InitialAuthKeys', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		UserID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Users',
				key: 'ID'
			}
		},
		Active: {
			type: DataTypes.ENUM('Y','N'),
			allowNull: false
		},
		OneTimeUse: {
			type: DataTypes.ENUM('Y','N'),
			allowNull: false
		},
		Key: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true
		},
		DateCreated: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		DateExpires: {
			type: DataTypes.DATE,
			allowNull: true
		}
	}, {
		tableName: 'InitialAuthKeys'
	});
};
