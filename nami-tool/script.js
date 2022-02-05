const buildAndSendTX = async () => {
    try {
        await window.NamiAPI.enable();
    
        let addressesAndAmounts = document.getElementById("input").value.split(",");
        let recipients = [];
    
        for (let addressAndAmount of addressesAndAmounts) {
            let parsedData = addressAndAmount.split(":");
            let inputAddress = parsedData[0];
            let inputAmount = +parsedData[1];
    
            recipients.push({
                address: inputAddress,
                amount: inputAmount
            });
        }
    
        let txHash = await window.NamiAPI.sendMultiple({
            recipients: recipients
        });
    
        prompt("TX submitted. Here is your TX hash:", txHash);
    } catch (err) {
        console.error(err);
        alert("An error occured. Check console for more details.");
    }
}

document.getElementById("send").addEventListener("click", buildAndSendTX);