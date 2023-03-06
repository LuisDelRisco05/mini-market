

export const Stock = ({ position, unit, size }) => {
  return (
    <div 
        className={`stock ${size}`}
        style={{bottom: position }}
    >
        <p className="stock-text">{unit}</p>
    </div>
  )
}
