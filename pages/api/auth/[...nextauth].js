import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import axios from 'axios';

const options = {
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        try {
          const response = await axios.post('https://www.example.com/api/signin', credentials);
          const user = response.data;

          if (response.status === 200 && user) {
            return Promise.resolve(user);
          } else {
            return Promise.resolve(null);
          }
        } catch (error) {
          console.error('Authentication error:', error);
          return Promise.resolve(null);
        }
      },
    }),
  ],
  callbacks: {
    async session(session, user) {
      session.user = user;
      return Promise.resolve(session);
    },
  },
};

export default (req, res) => NextAuth(req, res, options);
