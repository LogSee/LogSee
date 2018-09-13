/* jshint indent: 1 */

module.exports = function(sequelize, DataTypes) {
	return sequelize.define('Clients', {
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
		IP: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		InitalAuth: {
			type: DataTypes.ENUM('Failed','Awaiting Approval','Approved','Denied'),
			allowNull: true,
			defaultValue: 'Failed'
		},
		Live: {
			type: DataTypes.ENUM('Y','N'),
			allowNull: true
		}
	}, {
		tableName: 'Clients'
	});
};
