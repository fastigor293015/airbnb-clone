"use client";

import { Toaster } from "react-hot-toast";

// Toaster'у необходим хотя бы один родительский клиентский компонент
const ToasterProvider = () => {
  return (
    <Toaster />
  )
};

export default ToasterProvider;
