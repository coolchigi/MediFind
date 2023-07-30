import {
    Authenticator,
    Flex,
    Grid,
    Image,
    useTheme,
    View
} from "@aws-amplify/ui-react";

import image from "../images/app_name.png"

import { Header } from "./Header";
import { Footer } from "./Footer";
import { SignInHeader } from "./SignInHeader";
import { SignInFooter } from "./SignInFooter";

const components = {
    Header,
    SignIn: {
        Header: SignInHeader,
        Footer: SignInFooter
    },
    Footer
};

export function Login() {
    const { tokens } = useTheme();

    return (
        <Grid templateColumns={{ base: "1fr 0", medium: "1fr 1fr" }}>
            <Flex
                backgroundColor={tokens.colors.background.secondary}
                justifyContent="center"
            >
                <Authenticator components={components}>
                    {({ signOut, user }) => (
                        <main>
                            <h1>Hello {user.username}</h1>
                            <button
                                onClick={signOut}>Sign out</button>
                        </main>
                    )}
                </Authenticator>
            </Flex>
            <View height="100vh">
                <Image
                    alt="MediFind logo"
                    src={image}
                    width="100%"
                    height="100%"
                    objectFit="initial"
                />
            </View>
        </Grid>
    );
}

