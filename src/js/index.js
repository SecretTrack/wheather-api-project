const apiKey = "d109e58ce40e4cb5aa3233003240611";
const btnBrowser = document.querySelector(".btn-browser");

btnBrowser.addEventListener("click", async () => {
    const city = document.getElementById("input-browser").value.trim();

    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    const apiUrl = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no&lang=pt`;

    try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
            alert("City not found. Please enter a valid city name.");
            return;
        }

        const data = await response.json();

        const temperature = Math.round(data.current.temp_c);
        const humidity = data.current.humidity;
        const condition = data.current.condition.text;
        const wind = data.current.wind_kph;
        const iconCondition = data.current.condition.icon;
        const uv = data.current.uv;

        document.getElementById("city").textContent = city;
        document.getElementById("temperature").textContent = `${temperature} °C`;
        document.getElementById("humidity").textContent = `${humidity} %`;
        document.getElementById("condition").textContent = condition;
        document.getElementById("wind").textContent = `${wind} km/h`;
        document.getElementById("icon-condition").setAttribute("src", iconCondition);
        document.getElementById("uv").textContent = `${uv}`;

        document.getElementById("input-browser").value = "";

    } catch (error) {
        alert("An error occurred while fetching weather data. Please try again later.");
        console.error("Fetch error:", error);
    }
});
