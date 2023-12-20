import { useCallback } from "react";

const _api = '//45.141.103.148:8080'

const useHttp = () => {
    const request =  useCallback(async (dayIndex) => {
        const response = await fetch(_api + '/api/tovars/' + dayIndex);
        const result = await response.json();

        return result;
    }, []);

    return { request };
}

export default useHttp;