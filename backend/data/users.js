import bcrypt from 'bcryptjs';

const users = [
	{
		name: 'Admin User',
		email: 'admin@example.com',
		password: bcrypt.hashSync('123456', 10),
		isAdmin: true,
	},

	{
		name: 'John Do',
		email: 'johnd@example.com',
		password: bcrypt.hashSync('123456', 10),
	},

	{
		name: 'Jane Doe',
		email: 'janed@example.com',
		password: bcrypt.hashSync('123456', 10),
	},
];

export default users;
