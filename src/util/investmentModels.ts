interface InvestmentForm {
    initialInvestment: number;
    annualInvestment: number;
    expectedReturn: number;
    duration: number;
}

export interface InvestmentFormProps {
    inputData: InvestmentForm;
    onChange: (...args: any[]) => any;
}

export interface InvestmentResultTableProps {
    inputData: InvestmentForm;
}

export interface InvestmentYear {
    year: number
    interest: number
    valueEndOfYear: number
    annualInvestment: number
}