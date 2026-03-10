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

// Basic Input Component
const Input = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    className={`flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);

// Basic Textarea Component
const Textarea = ({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) => (
  <textarea
    className={`flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-[inset_0_2px_4px_rgba(0,0,0,0.06)] ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
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
      {/* Background Gradient Blob */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] pointer-events-none -z-10" />
      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-accent/5 rounded-full blur-[80px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 items-start">
        {/* Left Column: Contact Info */}
        <div className="flex flex-col gap-8 lg:sticky lg:top-24">
          <div className="w-full text-start flex flex-col items-start gap-4">
            <TypographyH2>Let&apos;s build something together</TypographyH2>
            <TypographyP>
              Have a project in mind or want to learn more about our services?
              Reach out to us and let&apos;s start a conversation.
            </TypographyP>
          </div>

          <div className="flex flex-col gap-6 mt-4">
            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-card-near hover:shadow-md transition-colors">
              <div className="mt-1 bg-primary/10 p-2 rounded-full text-primary">
                <Mail className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Email Us</h3>
                <p className="text-sm text-muted-foreground">exortech.com</p>
                <p className="text-sm text-muted-foreground">
                  support@exortech.com
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-card-near hover:shadow-md transition-colors">
              <div className="mt-1 bg-primary/10 p-2 rounded-full text-primary">
                <Phone className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Call Us</h3>
                <p className="text-sm text-muted-foreground">09705872979</p>
                <p className="text-sm text-muted-foreground">
                  Mon-Fri from 8am to 5pm
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-card-near hover:shadow-md transition-colors">
              <div className="mt-1 bg-primary/10 p-2 rounded-full text-primary">
                <MapPin className="size-5" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Visit Us</h3>
                <p className="text-sm text-muted-foreground">
                  Hiraya Bldg. CSU Main Campus
                  <br />
                  Ampayon, Butuan City, 8600
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="w-full">
          <Card className="bg-card-near shadow-md hover:shadow-lg transition-shadow border-border/50">
            <CardHeader>
              <CardTitle>Send us a message</CardTitle>
              <CardDescription>
                Fill out the form below and we&apos;ll get back to you within 24
                hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
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
                    placeholder="Tell us about your project..."
                    className="min-h-[150px] resize-none"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <Button type="submit" disabled={loading} className="w-full">
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
