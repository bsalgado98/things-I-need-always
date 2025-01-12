import { Tile } from "@carbon/react"
import styles from "./ReminderItem.module.css"
import { NextPage } from "next"

interface ReminderItemType {
  name: string,
  resource: string
}
const ReminderItem: NextPage<ReminderItemType> = ({ name, resource }) => {
  return (
    <Tile className={styles.root}>
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