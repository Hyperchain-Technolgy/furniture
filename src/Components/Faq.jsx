import { Disclosure } from '@headlessui/react'
import { MinusSmallIcon, PlusSmallIcon } from '@heroicons/react/24/outline'

const Faq = () => {
  const faqs = [
    {
      question: "What payment methods are accepted?",
      answer:
        "We accept various payment methods, including credit/debit cards, PayPal, and other secure online payment options. You can select your preferred payment method during checkout.",
    },
    {
      question: "What is the return and refund policy?",
      answer:
        "We offer a hassle-free return and refund policy. If you are not satisfied with your purchase, you can initiate a return within 30 days of delivery. Please refer to our Returns Policy for detailed instructions on initiating a return or refund.",
    },
    {
      question: "Can I cancel my order?",
      answer:
        "Yes, you can cancel your order if it has not been shipped yet. To cancel, go to the 'My Orders' section of the app and select the order you wish to cancel. Follow the prompts to cancel your order.",
    }
  ]
  return (
    <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
        <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Frequently asked questions</h2>
        <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
          {faqs.map((faq) => (
            <Disclosure as="div" key={faq.question} className="pt-6">
              {({ open }) => (
                <>
                  <dt>
                    <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                      <span className="text-base font-semibold leading-7">{faq.question}</span>
                      <span className="ml-6 flex h-7 items-center">
                        {open ? (
                          <MinusSmallIcon className="h-6 w-6" aria-hidden="true" />
                        ) : (
                          <PlusSmallIcon className="h-6 w-6" aria-hidden="true" />
                        )}
                      </span>
                    </Disclosure.Button>
                  </dt>
                  <Disclosure.Panel as="dd" className="mt-2 pr-12">
                    <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default Faq