function calculateBusinessValue() {

    // Затратный подход
    const assets = parseInt(document.getElementById('assets').value);
    const liabilities = parseInt(document.getElementById('liabilities').value);
    const expensive = assets - liabilities;

    // Доходный подход
    const operationIncome1 = parseInt(document.getElementById('operationincome1').value);
    const operationExpenses1 = parseInt(document.getElementById('operationexpenses1').value);
    const operationIncome2 = parseInt(document.getElementById('operationincome2').value);
    const operationExpenses2 = parseInt(document.getElementById('operationexpenses2').value);
    const operationIncome3 = parseInt(document.getElementById('operationincome3').value);
    const operationExpenses3 = parseInt(document.getElementById('operationexpenses3').value);

    const operationActive1 = operationIncome1 - operationExpenses1;
    const operationActive2 = operationIncome2 - operationExpenses2;
    const operationActive3 = operationIncome3 - operationExpenses3;

    const investmentIncome1 = parseInt(document.getElementById('investmentincome1').value);
    const investmentExpenses1 = parseInt(document.getElementById('investmentexpenses1').value);
    const investmentIncome2 = parseInt(document.getElementById('investmentincome2').value);
    const investmentExpenses2 = parseInt(document.getElementById('investmentexpenses2').value);
    const investmentIncome3 = parseInt(document.getElementById('investmentincome3').value);
    const investmentExpenses3 = parseInt(document.getElementById('investmentexpenses3').value);

    const investmentActive1 = investmentIncome1 - investmentExpenses1;
    const investmentActive2 = investmentIncome2 - investmentExpenses2;
    const investmentActive3 = investmentIncome3 - investmentExpenses3;

    const financeIncome1 = parseInt(document.getElementById('financeincome1').value);
    const financeExpenses1 = parseInt(document.getElementById('financeexpenses1').value);
    const financeIncome2 = parseInt(document.getElementById('financeincome2').value);
    const financeExpenses2 = parseInt(document.getElementById('financeexpenses2').value);
    const financeIncome3 = parseInt(document.getElementById('financeincome3').value);
    const financeExpenses3 = parseInt(document.getElementById('financeexpenses3').value);

    const financeActive1 = financeIncome1 - financeExpenses1;
    const financeActive2 = financeIncome2 - financeExpenses2;
    const financeActive3 = financeIncome3 - financeExpenses3;

    const netCashFlow1 = operationActive1 + investmentActive1 + financeActive1;
    const netCashFlow2 = operationActive2 + investmentActive2 + financeActive2;
    const netCashFlow3 = operationActive3 + investmentActive3 + financeActive3;
    const terminalCost = expensive + investmentExpenses1 + investmentExpenses2 + investmentExpenses3;

    // Подсчёт ставки дисконтирования
    const depositRate = parseInt(document.getElementById('depositrate').value);
    const projectTeam = parseInt(document.getElementById('projectteam').value);
    const companySize = parseInt(document.getElementById('companysize').value);
    const financialStructure = parseInt(document.getElementById('financialstructure').value);
    const productVariety = parseInt(document.getElementById('productvariety').value);
    const dependenceOnSuppliers = parseInt(document.getElementById('dependenceonsuppliers').value);
    const revenuePredictability = parseInt(document.getElementById('revenuepredictability').value);
    const discountRate = depositRate + projectTeam + companySize + financialStructure + productVariety + dependenceOnSuppliers + revenuePredictability;
    const discountRate1 = 1 + discountRate / 100;

    // Определение прибыльности
    profitable = netCashFlow1 / discountRate1 + netCashFlow2 / discountRate1 ** 2 + netCashFlow3 / discountRate1 ** 3 + terminalCost / discountRate1 ** 4;

    // Сравнительный подход
    const income0 = parseInt(document.getElementById('income0').value);
    
    const assets1_1 = parseInt(document.getElementById('assets1_1').value);
    const liabilities1_1 = parseInt(document.getElementById('liabilities1_1').value);
    const assets2_1 = parseInt(document.getElementById('assets2_1').value);
    const liabilities2_1 = parseInt(document.getElementById('liabilities2_1').value);
    const assets3_1 = parseInt(document.getElementById('assets3_1').value);
    const liabilities3_1 = parseInt(document.getElementById('liabilities3_1').value);
    const assets1_2 = parseInt(document.getElementById('assets1_2').value);
    const liabilities1_2 = parseInt(document.getElementById('liabilities1_2').value);
    const assets2_2 = parseInt(document.getElementById('assets2_2').value);
    const liabilities2_2 = parseInt(document.getElementById('liabilities2_2').value);
    const assets3_2 = parseInt(document.getElementById('assets3_2').value);
    const liabilities3_2 = parseInt(document.getElementById('liabilities3_2').value);
    const assets1_3 = parseInt(document.getElementById('assets1_3').value);
    const liabilities1_3 = parseInt(document.getElementById('liabilities1_3').value);
    const assets2_3 = parseInt(document.getElementById('assets2_3').value);
    const liabilities2_3 = parseInt(document.getElementById('liabilities2_3').value);
    const assets3_3 = parseInt(document.getElementById('assets3_3').value);
    const liabilities3_3 = parseInt(document.getElementById('liabilities3_3').value);

    const expensive1_1 = assets1_1 - liabilities1_1;
    const expensive2_1 = assets2_1 - liabilities2_1;
    const expensive3_1 = assets3_1 - liabilities3_1;
    const expensive1_2 = assets1_2 - liabilities1_2;
    const expensive2_2 = assets2_2 - liabilities2_2;
    const expensive3_2 = assets3_2 - liabilities3_2;
    const expensive1_3 = assets1_3 - liabilities1_3;
    const expensive2_3 = assets2_3 - liabilities2_3;
    const expensive3_3 = assets3_3 - liabilities3_3;

    const discount1 = parseInt(document.getElementById('discount1').value) / 100 + 1;
    const discount2 = parseInt(document.getElementById('discount2').value) / 100 + 1;
    const discount3 = parseInt(document.getElementById('discount3').value) / 100 + 1;

    const price1 = expensive1_1 / discount1 + expensive1_2 / discount1 ** 2 + expensive1_3 / discount1 ** 3;
    const price2 = expensive2_1 / discount2 + expensive2_2 / discount2 ** 2 + expensive2_3 / discount2 ** 3;
    const price3 = expensive3_1 / discount3 + expensive3_2 / discount3 ** 2 + expensive3_3 / discount3 ** 3;

    const cartoonist1 = price1 / assets1_1;
    const cartoonist2 = price2 / assets2_1;
    const cartoonist3 = price3 / assets3_1;
    const cartoonist0 = (cartoonist1 + cartoonist2 + cartoonist3)/3;
    const price = cartoonist0 * income0;

    // Согласование результатов трёх подходов
    const weight1 = parseInt(document.getElementById('weight1').value) / 100;
    const weight2 = parseInt(document.getElementById('weight2').value) / 100;
    const weight3 = parseInt(document.getElementById('weight3').value) / 100;

    const businessValue = expensive * weight1 + profitable * weight2 + price * weight3;

    // Вывод результата
    document.getElementById('result').innerText = "Оценочная стоимость вашего бизнеса: " + businessValue.toFixed(2);
}