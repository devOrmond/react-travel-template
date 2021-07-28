import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import './Cards.css'

function CardItem(props) {
    return (
        <Fragment>
            <li className = 'cards__item'>
                <Link className='cards__item__link' to={props.path}>
                    <figure 
                        className="cards__item__pic-wrap"
                        data-category={props.label}
                    >
                        <img 
                            src={props.src} 
                            alt="Travel Img"
                            className = 'cards__item__img'
                        ></img>
                    </figure>
                    <div className='cards__item__info'>
                        <h5 className="cards__item__text">{props.text}</h5>

                    </div>
                </Link>
            </li>
        </Fragment>
    )
}

export default CardItem
