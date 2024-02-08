import { redirect } from "next/navigation";
import React from "react";

export default function HomePage() {

  redirect('/dashboard/main');

  return (
    <h1>Hola Mundo</h1>
  );
}
