/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Alerts', {
		AlertID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			primaryKey: true,
			autoIncrement: true
		},
		ClientID: {
			type: DataTypes.INTEGER(11),
			allowNull: false,
			references: {
				model: 'Users',
				key: 'ID'
			}
		},
		TimeStamp: {
			type: DataTypes.DATE,
			allowNull: false,
			defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
		},
		Severity: {
			type: DataTypes.STRING(20),
			allowNull: false
		},
		LogMessage: {
			type: DataTypes.INTEGER(11),
			allowNull: true,
			references: {
				model: 'LogSeries',
				key: 'LogFileID'
			}
		},
		NotificationIssued: {
			type: DataTypes.ENUM('Y','N'),
			allowNull: false
		},
		NotificationMethod: {
			type: DataTypes.STRING(50),
			allowNull: false
		}
	}, {
		tableName: 'Alerts'
	});
};
