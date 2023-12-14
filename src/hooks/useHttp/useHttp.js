const _api = 'http://localhost:3000'

const useHttp = () => {
    const request =  async () => {
        const response = await fetch(_api + '/productList');
        const result = await response.json();

        return result;
    }

    return { request };
}

export default useHttp;