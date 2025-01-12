'use client'
import { Tile } from "@carbon/react"
import styles from "./ReminderItem.module.css"
import { NextPage } from "next"
import { useEffect, useState } from "react"

interface ReminderItemType {
  name: string,
  resource: string,
  resetSignal: number
}
const ReminderItem: NextPage<ReminderItemType> = ({ name, resource, resetSignal }) => {
  const [toggled, setToggled] = useState(false)

  const handleTileClick = (event: React.MouseEvent<HTMLElement>) => {
    setToggled(!toggled)
  }

  useEffect(() => {
    setToggled(false)
  }, [resetSignal])

  return (
    <Tile className={`${styles.root} ${toggled ? styles.toggled : styles.untoggled}`} onClick={handleTileClick}>
      <div className={styles.resourceContainer}>
        {resource}
      </div>
      <div className={styles.nameContainer}>
        {name}
      </div>
    </Tile>
  )
}

export default ReminderItem