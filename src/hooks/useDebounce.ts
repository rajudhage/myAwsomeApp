import {useState, useEffect} from 'react';

interface debounceProps{
    value: string,
    delay: number
}
export const useDebounce = (value:string, delay: number ): string => {
    const[debouncedSearch, setDebounceSearch] = useState(value);

    useEffect(()=>{
        let timer = setTimeout(()=> setDebounceSearch(value), delay);

        return ()=> clearTimeout(timer);
    }, [value, delay])
    return debouncedSearch;
}