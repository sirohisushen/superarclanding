"use server"

import { initializeApp, getApps } from "firebase/app"
import { getFirestore, collection, addDoc, query, where, getDocs } from "firebase/firestore"

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
}

function getFirebaseApp() {
  const apps = getApps()
  if (apps.length > 0) return apps[0]
  return initializeApp(firebaseConfig)
}

export async function addToWaitlist(email: string) {
  try {
    const app = getFirebaseApp()
    const db = getFirestore(app)

    // Check if email already exists
    const waitlistRef = collection(db, "waitlist")
    const q = query(waitlistRef, where("email", "==", email.toLowerCase()))
    const existingDocs = await getDocs(q)

    if (!existingDocs.empty) {
      return {
        success: false,
        message: "This email is already on the waitlist",
      }
    }

    // Add new email to waitlist
    await addDoc(waitlistRef, {
      email: email.toLowerCase(),
      createdAt: new Date().toISOString(),
      status: "pending",
    })

    return {
      success: true,
      message: "Successfully joined the waitlist!",
    }
  } catch (error) {
    console.error("Error adding to waitlist:", error)
    return {
      success: false,
      message: "Failed to join waitlist. Please try again.",
    }
  }
}
