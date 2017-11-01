import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

/* Action creators */
import { customPriceChange } from '../redux/actions'

const DisplayPrice = (props) => (
    <table className={props.recipe ? 'display-price display-price-recipe' : 'display-price'}>
        <thead>
            <tr>
                {!props.recipe && (
                    <th className='display-price-ingredient-name'>
                        Name
                    </th>)
                }
                <th>M</th>
                <th>Avg Bo</th>
                <th>Min Bo</th>
                <th>C</th>
            </tr>
        </thead>
        <tbody>
            <tr>
            {!props.recipe && (
                    <td className='display-price-ingredient-name'>
                        {props.ingredient.amount + 'x' + props.ingredient.name}
                    </td>)
                }
                <td>
                    {Math.round(props.ingredient.medianBuyout) / 10000 || 'NaN'}
                </td>
                <td>
                    {Math.round(props.ingredient.avgBuyout) / 10000 || 'NaN'}
                </td>
                <td>
                    {Math.round(props.ingredient.minBuyout) / 10000 || 'NaN'}
                </td>
                <td>
                <input
                    type="number"
                    value={(isNaN(props.ingredient.customPrice / 10000) || props.ingredient.customPrice === '') ? '' : props.ingredient.customPrice / 10000}
                    onChange={(event) =>  props.customPriceChange({
                        ingredientName: props.ingredient.name,
                        customPrice: event.target.value === '' ? '' : event.target.value * 10000
                    })}
                />
                </td>
            </tr>
        </tbody>

        
    </table>

)

const mapDispatchToProps = (dispatch) => bindActionCreators({ customPriceChange }, dispatch)

export default connect(null, mapDispatchToProps)(DisplayPrice)