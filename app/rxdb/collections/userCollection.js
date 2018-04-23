
const userSchema = {
  title: 'user schema',
  description: 'describes a simple user',
  version: 0,
  type: 'object',
  properties: {
    name: {
      type: 'string',
      primary: true,
    },
    email: {
      type: 'string',
    },
    password: {
      type: 'string',
      encrypted: true,
    },
  },
  required: ['email', 'password'],
};

export default {
  name: 'users',
  schema: userSchema,
};
