import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),

    // ...add more providers here
  ],
  pages: {
    signIn: "/signin",
    signOut: "/signin",
  },
  secret: process.env.NEXT_AUTH_SECRET_KEY,
  callbacks: {
    async jwt({ token, user, trigger, session }) {


      if (trigger === "update") {
        return { ...token, ...session.user };
      }

      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token


      if (!session.user.botmode) {
        session.user.botmode = true;
      }

      return session;
    },

  },
}

export default NextAuth(authOptions);
