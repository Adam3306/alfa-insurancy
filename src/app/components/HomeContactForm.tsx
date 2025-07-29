"use client";
import { useState } from "react";

export default function HomeContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [formStatus, setFormStatus] = useState<{
    submitting: boolean;
    submitted: boolean;
    error: string | null;
  }>({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus({ submitting: true, submitted: false, error: null });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.message || "Hiba történt az ajánlatkérés küldése során."
        );
      }

      // Reset form on success
      setFormData({ name: "", email: "", phone: "", message: "" });
      setFormStatus({ submitting: false, submitted: true, error: null });
    } catch (error: unknown) {
      const errorMessage =
        error instanceof Error
          ? error.message
          : "Hiba történt az ajánlatkérés küldése során.";
      setFormStatus({
        submitting: false,
        submitted: false,
        error: errorMessage,
      });
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {formStatus.submitted && (
        <div className="bg-green-100 text-green-800 p-4 rounded-md border border-green-200">
          Köszönjük! Hamarosan felvesszük Önnel a kapcsolatot.
        </div>
      )}

      {formStatus.error && (
        <div className="bg-red-100 text-red-800 p-4 rounded-md border border-red-200">
          {formStatus.error}
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-white mb-1"
          >
            Név *
          </label>
          <input
            type="text"
            id="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-highlight-blue focus:border-transparent"
            placeholder="Teljes név"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-white mb-1"
          >
            Email *
          </label>
          <input
            type="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-highlight-blue focus:border-transparent"
            placeholder="email@pelda.hu"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="phone"
          className="block text-sm font-medium text-white mb-1"
        >
          Telefon
        </label>
        <input
          type="tel"
          id="phone"
          value={formData.phone}
          onChange={handleChange}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-highlight-blue focus:border-transparent"
          placeholder="+36 xx xxx xxxx"
        />
      </div>

      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-white mb-1"
        >
          Üzenet *
        </label>
        <textarea
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={4}
          className="w-full px-3 py-2 border border-gray-300 rounded-md text-gray-900 focus:outline-none focus:ring-2 focus:ring-highlight-blue focus:border-transparent"
          placeholder="Kérem írja le részletesen, hogy miben segíthetek..."
        ></textarea>
      </div>

      <button
        type="submit"
        disabled={formStatus.submitting}
        className="w-full bg-highlight-blue text-primary-blue font-bold py-3 px-6 rounded-md hover:bg-yellow-400 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {formStatus.submitting ? "KÜLDÉS..." : "INGYENES AJÁNLATKÉRÉS"}
      </button>
    </form>
  );
}
