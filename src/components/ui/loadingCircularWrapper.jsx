"use client";

import { useLoading } from "@/context/LoadingContext";
import LoadingCircular from "../animations/loadingCircular";

export default function LoadingOverlayWrapper() {
  const { loading } = useLoading();

  return <LoadingCircular loading={loading} />;
}