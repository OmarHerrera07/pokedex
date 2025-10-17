import { useState } from 'react';
import type { ResponsePokemons } from '../interfaces/interfaces';
import api from "../shared/utils/api";
import { useQuery } from "@tanstack/react-query";
import { useDebounce } from 'use-debounce';


export interface useBuscarPokemones {
    initialPage?: number;
    initialPageSize?: number;
    initialSearch?: string;
}

export const useBuscarPokemones = (hookParams: useBuscarPokemones) => {

    const [page, setPage] = useState(hookParams.initialPage ?? 1);
    const [pageSize, setPageSize] = useState(hookParams.initialPageSize ?? 20);
    const [search, setSearch] = useState(hookParams.initialSearch??'');
    const [debouncedSearch] = useDebounce(search, 500); 
    

    let where = undefined;

    if (search) {
        const id = Number(search)
        if (!isNaN(id) && String(id) === String(search)) {
            where = { id }
        } else {
            where = {
                nombre: { contains: search.toString() }
            }
        }
    }

    const params = {
        skip: (page - 1) * pageSize,
        take: pageSize,
        ...(where ? {
            where: JSON.stringify(where)
        } : {})
    }


    const { data, isFetching, refetch } = useQuery<ResponsePokemons>({
        queryKey: ['buscarPokemones', page, pageSize, debouncedSearch],
        queryFn: async () => {
            const { data } = await api<ResponsePokemons>('/pokemon', {
                params,
            });
            return data;
        },

    })

    const nexPage = () => {
        if (!data?.hasNextPage) return;
        setPage(prev => prev + 1)
        // refetch()
    }
    const prevPage = () => {
        if (!data?.hasPreviousPage) return;
        setPage(prev => prev - 1)
    }

    const searchPokemons = (searchText: string) => {
        setSearch(searchText);
        setPage(1);
    }

    return {
        data,
        isLoading: isFetching,
        refetch,
        nexPage,
        prevPage,
        searchPokemons,
        search
    }
}
