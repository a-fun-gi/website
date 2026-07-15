const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));
var thing = "";
async function update_time() {
    while (1==1) {
        const now = new Date().toLocaleTimeString();
        const hour = new Date().getHours();
        if (0<hour<6 || 20<hour<23) {
            thing = "not sleeping";
        }
        else if (not(0<hour<6 || 20<hour<23)) {
            thing = "sleeping"
        }
        document.getElementById("timestamp").textContent = "at " + now + " I am most likely " + thing;
        await sleep(1000);
    }
}

async function wave() {
    while (1==1) {
        document.getElementById("greeting").textContent = "Greetings fellow humans! \\(°▽°)/";
        await sleep(500);
        document.getElementById("greeting").textContent = "Greetings fellow humans! ⊙(°-°)⊙";
        await sleep(500);
    }
}
update_time()
wave()