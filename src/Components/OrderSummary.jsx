import Button from "./Button"
import SummaryItem from "./SummaryItem"

const OrderSummary = () => {
  return (
    <section
      aria-labelledby="summary-heading"
      className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-5 lg:mt-0 lg:p-8 sticky top-10"
    >
      <h2 id="summary-heading" className="text-lg font-medium text-gray-900">
        Order summary
      </h2>

      <dl className="mt-6 space-y-4">
        <SummaryItem title="Subtotal" amount="$99.00" border="" />
        <SummaryItem title="Shipping estimate" amount="$5.00" />
        <SummaryItem title="Tax estimate" amount="$8.32" border="border-t border-gray-200 pt-4" />
        <SummaryItem title="Order total" amount="$112.32" border="border-t border-gray-200 pt-4" font="text-base font-medium" color="text-gray-900" />
      </dl>


      <div className="mt-6">
        <Button content="Checkout" className="w-full rounded-md border border-transparent bg-foreground px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50" />
      </div>
    </section>
  )
}

export default OrderSummary