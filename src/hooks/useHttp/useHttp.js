const _api = 'http://localhost:8080'

const useHttp = () => {
    const request =  async (dayIndex) => {
        const response = await fetch(_api + '/api/tovars/' + dayIndex);
        const result = await response.json();

        return result?.data?.tovars;
    }

    return { request };
}

export default useHttp;