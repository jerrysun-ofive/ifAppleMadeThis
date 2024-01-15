function calculate(){

    const totalAmount = document.getElementById("totalAmount");
    const principalInput = document.getElementById("principal");
    const rateInput = document.getElementById("interest");
    const yearsInput = document.getElementById("years");

    let principalNum = Number(principalInput.value);
    let rateNum = Number(rateInput.value / 100);
    let yearsNum = Number(yearsInput.value);
    
    const result = principalNum * Math.pow((1 + rateNum / 1), 1 * yearsNum)
    
    console.log(result);
    totalAmount.textContent = result.toLocaleString(undefined, {style: "currency", currency: "NZD"});
}
