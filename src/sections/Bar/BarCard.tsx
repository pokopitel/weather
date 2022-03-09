import { FC } from "react";

import { Box, Stack, Text } from "@chakra-ui/react";

import Scrollbars from "react-custom-scrollbars";

type BarCardProps = {
  title: string;
  childContainerHeight?: string | number;
  hasScroll?: boolean;
};

export const BarCard: FC<BarCardProps> = ({
  children,
  title,
  childContainerHeight,
  hasScroll,
}) => (
  <Box>
    <Text size="mdSb" mb={4}>
      {title}
    </Text>
    {hasScroll ? (
      <Scrollbars
        autoHeightMax={childContainerHeight}
        autoHeight
      >
        <Stack spacing={6} pr={3}>
          {children}
        </Stack>
      </Scrollbars>
    ) : (
      <Stack spacing={6}>{children}</Stack>
    )}
  </Box>
);
