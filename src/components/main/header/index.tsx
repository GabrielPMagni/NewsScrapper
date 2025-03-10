"use client";
import { useCurrentMenuNewsContext } from "@/context/current-menu-news";
import { Menu } from "antd";
import Header from "antd/lib/layout/layout";

export const HeaderComponent = () => {
    const { getMenuItems } = useCurrentMenuNewsContext()

    return (
        <Header>
            <Menu mode="horizontal" items={getMenuItems()}></Menu>
        </Header>
    )
}