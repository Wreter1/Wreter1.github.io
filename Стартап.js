function calculateBusinessValue() {
    // Ставка дисконтирования
    const discount3 = parseInt(document.getElementById('discount_3').value);

    // Метод Беркуса
    const businessIdea = parseInt(document.getElementById('business_idea_1').value);
    const product = parseInt(document.getElementById('product_1').value);
    const team = parseInt(document.getElementById('team_1').value);
    const partners = parseInt(document.getElementById('partners_1').value);
    const availability = parseInt(document.getElementById('availability_1').value);
    const price1 = businessIdea + product + team + partners + availability;

    // Метод скоринга
    const team21 = parseInt(document.getElementById('team_21').value);
    const team22 = parseInt(document.getElementById('team_22').value);
    const result2_1 = team21 * team22 / 10000;

    const potential21 = parseInt(document.getElementById('potential_21').value);
    const potential22 = parseInt(document.getElementById('potential_22').value);
    const result2_2 = potential21 * potential22 / 10000;

    const product21 = parseInt(document.getElementById('product_21').value);
    const product22 = parseInt(document.getElementById('product_22').value);
    const result2_3 = product21 * product22 / 10000;

    const competitors21 = parseInt(document.getElementById('competitors_21').value);
    const competitors22 = parseInt(document.getElementById('competitors_22').value);
    const result2_4 = competitors21 * competitors22 / 10000;

    const sales21 = parseInt(document.getElementById('sales_21').value);
    const sales22 = parseInt(document.getElementById('sales_22').value);
    const result2_5 = sales21 * sales22 / 10000;

    const needs21 = parseInt(document.getElementById('needs_21').value);
    const needs22 = parseInt(document.getElementById('needs_22').value);
    const result2_6 = needs21 * needs22 / 10000;

    const other21 = parseInt(document.getElementById('other_21').value);
    const other22 = parseInt(document.getElementById('other_22').value);
    const result2_7 = other21 * other22 / 10000;

    const costOfAnalogue2 = parseInt(document.getElementById('cost_of_analogue_2').value);
    const startupWeight2 = (team21 + potential21 + product21 + competitors21 + sales21 + needs21 + other21) / 100;
    const quoteWeight2 = result2_1 + result2_2 + result2_3 + result2_4 + result2_5 + result2_6 + result2_7;
    const discount2 = startupWeight2 - quoteWeight2;
    const price2 = quoteWeight2 * costOfAnalogue2;

    // Метод сравнимых операций
    const companyCost31 = parseInt(document.getElementById('company_cost_31').value);
    const companyCost32 = parseInt(document.getElementById('company_cost_32').value);
    const companyCost33 = parseInt(document.getElementById('company_cost_33').value);

    const companyProfit31 = parseInt(document.getElementById('company_profit_31').value);
    const companyProfit32 = parseInt(document.getElementById('company_profit_32').value);
    const companyProfit33 = parseInt(document.getElementById('company_profit_33').value);

    const companyUser31 = parseInt(document.getElementById('company_user_31').value);
    const companyUser32 = parseInt(document.getElementById('company_user_32').value);
    const companyUser33 = parseInt(document.getElementById('company_user_33').value);

    const midCost3 = parseInt(document.getElementById('mid_cost_3').value);
    const midProfit3 = parseInt(document.getElementById('mid_profit_3').value);
    const midUser3 = parseInt(document.getElementById('mid_user_3').value);

    const companyCartoonistPr31 = companyCost31 / companyProfit31;
    const companyCartoonistPr32 = companyCost32 / companyProfit32;
    const companyCartoonistPr33 = companyCost33 / companyProfit33;

    const companyCartoonistUs31 = companyCost31 / companyUser31;
    const companyCartoonistUs32 = companyCost32 / companyUser32;
    const companyCartoonistUs33 = companyCost33 / companyUser33;

    const midCartoonistPr3 = midCost3 / midProfit3;
    const midCartoonistUs3 = midCost3 / midUser3;

    const costCartoonistPr3 = (companyCartoonistPr31 + companyCartoonistPr32 + companyCartoonistPr33 + midCartoonistPr3) / 4 * discount3 / 100;
    const costCartoonistUs3 = (companyCartoonistUs31 + companyCartoonistUs32 + companyCartoonistUs33 + midCartoonistUs3) / 4 * discount3 / 100;

    const userProfit3 = parseInt(document.getElementById('user_profit_3').value);
    const userUser3 = parseInt(document.getElementById('user_user_3').value);

    const price31 = userProfit3 * costCartoonistPr3;
    const price32 = userUser3 * costCartoonistUs3;
    const price3 = (price31 + price32) / 2;

    // Метод суммированных факторов риска
    const management4 = parseInt(document.getElementById('management_4').value);
    const businessStage4 = parseInt(document.getElementById('business_stage_4').value);
    const politicalRisk4 = parseInt(document.getElementById('political_risk_4').value);
    const productionRisk4 = parseInt(document.getElementById('production_risk_4').value);
    const riskSales4 = parseInt(document.getElementById('risk_sales_4').value);
    const financingRisk4 = parseInt(document.getElementById('financing_risk_4').value);
    const competitionRisk4 = parseInt(document.getElementById('competition_risk_4').value);
    const technologicalRisk4 = parseInt(document.getElementById('technological_risk_4').value);
    const riskShip4 = parseInt(document.getElementById('risk_ship_4').value);
    const internationalRisk4 = parseInt(document.getElementById('international_risk_4').value);
    const reputationRisk4 = parseInt(document.getElementById('reputation_risk_4').value);
    const potential4 = parseInt(document.getElementById('potential_4').value);

    const midRisk4 = management4 + businessStage4 + politicalRisk4 + productionRisk4 + riskSales4 + financingRisk4 + competitionRisk4 + technologicalRisk4 + riskShip4 + internationalRisk4 + reputationRisk4 + potential4;
    const price4 = midRisk4 * 250;

    // Метод дисконтированных денежных потоков
    const cashFlow51 = parseInt(document.getElementById('cash_flow_5_1').value);
    const cashFlow52 = parseInt(document.getElementById('cash_flow_5_2').value);
    const cashFlow53 = parseInt(document.getElementById('cash_flow_5_3').value);

    const discount5 = discount3 / 100;

    const year41 = cashFlow51 / (1 + discount5) ** 1;
    const year42 = cashFlow52 / (1 + discount5) ** 2;
    const year43 = cashFlow53 / (1 + discount5) ** 3;

    const price5 = year41 + year42 + year43;

    // Вывод результатов
    const result = `Результаты:
        Метод Беркуса: ${price1}
        Метод скоринга: ${price2}
        Метод сравнимых операций: ${price3}
        Метод суммированных факторов риска: ${price4} тысяч
        Метод дисконтированных денежных потоков: ${price5}
    `;
    document.getElementById('result').innerText = result;
}