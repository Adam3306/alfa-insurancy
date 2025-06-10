"use client";

import Cookies from "js-cookie";

interface TrackEvent {
  userId: string;
  eventType: string;
  page: string;
  data?: Record<string, unknown>;
  timestamp?: string;
}

/**
 * Initializes user tracking by setting a user ID cookie if it doesn't exist
 * and tracking the initial page view
 */
export const initializeTracking = (): void => {
  // Check if consent has been given
  const consentGiven = Cookies.get("cookie-consent");
  if (consentGiven !== "true") {
    // Don't track if consent not given
    return;
  }

  // Set a user ID cookie for tracking if it doesn't exist
  if (!Cookies.get("user-id")) {
    const userId = generateUserId();
    Cookies.set("user-id", userId, { expires: 365 });
  }

  // Track page view
  trackPageView();
};

/**
 * Generates a random user ID for tracking
 */
export const generateUserId = (): string => {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
};

/**
 * Tracks a page view event
 */
export const trackPageView = (): void => {
  const userId = Cookies.get("user-id");
  if (!userId) return;

  const currentPage = window.location.pathname;

  // Track the page view
  trackEvent({
    userId,
    eventType: "pageview",
    page: currentPage,
  });
};

/**
 * Tracks a form submission event
 */
export const trackFormSubmission = (
  formId: string,
  formData: Record<string, unknown>
): void => {
  const userId = Cookies.get("user-id");
  if (!userId) return;

  // Track the form submission
  trackEvent({
    userId,
    eventType: "form_submission",
    page: window.location.pathname,
    data: {
      formId,
      // Exclude sensitive data like passwords
      formData: sanitizeFormData(formData),
    },
  });
};

/**
 * Tracks a button click event
 */
export const trackButtonClick = (
  buttonId: string,
  buttonText: string
): void => {
  const userId = Cookies.get("user-id");
  if (!userId) return;

  // Track the button click
  trackEvent({
    userId,
    eventType: "button_click",
    page: window.location.pathname,
    data: {
      buttonId,
      buttonText,
    },
  });
};

/**
 * Sanitizes form data to remove sensitive information
 */
const sanitizeFormData = (
  formData: Record<string, unknown>
): Record<string, unknown> => {
  const sanitized = { ...formData };

  // Remove sensitive fields
  const sensitiveFields = [
    "password",
    "creditCard",
    "cardNumber",
    "cvv",
    "ssn",
  ];
  sensitiveFields.forEach((field) => {
    if (field in sanitized) {
      sanitized[field] = "[REDACTED]";
    }
  });

  return sanitized;
};

/**
 * Generic function to track any event
 */
export const trackEvent = (event: TrackEvent): void => {
  // Check if consent has been given
  const consentGiven = Cookies.get("cookie-consent");
  if (consentGiven !== "true") {
    // Don't track if consent not given
    return;
  }

  // Add timestamp if not provided
  if (!event.timestamp) {
    event.timestamp = new Date().toISOString();
  }

  // Send the event to the analytics API
  fetch("/api/analytics/pageview", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(event),
  }).catch((error) => {
    // Silent fail - don't disrupt user experience if tracking fails
    console.error("Error tracking event:", error);
  });
};

export default {
  initializeTracking,
  trackPageView,
  trackFormSubmission,
  trackButtonClick,
  trackEvent,
};
