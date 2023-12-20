import { useCallback } from "react";

const _api = window.location.protocol + "//" + window.location.hostname + ":8080";
//const _api = 'http://45.141.103.148:8080'

const useHttp = () => {
    const request =  useCallback(async (link) => {
        const response = await fetch(_api + link);
        const result = await response.json();

        return result;
    }, []);

    return { request };
}

export default useHttp;