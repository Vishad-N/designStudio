const rooms = [
  {
    key: 'kitchen',
    title: 'Kitchen',
    meta: 'Custom islands · stone · lighting',
    img: 'https://images.unsplash.com/photo-1556912173-46c336c7fd55?auto=format&fit=crop&w=1600&q=80',
  },
  {
    key: 'dining',
    title: 'Dining',
    meta: 'Tables that gather the house',
    img: 'https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1200&q=80',
  },
  {
    key: 'bedroom',
    title: 'Bedroom',
    meta: 'Quiet palettes, layered textiles',
    img: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    key: 'living',
    title: 'Living',
    meta: 'Conversation-first layouts',
    img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80',
  },
]

import { useParallaxOffset } from '../hooks/useParallaxOffset.js'

export default function Spaces() {
  const ref = useParallaxOffset()

  return (
    <section className="spaces" id="spaces" ref={ref}>
      <div className="section-head">
        <div>
          <div className="kicker">Collections</div>
          <h2>Rooms that<br />hold a life.</h2>
        </div>
        <p>A bento of the four spaces we design most — tap any room to enter its material story.</p>
      </div>
      <div className="bento">
        {rooms.map((room) => (
          <a className={`tile ${room.key}`} href={`#${room.key}`} key={room.key}>
            <img src={room.img} alt={room.title} data-parallax="room-img" />
            <div className="veil" />
            <h3>{room.title}</h3>
            <span className="meta">{room.meta}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
