"use client";
import { useState, useEffect } from "react";
import { db } from "@/lib/firebase";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold">Workout Tracker</h1>
    </main>
  );
}
