const API_KEY = "61fd0c1d7f400076103135238c97a3bb";

const BASE_URL = "https://api.openweathermap.org/data/2.5";

export async function getWeather(city: string) {
    try {
        const response = await fetch(
            `${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric&lang=pt`
        );

        if (!response.ok) {
            throw new Error("Cidade não encontrada.");
        }

        const data = await response.json();

        return {
            city: data.name,
            country: data.sys.country,
            temperature: data.main.temp,
            feelsLike: data.main.feels_like,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            description: data.weather[0].description,
            icon: data.weather[0].icon,
            windSpeed: data.wind.speed,
        };
    } catch (error) {
        console.error("Erro ao buscar clima:", error);
        throw error;
    }
}