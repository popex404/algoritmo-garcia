import { createContext, useContext, useState } from 'react'

/* ============================================================
   Moneda CLP / USD  —  reemplaza el initPriceToggle() de app.js

   En vanilla: el switch parseaba el innerHTML con regex en cada click.
   En React: la moneda es estado (Context) y cada precio se DERIVA del dato.
   Misma regla de conversion que el original:
     - precios reales del cliente -> /1000 + 2   (fee = true)   ej: $26.000 -> $28
     - valores de mercado / totales / ahorros -> /1000  (fee = false)
   ============================================================ */

const CurrencyContext = createContext({ currency: 'clp', setCurrency: () => {} })

export function CurrencyProvider({ children }) {
  const [currency, setCurrency] = useState('clp')
  return (
    <CurrencyContext.Provider value={{ currency, setCurrency }}>
      {children}
    </CurrencyContext.Provider>
  )
}

export function useCurrency() {
  return useContext(CurrencyContext)
}

export function convertPrice(text, currency, fee = true) {
  if (currency !== 'usd') return text
  return String(text)
    .replace(/\$(\d{1,3}(?:\.\d{3})+)/g, (_, n) =>
      '$' + (Math.round(parseInt(n.replace(/\./g, ''), 10) / 1000) + (fee ? 2 : 0)))
    .replace(/CLP/g, 'USD')
}

/* Renderiza un precio ya convertido a la moneda activa (devuelve texto plano). */
export function Price({ children, fee = true }) {
  const { currency } = useCurrency()
  return convertPrice(children, currency, fee)
}

/* El switch CLP / USD (mismo markup que .price-toggle del original). */
export function PriceToggle() {
  const { currency, setCurrency } = useCurrency()
  return (
    <div className="price-toggle-wrap">
      <div className="price-toggle" role="group" aria-label="Cambiar moneda de precios">
        <button
          type="button"
          className={'price-toggle-btn' + (currency === 'clp' ? ' active' : '')}
          aria-pressed={currency === 'clp'}
          onClick={() => setCurrency('clp')}
        >CLP</button>
        <button
          type="button"
          className={'price-toggle-btn' + (currency === 'usd' ? ' active' : '')}
          aria-pressed={currency === 'usd'}
          onClick={() => setCurrency('usd')}
        >USD</button>
      </div>
    </div>
  )
}
