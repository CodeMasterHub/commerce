//   import clsx from 'clsx';

const locale = 'fr-FR'; // Tu pourrais récupérer cela dynamiquement via des props ou une configuration
const Price = ({
  amount,
  className,
  currencyCode = 'EUR',
  currencyCodeClassName
}: {
  amount: string;
  className?: string;
  currencyCode: string;
  currencyCodeClassName?: string;
} & React.ComponentProps<'p'>) => (
  <p suppressHydrationWarning={true} className={className} data-test="price-amount">
    {`${new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencyCode,
      currencyDisplay: 'narrowSymbol'
    }).format(parseFloat(amount))}`}
  </p>
);

export default Price;
