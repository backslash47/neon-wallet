// @flow
import React from 'react'

import Table from '../../components/Table'
import Tooltip from '../../components/Tooltip'

import { MODAL_TYPES, DEPRECATED_TOKENS } from '../../core/constants'
import { formatBalance } from '../../core/formatters'
import { isZero } from '../../core/math'

import InfoOutline from 'react-icons/lib/md/info-outline'

import styles from './TokenBalances.scss'

type Props = {
  tokenBalances: Array<TokenBalanceType>,
  showModal: Function,
}

const TokenBalances = ({ tokenBalances, showModal }: Props) => (
  <Table className={styles.table}>
    <thead>
      <tr>
        <th>Token</th>
        <th>Balance</th>
      </tr>
    </thead>
    <tbody>
      {tokenBalances.map((token: TokenBalanceType, index: number) => {
        const { balance, symbol, scriptHash } = token
        const formattedBalance = formatBalance(symbol, balance)
        const formattedBalanceDisplay = formatBalance(symbol, balance, true)
        const deprecated = DEPRECATED_TOKENS.includes(scriptHash)
        return (
          <tr key={`${symbol}${index}`}>
            <td onClick={() => showModal(MODAL_TYPES.TOKEN_INFO, { token })}>
              <span className={styles.symbol}><InfoOutline className={styles.symbolIcon} />{symbol}</span>
            </td>
            <td>
              <Tooltip
                title={formattedBalance}
                disabled={isZero(balance)}>
                {formattedBalanceDisplay} {deprecated && <span className={styles.deprecated}>(deprecated)</span>}
              </Tooltip>
            </td>
          </tr>
        )
      })}
    </tbody>
  </Table>
)

export default TokenBalances
