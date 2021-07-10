import { Flex } from "@chakra-ui/react";
import SideNav from "./sideNav";
import Header from "./header";

const Layout = ({ children }) => (
  <Flex>
    <SideNav />
    {/* <Header /> */}
    {children}
  </Flex>
);

export default Layout;
