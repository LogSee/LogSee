/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('LogSeries', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		LogFileID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'LogFiles',
				key: 'ID'
			}
		},
		Data: {
			type: DataTypes.TEXT,
			allowNull: false
		},
		DateAdded: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'LogSeries'
	});
};
