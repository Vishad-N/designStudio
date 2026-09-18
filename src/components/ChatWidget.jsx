export default function ChatWidget({ visible }) {
  return (
    <div className={`chat ${visible ? 'chat-visible' : 'chat-hidden'}`}>
      <div className="chat-card">
        <strong>We&apos;re Online!</strong>
        <span>Live chat with our designer.</span>
      </div>
      <button className="chat-fab">Free consult</button>
    </div>
  )
}
