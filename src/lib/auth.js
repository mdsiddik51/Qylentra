import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";
import { jwt } from "better-auth/plugins"

const client = new MongoClient(process.env.MDBURI);
const db = client.db('Qylentra');

export const auth = betterAuth({
    emailAndPassword: {
        enabled: true,
    },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLINT_ID,
            clientSecret: process.env.GOOGLE_CLINT_SECRET,
        }
    },
    database: mongodbAdapter(db, {
        client,
    }),
    session: {
        cookieCache: {
            enabled: true,
            strategy: "jwt",
            maxAge: 10 * 24 * 60 * 60,
        },
    },
    plugins: [
        jwt(),
    ]
});