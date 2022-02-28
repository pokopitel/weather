import { Box } from "@chakra-ui/react";

import { Select } from "../components/Select";

const options = ["New York City, NY", "Praga", "Gamburg", "Florida"];

export const Header = () => (
  <Box w="100%">
    <Select options={options} />
  </Box>
);
