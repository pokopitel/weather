import { FC } from "react";

import { Box, Stack, Text } from "@chakra-ui/react";
import Scrollbars from "react-custom-scrollbars";

type CardProps = {
  title: string;
  childContainerHeight?: string | number;
  hasScroll?: boolean;
};

export const Card: FC<CardProps> = ({
  children,
  title,
  childContainerHeight,
  hasScroll,
}) => {
  return (
    <Box>
      <Text size="mdsb" mb={4}>
        {title}
      </Text>
      {hasScroll ? (
        <Scrollbars
          autoHeightMax={childContainerHeight}
          disabled={false}
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
};
