"use client";

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("5a6ca29f-3ff5-4ef2-a268-00f00f95d76d");
  }, []);

  return null;
};
