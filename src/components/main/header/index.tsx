"use client";
import { useCurrentMenuNewsContext } from "@/context/current-menu-news";
import { Menu } from "antd";
import Header from "antd/lib/layout/layout";

export const HeaderComponent = () => {
  const { getMenuItems, selectedId, handleSelectItemId } = useCurrentMenuNewsContext();

  return (
    <Header>
      <Menu
        mode="horizontal"
        selectedKeys={[selectedId.toString()]}
        items={getMenuItems()}
        onClick={(e) => handleSelectItemId(Number(e.key))}
      />
    </Header>
  );
};
