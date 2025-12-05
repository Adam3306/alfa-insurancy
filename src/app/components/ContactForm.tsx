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
  const [errors, setErrors] = useState<{
    email?: string;
    phone?: string;
  }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Email validáció
  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Telefonszám validáció (magyar formátumok: +36, 06, stb.)
  const validatePhone = (phone: string): boolean => {
    if (!phone || phone.trim() === "") return true; // Opcionális mező
    // Egyszerűsített regex: számok, szóközök, kötőjelek, + jel
    const simplePhoneRegex = /^[\d\s\-\+\(\)]+$/;
    const digitsOnly = phone.replace(/[\s\-\(\)\+]/g, "");
    return (
      simplePhoneRegex.test(phone) &&
      digitsOnly.length >= 9 &&
      digitsOnly.length <= 15
    );
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value,
    });

    // Validáció valós időben
    if (id === "email" && value) {
      if (!validateEmail(value)) {
        setErrors({
          ...errors,
          email: "Kérem adjon meg egy érvényes email címet",
        });
      } else {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors.email;
          return newErrors;
        });
      }
    }

    if (id === "phone" && value) {
      if (!validatePhone(value)) {
        setErrors({
          ...errors,
          phone:
            "Kérem adjon meg egy érvényes telefonszámot (pl. +36 30 123 4567)",
        });
      } else {
        setErrors((prev) => {
          const newErrors = { ...prev };
          delete newErrors.phone;
          return newErrors;
        });
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    // Validáció submit előtt
    const newErrors: { email?: string; phone?: string } = {};

    if (!validateEmail(formData.email)) {
      newErrors.email = "Kérem adjon meg egy érvényes email címet";
    }

    if (formData.phone && !validatePhone(formData.phone)) {
      newErrors.phone =
        "Kérem adjon meg egy érvényes telefonszámot (pl. +36 30 123 4567)";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setIsSubmitting(false);
      return;
    }

    setErrors({});

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
        setErrors({});
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
            className={`w-full p-3 rounded-md bg-secondary-blue border ${
              errors.email
                ? "border-red-400 focus:ring-2 focus:ring-red-400"
                : "border-light-blue focus:ring-2 focus:ring-highlight-blue"
            } text-white focus:outline-none font-telegraf`}
            placeholder="email@pelda.hu"
            required
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-300 font-telegraf">
              {errors.email}
            </p>
          )}
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
          className={`w-full p-3 rounded-md bg-secondary-blue border ${
            errors.phone
              ? "border-red-400 focus:ring-2 focus:ring-red-400"
              : "border-light-blue focus:ring-2 focus:ring-highlight-blue"
          } text-white focus:outline-none font-telegraf`}
          placeholder="+36 30 123 4567"
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-300 font-telegraf">
            {errors.phone}
          </p>
        )}
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
