'use client'
import ReminderItem from "@/components/ReminderItem/ReminderItem";
import styles from "./page.module.css"
import { Tile } from "@carbon/react";
import { useState } from "react";


export default function Home() {
  const [currentTime, setTime] = useState(new Date().toLocaleTimeString())
  
  const updateTime = () => {
    const time = new Date().toLocaleTimeString()
    setTime(time)
  }
  setInterval(updateTime)

  const items: Item[] = [
    {
      name: "Phone",
      resource: "📱"
    },
    {
      name: "Wallet",
      resource: "💳"
    },
    {
      name: "Keys",
      resource: "🔑"
    },
    {
      name: "Watch",
      resource: "⌚️"
    },
    {
      name: "AirPods",
      resource: "🎧"
    },
    {
      name: "Train Pass",
      resource: "🚂"
    },
    {
      name: "Badge",
      resource: "🪪"
    }
  ]
  return (
    // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
    <div className={styles.root}>
      <Tile className={styles.itemsContainer}>
        {
          items.map(({ name, resource }, idx) => <ReminderItem name={name} resource={resource} key={idx}></ReminderItem>)
        }
      </Tile>
      <footer className={styles.rootFooter}>
        <h1 className={styles.digitalClock}>{currentTime}</h1>
      </footer>
    </div>
  );
}

type Item = {
  name: string
  resource: string
}
