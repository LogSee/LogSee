/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Alerts', {
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
		Severity: {
			type: DataTypes.ENUM('WARNING','ANOMOLY','CRITICAL'),
			allowNull: true
		},
		Message: {
			type: DataTypes.TEXT,
			allowNull: true
		},
		Traceback: {
			type: DataTypes.TEXT,
			allowNull: true
		}
	}, {
		tableName: 'Alerts'
	});
};
