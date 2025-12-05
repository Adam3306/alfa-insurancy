"use client";
import { useState } from "react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message:
            "Üzenet sikeresen elküldve! Hamarosan felvesszük Önnel a kapcsolatot.",
        });
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus({
          type: "error",
          message: result.message || "Hiba történt az üzenet küldése közben.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Hiba történt az üzenet küldése közben.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {status.type && (
        <div
          className={`p-4 rounded-md font-telegraf ${
            status.type === "success"
              ? "bg-green-500/20 text-green-300 border border-green-400/50"
              : "bg-red-500/20 text-red-300 border border-red-400/50"
          }`}
        >
          {status.message}
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block mb-2 font-telegraf text-white">
            Név *
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-secondary-blue border border-light-blue text-white focus:outline-none focus:ring-2 focus:ring-highlight-blue font-telegraf"
            placeholder="Teljes név"
            required
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block mb-2 font-telegraf text-white"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 rounded-md bg-secondary-blue border border-light-blue text-white focus:outline-none focus:ring-2 focus:ring-highlight-blue font-telegraf"
            placeholder="email@pelda.hu"
            required
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block mb-2 font-telegraf text-white">
          Telefon
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full p-3 rounded-md bg-secondary-blue border border-light-blue text-white focus:outline-none focus:ring-2 focus:ring-highlight-blue font-telegraf"
          placeholder="+36 xx xxx xxxx"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block mb-2 font-telegraf text-white"
        >
          Üzenet *
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full p-3 rounded-md bg-secondary-blue border border-light-blue text-white focus:outline-none focus:ring-2 focus:ring-highlight-blue font-telegraf"
          placeholder="Kérem írja le részletesen, hogy miben segíthetek..."
          required
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-highlight-blue text-primary-blue font-bold py-3 px-6 rounded-md hover:bg-yellow-400 transition-colors font-telegraf text-lg disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "KÜLDÉS..." : "AJÁNLATKÉRÉS KÜLDÉSE"}
      </button>
    </form>
  );
}
