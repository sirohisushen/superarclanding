"use client"

import { initializeApp, getApps } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

let db: any = null

export async function initializeFirestore() {
  if (db) return db

  try {
    const app = getApps().length > 0 ? getApps()[0] : initializeApp(firebaseConfig)
    db = getFirestore(app)
    console.log("[v0] Firestore initialized successfully")
    return db
  } catch (error) {
    console.error("[v0] Failed to initialize Firestore:", error)
    throw error
  }
}

export { db }
