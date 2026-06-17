import { betterAuth } from "better-auth"
import { genericOAuth } from "better-auth/plugins"

export const auth = betterAuth({
    plugins: [
        genericOAuth({
            config: [
                {
                    providerId: "hackclub",
                    discoveryUrl: "https://auth.hackclub.com/.well-known/openid-configuration",
                    clientId: process.env.HACKCLUB_CLIENT_ID as string,
                    clientSecret: process.env.HACKCLUB_CLIENT_SECRET,
                    scopes: ["openid", "profile", "email", "verification_status"],
                },
            ],
        }),
    ],
})
