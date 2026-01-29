import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
  CheckCircle,
  ChevronDown,
} from "lucide-react";
import GradientText from "../ui/GradientText";

/* ===== Animations ===== */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openContact, setOpenContact] = useState(null);
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((r) => setTimeout(r, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const services = [
    "SEO Optimization",
    "Social Media Marketing",
    "PPC Advertising",
    "Content Marketing",
    "Email Marketing",
    "Web Analytics",
    "Custom Strategy",
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@marketpro.com",
      description: "We respond within 24 hours",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Mon–Fri · 9am–6pm",
    },
    {
      icon: MapPin,
      title: "Office",
      value: "123 Marketing Ave",
      description: "San Francisco, CA",
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "< 24 Hours",
      description: "All business inquiries",
    },
  ];

  const faqs = [
    {
      q: "How soon can we start?",
      a: "We onboard new clients within 48 hours.",
    },
    {
      q: "What is your response time?",
      a: "All inquiries are answered within 24 hours.",
    },
    {
      q: "Do you offer custom pricing?",
      a: "Yes, we tailor pricing to your goals.",
    },
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* ===== Header ===== */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold">
            <span className="text-gray-900 dark:text-white">
              Let’s Start Your{" "}
            </span>
            <GradientText>Success Story</GradientText>
          </h2>
          <p className="mt-4 text-lg text-gray-600 dark:text-gray-400">
            Reach out for a free strategy consultation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">

          {/* ===== Form ===== */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="glass-effect rounded-3xl p-8 shadow-xl"
          >
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-16"
              >
                <div className="w-20 h-20 mx-auto bg-green-500 rounded-full flex items-center justify-center mb-6">
                  <CheckCircle className="text-white w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold">Message Sent!</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  We’ll contact you shortly.
                </p>
              </motion.div>
            ) : (
              <>
                <h3 className="text-2xl font-semibold mb-6">
                  Send us a message
                </h3>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <input
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="input"
                    />
                    <input
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="input"
                    />
                  </div>

                  <div className="grid md:grid-cols-2 gap-5">
                    <input
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Company"
                      className="input"
                    />
                    <input
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Phone"
                      className="input"
                    />
                  </div>

                  <select
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="input"
                  >
                    <option value="">Select a service</option>
                    {services.map((s) => (
                      <option key={s}>{s}</option>
                    ))}
                  </select>

                  <textarea
                    rows="4"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your project..."
                    className="input resize-none"
                  />

                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-600 to-purple-600 text-white font-semibold flex justify-center items-center gap-2"
                  >
                    {isSubmitting ? "Sending..." : (
                      <>
                        <Send size={18} /> Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </>
            )}
          </motion.div>

          {/* ===== Right Section ===== */}
          <div className="space-y-8">

            {/* Contact Info */}
            <div className="grid md:grid-cols-2 gap-4">
              {contactInfo.map((item, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: false, amount: 0.2 }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-effect rounded-2xl p-4"
                >
                  <button
                    onClick={() =>
                      setOpenContact(openContact === i ? null : i)
                    }
                    className="w-full flex justify-between items-center"
                  >
                    <div className="flex items-center gap-3">
                      <item.icon className="text-primary-600" />
                      <span className="font-semibold">{item.title}</span>
                    </div>
                    <ChevronDown
                      className={`transition ${
                        openContact === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openContact === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="mt-3 text-sm text-gray-600 dark:text-gray-400 overflow-hidden"
                      >
                        <p className="font-medium">{item.value}</p>
                        <p>{item.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* FAQ */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="glass-effect rounded-3xl p-8"
            >
              <h3 className="text-xl font-bold flex items-center gap-2 mb-6">
                <MessageSquare className="text-primary-600" /> FAQs
              </h3>

              {faqs.map((faq, i) => (
                <div key={i} className="border-b last:border-none py-4">
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    className="w-full flex justify-between items-center text-left"
                  >
                    <span className="font-semibold">{faq.q}</span>
                    <ChevronDown
                      className={`transition ${
                        openFaq === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence>
                    {openFaq === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-3 text-gray-600 dark:text-gray-400"
                      >
                        {faq.a}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Input Styles */}
      <style>{`
        .input {
          width: 100%;
          padding: 14px;
          border-radius: 12px;
          border: 1px solid #e5e7eb;
          background: transparent;
          outline: none;
        }
        .input:focus {
          border-color: #7c3aed;
          box-shadow: 0 0 0 1px #7c3aed;
        }
      `}</style>
    </section>
  );
};

export default Contact;
