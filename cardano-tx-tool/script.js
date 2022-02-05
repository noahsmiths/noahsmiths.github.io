const buildAndSendTX = async () => {
    try {
        //await window.NamiAPI.enable();
        let chosenWallet = prompt("Enter the name of your wallet as it shows up on the window.cardano object.\nEx. nami for window.cardano.nami or ccvault for window.cardano.ccvault\nDefault is nami.", "nami");
        await window.initializeAPI(window.cardano[chosenWallet]);
    
        let addressesAndAmounts = document.getElementById("input").value.split(/\r?\n/);
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
    
        let txHash = await window.cardanoAPI.sendMultiple({
            recipients: recipients
        });
    
        prompt("TX submitted. Here is your TX hash:", txHash);
    } catch (err) {
        console.error(err);
        alert("An error occured. Check console for more details.");
    }
}

document.getElementById("send").addEventListener("click", buildAndSendTX);