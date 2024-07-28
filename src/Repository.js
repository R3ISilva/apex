const apiKey = '09TGTA88H2SEGDJ4';
const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=SPY&apikey=${apiKey}`;

export async function getSP500Data() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        // Process the data as needed
    } catch (error) {
        console.error('Error fetching S&P 500 data:', error);
    }
}
