import { SearchComponent } from "@/components/search"
import { useCurrentMenuNewsContext } from "@/context/current-menu-news"
import { Card } from "antd"
import { Content } from "antd/lib/layout/layout"

export const ContentComponent = () => {
    const { content } = useCurrentMenuNewsContext()

    if (content) {
        return (
            <Content
                style={{
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '20px',
                    gap: '20px',
                }}
            >
                {!!content.length && content.map((item, i) => (
                    <Card key={i} title={item.title}>
                        <p>{item.content}</p>
                        <small>
                            <a target="_blank" href={item.sourceLink}>
                            {item.sourceLink}
                            </a>
                        </small>
                    </Card>
                ))}
            </Content>
        )
    }

    return (
        <Content style={{
            display: 'flex',
            justifyContent: 'center',
        }}>
            <SearchComponent />
        </Content>
    )
}