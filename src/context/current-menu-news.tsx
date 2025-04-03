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

export const CurrentMenuNewsContext = createContext<Props & {
    selectedId: number
  } | undefined>(undefined);

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

    const [selectedId, setSelectedId] = useState<number>(1);

    const [content, setContent] = useState<NewsItem[]|null>(null)

    const handleAddMenuItems = (data: Omit<NewsMenuItemType, 'id'>) => {
        const greaterId = Math.max(...menuItems.map(item => item.id));
        setMenuItems(prevState => [...prevState, {
            ...data,
            id: greaterId + 1
        }])
    }

    const handleSelectItemId = (id: number) => {
        setSelectedId(id);
        if (id === 1) {
          setContent(null);
        } else {
          const selected = menuItems.find(item => item.id === id);
          if (selected) setContent(selected.content);
        }
      };

      const getMenuItems = () => {
        return menuItems.map(item => ({
          key: item.id.toString(),
          label: item.label
        }));
      }

    return (
        <CurrentMenuNewsContext.Provider value={{
            content,
            handleAddMenuItems,
            getMenuItems,
            handleSelectItemId,
            selectedId
        }}>
            {children}
        </CurrentMenuNewsContext.Provider>
    )
}