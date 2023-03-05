

export const Stock = ({ position, unit }) => {
  return (
    <div 
        className="stock"
        style={{bottom: position }}
    >
        <p className="stock-text">{unit}</p>
    </div>
  )
}
