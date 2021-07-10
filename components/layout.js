import { Flex, Box } from "@chakra-ui/react";
import SideNav from "./sideNav";
import Header from "./header";

const Layout = ({ children }) => (
  <Box>
    <Header />
    <Flex>
      <SideNav />
      {/* <Header /> */}
      {children}
    </Flex>
  </Box>
);

export default Layout;
