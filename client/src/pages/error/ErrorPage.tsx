"use client";

import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useRouteError, isRouteErrorResponse } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  let errorMessage: string;
  let errorStatus: number | null = null;
  let consolation: string = "";

  if (isRouteErrorResponse(error)) {
    // Error is type `ErrorResponse`
    errorMessage = error?.statusText;
    errorStatus = error?.status;
  } else if (error instanceof Error) {
    errorMessage = error.message;
  } else if (typeof error === "string") {
    errorMessage = error;
  } else {
    errorMessage = "Unknown error";
  }

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  switch (errorStatus) {
    case 400:
      consolation =
        "Oops! It looks like something was wrong with your request. Please check and try again.";
      break;
    case 401:
      consolation =
        "You're not authorized to view this page. Try logging in and accessing it again.";
      break;
    case 403:
      consolation =
        "Access denied! You don't have permission to view this page.";
      break;
    case 404:
      consolation =
        "Uh-oh! The page you're looking for doesn't exist. Maybe it was moved or never existed.";
      break;
    case 408:
      consolation =
        "This request took too long! Try again later or check your internet connection.";
      break;
    case 429:
      consolation =
        "Whoa! You're making too many requests. Slow down and try again later.";
      break;
    case 500:
      consolation =
        "Oops! Something went wrong on our end. We're working to fix it.";
      break;
    case 502:
      consolation =
        "Bad Gateway! The server received an invalid response. Try refreshing.";
      break;
    case 503:
      consolation =
        "The service is currently unavailable. It might be undergoing maintenance—please check back later.";
      break;
    case 504:
      consolation =
        "The server took too long to respond. Please try again later.";
      break;
    case 0:
      consolation =
        "Network error! Your request couldn't reach the server. Check your internet connection.";
      break;
    default:
      consolation =
        "Something went wrong! If this keeps happening, please contact support.";
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-800 mb-4">
        {errorStatus ?? "Error code unavailable"}
      </h1>
      <h2 className="text-2xl font-semibold text-gray-600 mb-4">
        {errorMessage}
      </h2>
      <p className="text-gray-500 mb-8 text-center max-w-md">{consolation}</p>
      <div className="flex space-x-4">
        <Button asChild variant="outline">
          <Link to="/">Go back home</Link>
        </Button>
      </div>
    </div>
  );
}
