import FaqItem from "./FaqItem";

const faqs = [
  {
    question: "Are your products safe for newborns?",
    answer:
      "Yes, all our products are dermatological tested and made with gentle, non-toxic ingredients that are safe for newborns and sensitive skin.",
  },
  {
    question: "How long does delivery take?",
    answer:
      "Delivery typically takes 3–5 business days depending on your location. You’ll receive tracking details once your order is shipped.",
  },
  {
    question: "Can I return or exchange a product?",
    answer:
      "Yes, we offer a 7-day return or exchange policy on unused and unopened items. Please contact our support team to initiate a return.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit/debit cards, UPI, net banking, and wallet payments like Paytm and Google Pay.",
  },
  {
    question: "Are your skincare products organic or natural?",
    answer:
      "Yes, our skincare range is made using organic and naturally derived ingredients, free from harmful chemicals and artificial fragrances.",
  },
];


export default function FaqSection() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-3xl md:text-5xl font-semibold text-center mb-4">
        Frequently Asked Questions
      </h2>
      <p className="text-center text-2xl text-black mb-8">
        We’re Here to Help – Every Step of the Way
      </p>

      {faqs.map((faq, index) => (
        <FaqItem
          key={index}
          question={faq.question}
          answer={faq.answer}
        />
      ))}
    </section>
  );
}
