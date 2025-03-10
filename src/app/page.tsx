"use client";
import { ContentComponent } from "@/components/main/content";
import { FooterComponent } from "@/components/main/footer";
import { HeaderComponent } from "@/components/main/header";
import { CurrentMenuNewsContextProvider } from "@/context/current-menu-news";
import { Layout } from "antd";

export default function Home() {
  return (
    <Layout style={{
      minHeight: '100vh'
    }}>
      <CurrentMenuNewsContextProvider>
        <HeaderComponent />
        <ContentComponent />
      </CurrentMenuNewsContextProvider>
      <FooterComponent />
    </Layout>
  );
}
