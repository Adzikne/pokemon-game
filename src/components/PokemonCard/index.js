import { useState } from 'react';
import c from './style.module.css';
import cardBackSide from './assets/card-back-side.jpg';

const PokemonCard = ({ type, values, img, name, id }) => {
    const [isActive, setActive] = useState(false);

    const handleClick = () => {
        setActive(true);
    }
    return (
        <div className={c.root} onClick={handleClick}>
            <div className={`${c.pokemonCard} ${isActive ? c.active : ''}`}>
                <div className={c.cardFront}>
                    <div className={`${c.wrap} ${c.front}`}>
                        <div className={`${c.pokemon} ${c[type]}`}>
                            <div className={c.values}>
                                <div className={`${c.count} ${c.top}`}>{values.top}</div>
                                <div className={`${c.count} ${c.right}`}>{values.right}</div>
                                <div className={`${c.count} ${c.bottom}`}>{values.bottom}</div>
                                <div className={`${c.count} ${c.left}`}>{values.left}</div>
                            </div>
                            <div className={c.imgContainer}>
                                <img src={img} alt={name} />
                            </div>
                            <div className={c.info}>
                                <span className={c.number}>#{id}</span>
                                <h3 className={c.name}>{name}</h3>
                                <small className={c.type}>Type: <span>{type}</span></small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={c.cardBack}>
                    <div className={`${c.wrap} ${c.back}`}>
                        <img src={cardBackSide} alt="Сard Backed" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PokemonCard;

