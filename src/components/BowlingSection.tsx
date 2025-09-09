import { motion } from "framer-motion";

const BowlingSection = () => {
  return (
    <section className="py-10 bg-black">
      <div className="max-w-[1280px] mx-auto px-6">
        {/* Bowling Section */}
        <motion.div className="bg-[#080808] border border-border rounded-2xl p-8 md:p-8"
              initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
              viewport={{ once: true, amount: 0.8 }}
              >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left - Bowling Image Placeholder */}
            <div>
              <div className="h-full bg-gradient-to-br from-red-600 to-black/10 rounded-xl">
                <img
                  src="/bowling ball.png"
                  alt="Bowling Ball"
                  className="w-80 h-80 hover:scale-105 transition-transform duration-300 mx-auto my-auto"
                />
              </div>
            </div>

            {/* Right - Bowling Description */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
              viewport={{ once: true, amount: 0.8 }}
            >
              <h3 className="text-3xl font-bold">
                More Than Just <span className="text-accent">Racing</span>
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Here's the latest addition to the grips world of entertainment.
                If you had enough of outdoor gokarting fun, walk in to our
                bowling arena and try your skills to strike at out bowling
                alleys. The bowling alleys are of international standards made
                of imported top class bowling equipments
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're celebrating a victory or planning a group event,
                our bowling facility offers the perfect complement to your
                go-karting adventure. Book a combo package and save on both
                activities!
              </p>
              <div className="bg-accent/10 rounded-lg p-4">
                <h4 className="text-lg font-semibold mb-2">
                  <span className="text-accent">Pricing</span>
                </h4>
                <motion.div
                  className="flex justify-between items-center"
                  initial={{ opacity: 0, y: 40, filter: "blur(4px)" }}
                  whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ duration: 0.8, ease: "easeOut", delay: 0.8 }}
                  viewport={{ once: true, amount: 0.8 }}
                >
                  <span className="text-muted-foreground">All days</span>
                  <span className="text-2xl font-bold text-accent">₹280</span>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BowlingSection;
