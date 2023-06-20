import { Box } from "@mui/material";
import React, { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { NextSeo, NextSeoProps } from "next-seo";

interface LayoutProps extends Omit<NextSeoProps, "children"> {
  children: ReactNode;
}

const Layout = (props: LayoutProps) => {
  const { children, ...seo } = props;
  return (
    <>
      <NextSeo {...seo} />
      <Box component="main">
        <Navbar />
        {children}
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
