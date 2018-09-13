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
			allowNull: true,
			references: {
				model: 'Clients',
				key: 'ID'
			}
		},
		Filename: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		Filepath: {
			type: DataTypes.STRING(255),
			allowNull: true
		},
		Retention: {
			type: DataTypes.INTEGER(11),
			allowNull: true
		},
		DateAdded: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'LogFiles'
	});
};
