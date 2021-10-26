import { registerSchema } from 'validators';

type SignUpParams = {
  name: string;
  email: string;
  password: string;
};

const resolvers = {
  Query: {
    me() {
      return { _id: 1, name: 'hmm', email: 'fff', password: 'fdsfsd' };
    },
  },

  Mutation: {
    async signup(_: void, { name, email, password }: SignUpParams) {
      try {
        await registerSchema.validate(
          { name, email, password },
          { abortEarly: false }
        );
        return { _id: 1, name, email, password };
      } catch (error) {
        console.log(error);
      }
    },
  },
};

export default resolvers;
