var obj;
//Force refreshes gas prices and displays details
fetch('https://gasstation-mainnet.matic.network')
    .then(response => response.json())
    .then(data => obj = data)
    .then(() => chrome.browserAction.setBadgeText({
        text: obj["standard"].toFixed(1).toString()
    }))
    .then(() => document.getElementById("low").textContent = obj["safeLow"].toFixed().toString())
    .then(() => document.getElementById("standard").textContent = obj["standard"].toFixed().toString())
    .then(() => document.getElementById("fast").textContent = obj["fast"].toFixed().toString())
    .then(() => document.getElementById("fastest").textContent = obj["fastest"].toFixed().toString())