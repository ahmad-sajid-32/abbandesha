"use client";

import { useEffect, useState } from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Section } from "@/components/ui/section";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

type ContactFormData = {
  name: string;
  email: string;
  service: string;
  message: string;
};

type ContactFormErrors = {
  name: string;
  email: string;
  message: string;
};

const INITIAL_FORM_DATA: ContactFormData = {
  name: "",
  email: "",
  service: "Business Consultancy",
  message: "",
};

const INITIAL_ERRORS: ContactFormErrors = {
  name: "",
  email: "",
  message: "",
};

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA);
  const [errors, setErrors] = useState<ContactFormErrors>(INITIAL_ERRORS);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showSubmissionError, setShowSubmissionError] = useState(false);

  const [state, submitToFormspree] = useForm("mgonlqdy");

  const validate = (): boolean => {
    let isValid = true;
    const newErrors: ContactFormErrors = {
      name: "",
      email: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Full Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email Address is required";
      isValid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      isValid = false;
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleFieldChange = <K extends keyof ContactFormData>(
    field: K,
    value: ContactFormData[K],
  ) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (showSuccessMessage) {
      setShowSuccessMessage(false);
    }

    if (showSubmissionError) {
      setShowSubmissionError(false);
    }

    if (field === "name" || field === "email" || field === "message") {
      setErrors((prev) => ({
        ...prev,
        [field]: "",
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setShowSubmissionError(false);
    setShowSuccessMessage(false);

    if (!validate()) {
      return;
    }

    submitToFormspree(e);
  };

  useEffect(() => {
    if (state.succeeded) {
      setFormData(INITIAL_FORM_DATA);
      setErrors(INITIAL_ERRORS);
      setShowSubmissionError(false);
      setShowSuccessMessage(true);
    }
  }, [state.succeeded]);

  useEffect(() => {
    if (!state.submitting && !state.succeeded && state.errors?.length > 0) {
      setShowSubmissionError(true);
    }
  }, [state.errors, state.submitting, state.succeeded]);

  return (
    <Section id="contact" className="bg-background">
      <div className="bg-surface rounded-3xl md:rounded-[2.5rem] shadow-2xl overflow-hidden flex flex-col lg:flex-row">
        <ScrollReveal
          direction="right"
          className="lg:w-1/2 p-8 md:p-12 lg:p-20 xl:p-24 bg-primary text-primary-foreground space-y-8 md:space-y-10 xl:space-y-12"
        >
          <div>
            <h3 className="text-3xl md:text-4xl xl:text-5xl font-black mb-3 md:mb-4">
              Contact Us
            </h3>
            <p className="text-primary-foreground/80 text-base md:text-lg xl:text-xl">
              Have a complex project? Let&apos;s discuss how ABBANDESHA can help
              you scale.
            </p>
          </div>

          <div className="space-y-5 md:space-y-6 xl:space-y-8">
            <div className="flex items-start gap-3 md:gap-4 xl:gap-6">
              <div className="p-2 md:p-3 xl:p-4 bg-white/10 rounded-lg shrink-0">
                <Mail className="h-5 w-5 md:h-6 md:w-6 xl:h-8 xl:w-8" />
              </div>
              <div>
                <p className="text-xs md:text-sm xl:text-base font-bold text-primary-foreground/70 uppercase tracking-widest">
                  Email Us
                </p>
                <p className="text-base md:text-lg xl:text-xl break-all">
                  hello@abbandesha.co.uk
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4 xl:gap-6">
              <div className="p-2 md:p-3 xl:p-4 bg-white/10 rounded-lg shrink-0">
                <Phone className="h-5 w-5 md:h-6 md:w-6 xl:h-8 xl:w-8" />
              </div>
              <div>
                <p className="text-xs md:text-sm xl:text-base font-bold text-primary-foreground/70 uppercase tracking-widest">
                  Call Us
                </p>
                <p className="text-base md:text-lg xl:text-xl">
                  +44 (0) 20 1234 5678
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 md:gap-4 xl:gap-6">
              <div className="p-2 md:p-3 xl:p-4 bg-white/10 rounded-lg shrink-0">
                <MapPin className="h-5 w-5 md:h-6 md:w-6 xl:h-8 xl:w-8" />
              </div>
              <div>
                <p className="text-xs md:text-sm xl:text-base font-bold text-primary-foreground/70 uppercase tracking-widest">
                  Office
                </p>
                <p className="text-base md:text-lg xl:text-xl">
                  123 Business Avenue, Canary Wharf
                  <br />
                  London, E14 5AB, United Kingdom
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal
          direction="left"
          className="lg:w-1/2 p-8 md:p-12 lg:p-20 xl:p-24"
        >
          <form
            className="space-y-5 md:space-y-6 xl:space-y-8"
            onSubmit={handleSubmit}
            noValidate
          >
            {showSuccessMessage && (
              <div
                className="rounded-md border border-green-500/30 bg-green-500/10 px-4 py-3 text-sm text-green-700"
                aria-live="polite"
              >
                Your message has been sent successfully.
              </div>
            )}

            {showSubmissionError && (
              <div
                className="rounded-md border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-600"
                aria-live="polite"
              >
                We could not send your message right now. Please try again.
              </div>
            )}

            <div className="grid md:grid-cols-2 gap-5 md:gap-6 xl:gap-8">
              <div className="space-y-2">
                <label
                  htmlFor="contact-name"
                  className="text-xs md:text-sm xl:text-base font-bold text-foreground"
                >
                  Full Name
                </label>
                <Input
                  id="contact-name"
                  name="name"
                  placeholder="John Doe"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={
                    errors.name ? "contact-name-error" : undefined
                  }
                  className={`bg-background h-12 xl:h-14 xl:text-lg ${
                    errors.name
                      ? "border-red-500 focus-visible:ring-red-500"
                      : ""
                  }`}
                  value={formData.name}
                  onChange={(e) => handleFieldChange("name", e.target.value)}
                />
                {errors.name && (
                  <p
                    id="contact-name-error"
                    className="text-red-500 text-xs xl:text-sm mt-1"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="contact-email"
                  className="text-xs md:text-sm xl:text-base font-bold text-foreground"
                >
                  Email Address
                </label>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="john@company.com"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={
                    errors.email || state.errors?.length > 0
                      ? "contact-email-error"
                      : undefined
                  }
                  className={`bg-background h-12 xl:h-14 xl:text-lg ${
                    errors.email
                      ? "border-red-500 focus-visible:ring-red-500"
                      : ""
                  }`}
                  value={formData.email}
                  onChange={(e) => handleFieldChange("email", e.target.value)}
                />
                <ValidationError
                  id="contact-email-error"
                  className="text-red-500 text-xs xl:text-sm mt-1"
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs xl:text-sm mt-1">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="contact-service"
                className="text-xs md:text-sm xl:text-base font-bold text-foreground"
              >
                Service Interested In
              </label>
              <select
                id="contact-service"
                name="service"
                className="flex h-12 xl:h-14 w-full rounded-md border border-input bg-background px-3 py-2 text-sm xl:text-lg ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:border-transparent disabled:cursor-not-allowed disabled:opacity-50 transition-all"
                value={formData.service}
                onChange={(e) => handleFieldChange("service", e.target.value)}
              >
                <option>Business Consultancy</option>
                <option>Project Management</option>
                <option>Data Analytics</option>
                <option>Customer Support</option>
              </select>
            </div>

            <div className="space-y-2">
              <label
                htmlFor="contact-message"
                className="text-xs md:text-sm xl:text-base font-bold text-foreground"
              >
                Message
              </label>
              <Textarea
                id="contact-message"
                name="message"
                placeholder="Tell us about your project..."
                rows={4}
                aria-invalid={Boolean(errors.message)}
                aria-describedby={
                  errors.message || state.errors?.length > 0
                    ? "contact-message-error"
                    : undefined
                }
                className={`bg-background xl:text-lg ${
                  errors.message
                    ? "border-red-500 focus-visible:ring-red-500"
                    : ""
                }`}
                value={formData.message}
                onChange={(e) => handleFieldChange("message", e.target.value)}
              />
              <ValidationError
                id="contact-message-error"
                className="text-red-500 text-xs xl:text-sm mt-1"
                prefix="Message"
                field="message"
                errors={state.errors}
              />
              {errors.message && (
                <p className="text-red-500 text-xs xl:text-sm mt-1">
                  {errors.message}
                </p>
              )}
            </div>

            <Button
              type="submit"
              size="lg"
              isLoading={state.submitting}
              className="w-full h-12 md:h-14 xl:h-16 text-sm md:text-base xl:text-lg"
              disabled={state.submitting}
            >
              {state.submitting
                ? "Sending..."
                : showSuccessMessage
                  ? "Message Sent!"
                  : "Send Message"}
            </Button>
          </form>
        </ScrollReveal>
      </div>
    </Section>
  );
}
