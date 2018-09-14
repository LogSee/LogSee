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
			allowNull: false,
			references: {
				model: 'Users',
				key: 'ID'
			}
		},
		IP: {
			type: DataTypes.STRING(50),
			allowNull: true
		},
		InitialAuth: {
			type: DataTypes.ENUM('Awaiting Approval','Approved','Denied'),
			allowNull: false,
			defaultValue: 'Awaiting Approval'
		},
		Live: {
			type: DataTypes.ENUM('Y','N'),
			allowNull: false,
			defaultValue: 'N'
		},
		UniqueKey: {
			type: DataTypes.STRING(255),
			allowNull: false,
			unique: true
		}
	}, {
		tableName: 'Clients'
	});
};
