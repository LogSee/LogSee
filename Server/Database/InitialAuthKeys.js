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
			allowNull: true,
			references: {
				model: 'Users',
				key: 'ID'
			}
		},
		Active: {
			type: DataTypes.ENUM('Y','N'),
			allowNull: true
		},
		OneTimeUse: {
			type: DataTypes.ENUM('Y','N'),
			allowNull: true
		},
		Key: {
			type: DataTypes.STRING(255),
			allowNull: true,
			unique: true
		},
		DateCreated: {
			type: DataTypes.DATE,
			allowNull: true,
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
