"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { TypographyH2, TypographyP } from "@/components/typography";
import { Loader2, Mail, MapPin, Phone } from "lucide-react";
import { useAlert } from "@/components/alert-context";

// Basic Input Component
const Input = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    className={`flex h-8 sm:h-10 w-full rounded-md border border-input bg-background px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);

// Basic Textarea Component
const Textarea = ({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    className={`flex min-h-[60px] sm:min-h-[80px] w-full rounded-md border border-input bg-background px-2.5 sm:px-3 py-1.5 sm:py-2 text-xs sm:text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
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
    className={`text-xs sm:text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ${className}`}
    {...props}
  >
    {children}
  </label>
);

export function Contact() {
  const { showAlert } = useAlert();
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

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to send");

      setFormData({ name: "", email: "", message: "" });
      showAlert({
        title: "Success",
        description: "Message sent successfully!",
        variant: "success",
      });
    } catch {
      showAlert({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="w-full pt-5 pb-12 sm:pt-16 sm:pb-32 relative overflow-hidden"
    >
      {/* Background Gradient Blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-16 items-start">
        {/* Left Column: Contact Info */}
        <div className="flex flex-col gap-3 lg:sticky lg:top-24">
          <div className="w-full text-start flex flex-col items-start gap-2 sm:gap-4">
            <TypographyH2>Let&apos;s build something together</TypographyH2>
            <TypographyP>
              Have a project in mind or want to learn more about our services?
              Reach out to us and let&apos;s start a conversation.
            </TypographyP>
          </div>

          <div className="flex flex-col gap-1 sm:gap-2 mt-1 sm:mt-4">
            <div className="flex items-center gap-2.5 sm:gap-4 sm:p-3 sm:rounded-lg sm:hover:bg-card-near sm:hover:shadow-md transition-colors">
              <div className="bg-primary/10 p-1 sm:p-1.5 rounded-full text-primary">
                <Mail className="size-3 sm:size-4" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-tight">
                  exortech.com · support@exortech.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-4 sm:p-3 sm:rounded-lg sm:hover:bg-card-near sm:hover:shadow-md transition-colors">
              <div className="bg-primary/10 p-1 sm:p-1.5 rounded-full text-primary">
                <Phone className="size-3 sm:size-4" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-tight">
                  09705872979 · Mon-Fri 8am–5pm
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 sm:gap-4 sm:p-3 sm:rounded-lg sm:hover:bg-card-near sm:hover:shadow-md transition-colors">
              <div className="bg-primary/10 p-1 sm:p-1.5 rounded-full text-primary">
                <MapPin className="size-3 sm:size-4" />
              </div>
              <div>
                <p className="text-xs sm:text-sm text-muted-foreground leading-tight">
                  Hiraya Bldg. CSU Main Campus, Ampayon, Butuan City, 8600
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="w-full">
          <Card className="bg-card-near shadow-md hover:shadow-lg transition-shadow border-border/50 py-0 gap-0 sm:py-6 sm:gap-6">
            <CardHeader className="px-3 pt-3 pb-1.5 sm:px-6 sm:pt-6 sm:pb-0">
              <CardTitle className="text-sm sm:text-base">
                Send us a message
              </CardTitle>
              <CardDescription className="text-xs sm:text-sm">
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-3 pb-3 sm:px-6 sm:pb-6">
              <form
                onSubmit={handleSubmit}
                className="space-y-2.5 sm:space-y-6"
              >
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:shadow-none transition-shadow"
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
                    className="shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:shadow-none transition-shadow"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us about your project..."
                    className="min-h-[80px] sm:min-h-[150px] resize-none shadow-[inset_0_2px_4px_rgba(0,0,0,0.1)] focus:shadow-none transition-shadow"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button
                  type="submit"
                  size="sm"
                  disabled={loading}
                  className="w-full sm:h-10 sm:text-sm"
                >
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
