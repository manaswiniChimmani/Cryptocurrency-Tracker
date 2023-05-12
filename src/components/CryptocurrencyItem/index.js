// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currencyData} = props
  const {id, currencyName, usdValue, euroValue, currencyLogo} = currencyData

  return (
    <li className="item-container">
      <div className="p">
        <img src={currencyLogo} alt={currencyName} className="logo" />
        <p className="n1">{currencyName}</p>
      </div>
      <p className="n">{usdValue}</p>

      <p className="n">{euroValue}</p>
    </li>
  )
}
export default CryptocurrencyItem
