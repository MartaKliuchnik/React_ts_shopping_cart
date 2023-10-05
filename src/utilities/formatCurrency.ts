const CURRENCY_FORMATTER = new Intl.NumberFormat('en-US', {
	style: 'currency',
	currency: 'USD',
});

export default function formatCurrency(price: number) {
	return CURRENCY_FORMATTER.format(price);
}
