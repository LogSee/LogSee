/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('LogFiles', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ClientID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Clients',
				key: 'ID'
			}
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
		Size: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			defaultValue: '0'
		},
		DateAdded: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'LogFiles'
	});
};
