/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('LogSeries', {
		ID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true
		},
		RetentionTime: {
			type: DataTypes.INTEGER(11),
			allowNull: false
		},
		LogFileID: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'LogFiles',
				key: 'ID'
			}
		},
		Data: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		DateAdded: {
			type: DataTypes.DATE,
			allowNull: true,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		}
	}, {
		tableName: 'LogSeries'
	});
};
