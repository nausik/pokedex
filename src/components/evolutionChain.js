import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { TiArrowRight } from 'react-icons/ti'

import Pokemon from './pokemon'

import '../style/evolutionChain.css'

class EvolutionChain extends PureComponent {
  renderEvolutionChain = evolutionChainData => {
    return evolutionChainData.map((evolutionLink, i) => {
      return (
        <div key={evolutionLink[0].id} className="row">
          <Pokemon pokemon={evolutionLink[0]} type="small" />
          {evolutionLink[1].length > 0 ? (
            <div key={evolutionLink[0].name} className="row">
              {' '}
              <TiArrowRight className="margin-auto" />{' '}
              {this.renderEvolutionChain(evolutionLink[1])}{' '}
            </div>
          ) : (
            ''
          )}
        </div>
      )
    })
  }

  render() {
    const { evolutionChainData } = this.props

    return (
      <div className="evolution-chain">
        {this.renderEvolutionChain(evolutionChainData)}
      </div>
    )
  }
}

EvolutionChain.propTypes = {
  evolutionChainData: PropTypes.array.isRequired
}

export default EvolutionChain
