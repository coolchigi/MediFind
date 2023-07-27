import { Image, useTheme } from "@aws-amplify/ui-react";
import {Text, Button,  Heading, View, Card } from '@aws-amplify/ui-react';


import image from "../images/app_name.png"
export function Header() {
  const { tokens } = useTheme();

  return (
    <View className='landing-page' textAlign="center">
          <Image
      alt="MediFind logo"
      src={image}
      width="100%"
      height="100%"
      objectFit="cover"
      padding={tokens.space.medium}
    />
    </View>    
  );
}
