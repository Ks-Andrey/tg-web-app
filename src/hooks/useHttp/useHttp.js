const _api = 'https://680f-79-170-109-221.ngrok-free.app'

const useHttp = () => {
    const request =  async (dayIndex) => {
        const response = await fetch(_api + '/api/tovars/' + dayIndex);
        const result = await response.json();

        return result?.data?.tovars;
    }

    return { request };
}

export default useHttp;