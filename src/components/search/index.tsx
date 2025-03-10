"use client";
import '@ant-design/v5-patch-for-react-19';
import { Button, Flex, Input } from "antd"
import { useState } from "react";
import { isValidSearch } from "./helper";
import { fetchNews } from '@/helpers/api';
import { notify } from '../../helpers/Notification';
import { NewsItem } from '@/pages/api/fetch-news';
import { useCurrentMenuNewsContext } from '@/context/current-menu-news';

export const SearchComponent = () => {
    const { handleAddMenuItems } = useCurrentMenuNewsContext()
    const [search, setSearch] = useState<string>("");
    const [recomendations, setRecomendations] = useState<string[]>([
        'Música',
        'Vídeo Games',
        'Empreendedorismo',
        'Café',
    ])

    const handleContent = (title: string, content: NewsItem[]) => {
        handleAddMenuItems({
            content,
            label: title
        })
    }

    const fetchSearch = async (search: string) => {
        await fetchNews(search)
            .then(res => {
                notify({ message: 'Sucesso!', duration: 4.5, placement: 'topRight', type: 'success' });
                handleContent(search, res.content)
            })
            .catch(err => {
                notify({ message: 'Houve um problema...', description: err.message, duration: 4.5, placement: 'topRight', type: 'error' });
            })
    }

    const handleSearchChange = (text: string) => {
        isValidSearch(text) && fetchSearch(text)
    };

    return (
        <Flex style={{
            flexDirection: 'column',
            gap: '5px',
            padding: '10px'
        }}>
            <Input placeholder="Procure aqui um assunto do seu interesse" onChange={(e) => setSearch(e.target.value)}></Input>
            <Flex style={{
                gap: '5px',
                justifyContent: 'center'
            }}>
                {
                    !!recomendations && recomendations.map((item, i) => (
                        <Button key={i} onClick={() => handleSearchChange(item)}>{item}</Button>
                    ))
                }
            </Flex>
            <Button type="primary" onClick={() => handleSearchChange(search)}>Achar notícias!</Button>
        </Flex>
    )
}