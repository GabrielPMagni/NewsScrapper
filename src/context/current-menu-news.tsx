import { NewsItem } from "@/pages/api/fetch-news";
import { MenuItemType } from "antd/es/menu/interface";
import { createContext, ReactNode, useContext, useState } from "react";

type NewsMenuItemType = {
    id: number
    label: string
    content: NewsItem[]
}

type Props = {
    content: NewsItem[] | null
    handleAddMenuItems: (data: Omit<NewsMenuItemType, 'id'>) => void,
    getMenuItems: () => MenuItemType[]
    handleSelectItemId: (id: number) => void
}

export const CurrentMenuNewsContext = createContext<Props | undefined>(undefined);

export const useCurrentMenuNewsContext = () => {
    const ctx = useContext(CurrentMenuNewsContext);
    if (!ctx) throw new Error('useCurrentMenuNewsContext deve estar dentro do seu provider')
    return ctx;
}

export const CurrentMenuNewsContextProvider = ({ children }: { children: ReactNode }) => {
    const [menuItems, setMenuItems] = useState<NewsMenuItemType[]>([{
        id: 1,
        label: "Buscar novas notícias",
        content: []
    }]);

    const [content, setContent] = useState<NewsItem[]|null>(null)

    const handleAddMenuItems = (data: Omit<NewsMenuItemType, 'id'>) => {
        const greaterId = Math.max(...menuItems.map(item => item.id));
        setMenuItems(prevState => [...prevState, {
            ...data,
            id: greaterId + 1
        }])
    }

    const handleSelectItemId = (id: number) => {
        (id === 1) ? setContent(null) : setContent(menuItems.filter(item => {
            return item.id === id
        })[0].content);
    }

    const getMenuItems = () => {
        return menuItems.map(item => {
            return {
                key: item.id,
                label: <p onClick={() => {handleSelectItemId(item.id)}}>
                    {item.label}
                </p>
            }
        })
    }

    return (
        <CurrentMenuNewsContext.Provider value={{
            content,
            handleAddMenuItems,
            getMenuItems,
            handleSelectItemId,
        }}>
            {children}
        </CurrentMenuNewsContext.Provider>
    )
}