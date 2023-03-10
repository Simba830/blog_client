// node_modules
import React from "react";
import { Flex } from "@chakra-ui/react";
import { useLocation } from "react-router-dom";

// components
import HeaderComponent from "../Header";

// consts
import { PATH } from "../../consts";

const LayoutComponent: React.FC = (props) => {
    const location = useLocation();

    return (
        <>
            <HeaderComponent></HeaderComponent>
            <Flex
                justify="center"
                align={
                    location.pathname === PATH.HOME ||
                    location.pathname === PATH.SIGNIN ||
                    location.pathname === PATH.SIGNUP ||
                    location.pathname === PATH.PROFILE
                        ? "center"
                        : "flex-start"
                }
                w="100%"
                h={
                    location.pathname === PATH.HOME ||
                    location.pathname === PATH.SIGNIN
                        ? "87vh"
                        : "100%"
                }
            >
                {props.children}
            </Flex>
        </>
    );
};

export default LayoutComponent;
