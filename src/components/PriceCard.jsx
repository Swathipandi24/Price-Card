import PropTypes from 'prop-types';
import './PriceCard.css';

const PriceCard = ({ plan }) => {
    return (
        <div className="price-card">
            <h2>{plan.name}</h2>
            <h3>{plan.price}</h3>
            <hr />
            <ul>
                {plan.features.map((feature, index) => (
                    <li key={index} className={feature.available ? 'available' : 'unavailable'}>
                        {feature.feature}
                    </li>
                ))}
            </ul>
            <button>BUTTON</button>
        </div>
    );
};

PriceCard.propTypes = {
    plan: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.string.isRequired,
        features: PropTypes.arrayOf(
            PropTypes.shape({
                feature: PropTypes.string.isRequired,
                available: PropTypes.bool.isRequired,
            })
        ).isRequired,
    }).isRequired,
};

export default PriceCard;
