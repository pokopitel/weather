import { FC } from "react";

import { Stack, Text, useTheme, VStack } from "@chakra-ui/react";

type MainCardProps = {
  image: string;
  title: string;
  hasBorder?: boolean;
  backgroundSize: string;
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
      h={350}
      p="15px 20px"
      border={hasBorder ? `1px solid ${borderColor}` : "none"}
      background={`url(${image})`}
      backgroundSize={backgroundSize}
      backgroundPosition="top"
      justifyContent="space-between"
      alignItems="start"
    >
      <Text size="mdSb">
        {title}
      </Text>

      <VStack spacing={1}>{children}</VStack>
    </Stack>
  );
};
