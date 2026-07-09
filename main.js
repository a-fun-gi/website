const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

async function update_time() {
    while (1==1) {
        const now = new Date().toLocaleTimeString()
        document.getElementById("timestamp").textContent = now;
        await sleep(1000);
    }
}

update_time()