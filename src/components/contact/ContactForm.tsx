import React, { useState } from "react";
import { type ContactFormData } from "../../types";
import Button from "../common/Button";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev: ContactFormData) => ({
      ...prev,
      [name]: value,
    }));
  }; // ✅ properly closed here

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("/.netlify/functions/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.success) {
        alert("Thank you for your message! We will get back to you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } else {
        alert("Failed to send message: " + result.error);
      }
    } catch (err) {
      alert("Something went wrong. Try again later.");
    }
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Phone
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500"
        />
      </div>

      <div>
        <label
          htmlFor="service"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Service of Interest
        </label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500"
        >
          <option value="">Select a service</option>
          <option value="installation">EV Charger Installation</option>
          <option value="selling">Buying Chargers</option>
          <option value="consultation">EV Industry Consultation</option>
          <option value="design">Charging Station Design</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-gray-500 focus:border-gray-500"
        ></textarea>
      </div>

      <div>
        <Button
          type="submit"
          variant="primary"
          className="w-full md:w-auto"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;
