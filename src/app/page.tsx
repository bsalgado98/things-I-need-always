'use client'
import ReminderItem from "@/components/ReminderItem/ReminderItem";
import styles from "./page.module.css"
import { Tile } from "@carbon/react";
import { useEffect, useState } from "react";


export default function Home() {
  const RESET_SIGNAL_COUNTDOWN = 300000
  let time = new Date().toLocaleTimeString()
  const [currentTime, setTime] = useState(time)
  const [resetSignal, setResetSignal] = useState(0)
  
  const updateTime = () => {
    time = new Date().toLocaleTimeString()
    setTime(time)
  }
  
  useEffect(() => {
    setInterval(updateTime)
  }, [])

  const handleTouch = (event: React.MouseEvent<HTMLElement>) => {
    console.log(`[TOUCH DETECTED - STARTING ${RESET_SIGNAL_COUNTDOWN / 60000} MIN COUNTDOWN]`)
    setTimeout(() => {
      console.log('[RESETTING...]')
      setResetSignal(resetSignal => resetSignal + 1)
    }, RESET_SIGNAL_COUNTDOWN)
    // TODO: How to restart the reset signal countdown if a new click comes in before the countdown is up?
    // e.g. 1 item is clicked -> 30s later, another item is clicked -> How to reset the countdown so that
    // they all get reset 5 min after the second one was clicked ?
  }

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
    <div className={styles.root} onClick={handleTouch}>
      <header className={styles.rootHeader}>
        <h1 className={styles.headerTitle}>Things I Need Always</h1>
      </header>
      <Tile className={styles.itemsContainer}>
        {
          items.map(({ name, resource }, idx) => <ReminderItem name={name} resource={resource} resetSignal={resetSignal} key={idx}></ReminderItem>)
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
