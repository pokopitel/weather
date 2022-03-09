import { FC } from "react";

import { Stack, Text, useTheme, VStack } from "@chakra-ui/react";

type MainCardProps = {
  image: string | string[];
  title: string;
  hasBorder?: boolean;
  backgroundSize: string | string[];
};
export const MainCard: FC<MainCardProps> = ({
  image,
  title,
  children,
  hasBorder,
  backgroundSize,
}) => {
  const theme = useTheme();

  const borderColor = theme.colors.purple[200];

  return (
    <Stack
      borderRadius={15}
      h={[250, 250, 250, 300, 350]}
      p="15px 20px"
      border={hasBorder ? `1px solid ${borderColor}` : "none"}
      background={
        Array.isArray(image)
          ? image.map((item) => `url(${item})`)
          : `url(${image})`
      }
      backgroundSize={backgroundSize}
      backgroundPosition={["top", "top", "top", "top"]}
      justifyContent="space-between"
      alignItems="start"
      backgroundRepeat={["no-repeat", "no-repeat", "no-repeat", "no-repeat"]}
    >
      <Text size="mdSb">{title}</Text>

      <VStack spacing={1}>{children}</VStack>
    </Stack>
  );
};
