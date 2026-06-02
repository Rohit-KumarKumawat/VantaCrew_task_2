import { useState, useEffect } from "react";
import { generateId } from "../utils/generateId";

const STORAGE_KEY = "vanta_leads";

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveToStorage(leads) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(leads));
  } catch {}
}

/**
 * Custom hook that manages the full leads list with localStorage persistence.
 * Exposes CRUD handlers and derived computed values.
 */
export function useLeads() {
  const [leads, setLeads] = useState(loadFromStorage);

  useEffect(() => {
    saveToStorage(leads);
  }, [leads]);

  const addLead = (form) => {
    setLeads((prev) => [
      { ...form, id: generateId(), createdAt: Date.now() },
      ...prev,
    ]);
  };

  const editLead = (id, form) => {
    setLeads((prev) =>
      prev.map((l) => (l.id === id ? { ...l, ...form } : l))
    );
  };

  const deleteLead = (id) => {
    setLeads((prev) => prev.filter((l) => l.id !== id));
  };

  const totalWonValue = leads
    .filter((l) => l.stage === "Won")
    .reduce((sum, l) => sum + (Number(l.value) || 0), 0);

  return { leads, addLead, editLead, deleteLead, totalWonValue };
}
