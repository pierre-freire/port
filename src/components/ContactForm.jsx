import { useState } from "react";
import emailjs from "@emailjs/browser";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: null,
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      setIsSubmitting(true);

      try {
        await emailjs.send("service_glb4q7p", "template_tn35b69", formData, {
          publicKey: "OERy7OdIPWBKkgfC4",
        });

        setSubmitMessage({
          type: "success",
          text: "Thank you for your message. I'll get back to you soon!",
        });

        setTimeout(() => {
          setSubmitMessage(null);
        }, 5000);

        setIsSubmitting(false);
        setFormData({ name: "", email: "", message: "" });
      } catch (err) {
        if (err) {
          console.log("EMAILJS FAILED...", err);
          return;
        }

        console.log("ERROR", err);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-300"
        >
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border ${
            errors.name ? "border-red-500" : "border-gray-700"
          } px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 bg-gray-700 text-white`}
          placeholder="Your name"
        />
        {errors.name && (
          <p className="mt-1 text-sm text-red-400">{errors.name}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-300"
        >
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          className={`mt-1 block w-full rounded-md border ${
            errors.email ? "border-red-500" : "border-gray-700"
          } px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 bg-gray-700 text-white`}
          placeholder="Your email"
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-400">{errors.email}</p>
        )}
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-300"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className={`mt-1 block w-full rounded-md border ${
            errors.message ? "border-red-500" : "border-gray-700"
          } px-3 py-2 shadow-sm focus:border-blue-500 focus:outline-none focus:ring-blue-500 bg-gray-700 text-white`}
          placeholder="Tell me about your project or inquiry..."
        />
        {errors.message && (
          <p className="mt-1 text-sm text-red-400">{errors.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </button>

      {submitMessage && (
        <div
          className={`mt-4 rounded-md ${
            submitMessage.type === "success"
              ? "bg-green-900/50 text-green-300"
              : "bg-red-900/50 text-red-300"
          } p-4`}
        >
          <p>{submitMessage.text}</p>
        </div>
      )}
    </form>
  );
}

export default ContactForm;
