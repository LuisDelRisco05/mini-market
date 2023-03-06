

export const Stock = ({ position, unit, size, mobile }) => {
  return (
    <div 
        className={`stock ${size} ${mobile} `}
        style={{bottom: position }}
    >
        <p className="stock-text">{unit}</p>
    </div>
  )
}
