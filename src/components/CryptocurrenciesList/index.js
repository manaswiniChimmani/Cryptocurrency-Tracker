// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {cryptoCurrenciesData: [], isLoading: true}

  componentDidMount() {
    this.cryptoCurrenciesData()
  }

  cryptoCurrenciesData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const formattedData = data.map(each => ({
      currencyName: each.currency_name,
      usdValue: each.usd_value,
      euroValue: each.euro_value,
      id: each.id,
      currencyLogo: each.currency_logo,
    }))
    this.setState({cryptoCurrenciesData: formattedData, isLoading: false})
  }

  render() {
    const {cryptoCurrenciesData} = this.state
    const {isLoading} = this.state

    return (
      <div className="container">
        <h1 className="h1">Cryptocurrency Tracker</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
          className="img"
        />
        <div className="crypto-container">
          <div className="card">
            <p className="p1">CoinType</p>
            <p className="p2">USD</p>
            <p className="p2">EURO</p>
          </div>
          {isLoading ? (
            <div data-testid="loader">
              <Loader type="Rings" color="#ffffff" height={80} width={80} />
            </div>
          ) : (
            <ul>
              {cryptoCurrenciesData.map(item => (
                <CryptocurrencyItem currencyData={item} key={item.id} />
              ))}
            </ul>
          )}
        </div>
      </div>
    )
  }
}
export default CryptocurrenciesList
