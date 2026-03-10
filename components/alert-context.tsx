"use client";

import React, { createContext, useContext, useState, useCallback } from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle, CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

type AlertVariant = "default" | "destructive" | "success";

interface AlertData {
  title: string;
  description?: string;
  variant?: AlertVariant;
  duration?: number;
}

interface AlertContextType {
  showAlert: (data: AlertData) => void;
  hideAlert: () => void;
}

const AlertContext = createContext<AlertContextType | undefined>(undefined);

export function useAlert() {
  const context = useContext(AlertContext);
  if (!context) {
    throw new Error("useAlert must be used within an AlertProvider");
  }
  return context;
}

export function AlertProvider({ children }: { children: React.ReactNode }) {
  const [alert, setAlert] = useState<AlertData | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  const hideAlert = useCallback(() => {
    setIsVisible(false);
    setTimeout(() => setAlert(null), 300); // Wait for transition
  }, []);

  const showAlert = useCallback(
    ({
      title,
      description,
      variant = "default",
      duration = 3000,
    }: AlertData) => {
      setAlert({ title, description, variant, duration });
      setIsVisible(true);

      if (duration > 0) {
        setTimeout(() => {
          hideAlert();
        }, duration);
      }
    },
    [hideAlert],
  );

  return (
    <AlertContext.Provider value={{ showAlert, hideAlert }}>
      {children}
      {alert && (
        <div
          className={cn(
            "fixed top-4 right-4 z-[100] w-full max-w-sm transition-all duration-300 ease-in-out",
            isVisible
              ? "translate-y-0 opacity-100"
              : "-translate-y-4 opacity-0 pointer-events-none",
          )}
        >
          <Alert variant={alert.variant} className="shadow-lg border-l-4">
            {alert.variant === "destructive" && (
              <AlertCircle className="h-4 w-4" />
            )}
            {alert.variant === "success" && (
              <CheckCircle2 className="h-4 w-4" />
            )}
            {alert.variant === "default" && (
              <AlertCircle className="h-4 w-4 text-primary" />
            )}

            <AlertTitle
              className={cn(
                alert.variant === "success" &&
                  "text-green-700 dark:text-green-400",
              )}
            >
              {alert.title}
            </AlertTitle>
            {alert.description && (
              <AlertDescription
                className={cn(
                  alert.variant === "success" &&
                    "text-green-600 dark:text-green-300",
                )}
              >
                {alert.description}
              </AlertDescription>
            )}
          </Alert>
        </div>
      )}
    </AlertContext.Provider>
  );
}
