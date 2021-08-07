//Fetch gas prices and updates badge
function fetchPrices() {
    fetch('https://gasstation-mainnet.matic.network')
        .then(response => response.json())
        .then(data => chrome.browserAction.setBadgeText({
            text: data["standard"].toFixed(1).toString()
        }))
}

//Creates alarm that fires every minute
chrome.alarms.create("refresh", {
    "periodInMinutes": 1
});

//Fetches gas prices on alarm trigger
chrome.alarms.onAlarm.addListener(alarm => {
    fetchPrices();
});

//Calls on browser launch
fetchPrices()