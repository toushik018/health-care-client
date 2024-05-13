import { useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './store'
import { useEffect, useState } from 'react'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()


type TDebouncedProps = {
    searchQuery: string;
    deley: number;
}

export const useDebounced = ({ searchQuery, deley }: TDebouncedProps) => {
    const [debouncedValue, setDebouncedValue] = useState<string>(searchQuery);


    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(searchQuery);
        }, deley)

        return () => {
            clearTimeout(handler)
        }
    }, [searchQuery, deley])

    return debouncedValue;
}