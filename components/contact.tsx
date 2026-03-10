"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { TypographyH2, TypographyP } from "@/components/typography";
import { Loader2 } from "lucide-react";

// Basic Input Component
const Input = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);

// Basic Textarea Component
const Textarea = ({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);

// Basic Label Component
const Label = ({
  className,
  children,
  ...props
}: React.LabelHTMLAttributes<HTMLLabelElement>) => (
  <label
    className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
    {...props}
  >
    {children}
  </label>
);

export function Contact() {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    console.log("Form submitted:", formData);
    setLoading(false);
    setFormData({ name: "", email: "", message: "" });
    alert("Message sent successfully!");
  };

  return (
    <section
      id="contact"
      className="w-full pt-8 pb-24 sm:pt-16 sm:pb-32 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-8">
        <div className="w-full text-start flex flex-col items-start">
          <TypographyH2>Contact Us</TypographyH2>
          <div className="mt-4 flex flex-col gap-4 text-muted-foreground max-w-3xl text-start">
            <TypographyP>
              Have a question or want to work together? Send us a message and
              we&apos;ll get back to you as soon as possible.
            </TypographyP>
          </div>
        </div>

        <div className="w-full max-w-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                name="name"
                placeholder="John Doe"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                name="email"
                type="email"
                placeholder="john@example.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Type your message here..."
                className="min-h-[150px]"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <Button
              type="submit"
              disabled={loading}
              className="w-full sm:w-auto"
            >
              {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}
