import styles from "@component/styles/Home.module.css";

export default function ChatBubble({message}) {
    return (
      <div className={styles.chatBubble}>{message}</div>
    )
  }