import { SearchComponent } from "@/components/search";
import { useCurrentMenuNewsContext } from "@/context/current-menu-news";
import { Card } from "antd";
import { Content } from "antd/lib/layout/layout";
import Image from "next/image";

export const ContentComponent = () => {
  const { content } = useCurrentMenuNewsContext();

  if (content) {
    return (
      <Content
        style={{
          minHeight: "100vh",
          padding: "20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr))",
            gap: "20px",
          }}
        >
          {!!content.length &&
            content.map((item, i) => (
              <Card
                key={i}
                style={{ position: "relative" }}
                title={<div style={{ paddingLeft: "20px" }}>{item.title}</div>}
              >
                {(item.sourceLink.includes("cnn") ||
                  item.sourceLink.includes("globo")) && (
                  <Image
                    src={
                      item.sourceLink.includes("cnn")
                        ? "/cnn.png"
                        : "/globo.png"
                    }
                    alt="Logo"
                    width={30}
                    height={30}
                    style={{
                      position: "absolute",
                      top: 10,
                      left: 10,
                      borderRadius: "4px",
                      zIndex: 1,
                      cursor: "pointer",
                    }}
                    onClick={() => {
                      window.open(item.sourceLink, "_blank");
                    }}
                  />
                )}

                <p>{item.content}</p>
                <small
                  style={{
                    wordBreak: "break-word",
                    display: "block",
                    overflowWrap: "break-word",
                  }}
                >
                  <a
                    target="_blank"
                    href={item.sourceLink}
                    style={{
                      wordBreak: "break-word",
                      overflowWrap: "break-word",
                      display: "inline-block",
                      maxWidth: "100%",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                      whiteSpace: "normal",
                    }}
                  >
                    {item.sourceLink}
                  </a>
                </small>
              </Card>
            ))}
        </div>
      </Content>
    );
  }

  return (
    <Content
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <SearchComponent />
      </div>
    </Content>
  );
};
