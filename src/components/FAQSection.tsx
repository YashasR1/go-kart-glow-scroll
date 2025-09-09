import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How should I dress to go karting?",
      answer: "You must wear closed shoes (no sandals allowed) and dress as for any outdoor activity. For more safety, wear clothes that cover your body as much as possible."
    },
    {
      question: "Is karting dangerous?",
      answer: "Karting is actually a very safe form of motor racing. The vehicles are relatively light, and proper safety equipment usually prevents any serious injuries, which accordingly are very rare. Of course there is always a risk, as with everything you do. Considering how many people practice karting, however, the number of significant injuries is very low. It is also a family sport, with even kids participating safely. You are more likely to hurt yourself in the pits while working with a screwdriver than while racing the kart."
    },
    {
      question: "What is the minimum age?",
      answer: "The youngest age allowed is eight years, however there can be exceptions when accompaniend with parents."
    },
    {
      question: "What do I need to bring along with me?",
      answer: "Nothing: We will supply all of the equipment you will need."
    },
    {
      question: "Do I need to book in advance?",
      answer: "No. Just arrive-and-drive."
    },
    {
      question: "Do I need a Drivers Licence?",
      answer: "No, just some enthusiasm and some passion for motorsport!"
    },
    {
      question: "What is karting?",
      answer: "Karting is probably the world's most popular form of motor sport enjoyed by both male and female of all age groups. It is practiced around the world by hundreds of thousands of enthusiasts at widely differing levels of competition."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-black">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div className="text-center mb-16"
            initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.9 }}
            viewport={{ once: true, amount: 0.8 }}>
          <h2 className="text-4xl font-bold mb-4">
            Frequently Asked <span className="text-primary">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Find answers to common questions about our karting experience
          </p>
        </motion.div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, amount: 0.8 }}
            >
              <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-semibold hover:text-primary">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
            </motion.div>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
