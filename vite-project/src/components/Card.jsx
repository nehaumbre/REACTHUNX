
const Card = ({children, style}) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", borderRadius: "5px", boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", ...style }}>
      {children}
    </div>
  )
}

export default Card
// The Card component provides the container/design, while the parent decides what content goes inside it.
// Instead of creating a separate card component for every piece of content, you create one Card design and put different content inside it.