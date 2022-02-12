function getInputValue(inputId) {


    const InputField = document.getElementById(inputId);

    const InputAmountText = InputField.value;
    const amountValue = parseFloat(InputAmountText);

    //   clear input field

    InputField.value = '';


    return amountValue;
}

function getCurrrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;


}

function updateTotalField(totalFieldId, amount) {

    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + amount;
}

function updateBalance(depositAmount, isAdd) {

    const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);



    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + depositAmount;

    }
    else {
        balanceTotal.innerText = previousBalanceTotal - depositAmount;

    }


}





document.getElementById('deposit-button').addEventListener('click', function () {




    // get current deposit

    // const depositTotal = document.getElementById('deposit-total');

    // const depositTotalText = depositTotal.innerText;
    // const previousDepositTotal = parseFloat(depositTotalText);



    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);

    }


    // depositTotal.innerText = depositAmount + previousDepositTotal;




    // update balance for deposit

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);

    // balanceTotal.innerText = previousBalanceTotal + depositAmount;









})

//  handle withdraw button

document.getElementById('withdraw-button').addEventListener('click', function () {

    // const withdrawInput = document.getElementById('withdraw-input');

    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);

    const withdrawAmount = getInputValue('withdraw-input');
    const currrentBalance = getCurrrentBalance();
    if (withdrawAmount > 0 && currrentBalance > withdrawAmount) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);

    }
    if (withdrawAmount > currrentBalance) {

        console.log('You cant withdraw amount more than your current balance');
    }



    // update withdraw total
    // const withdrawTotal = document.getElementById('withdraw-total');

    // const previousWithdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);


    //  withdrawTotal.innerText = withdrawAmount + previousWithdrawTotal;








    //  update balance total withdraw

    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;


    // const previousBalanceTotal = parseFloat(balanceTotalText);

    // balanceTotal.innerText = previousBalanceTotal - withdrawAmount;





})


