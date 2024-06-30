import PropTypes from 'prop-types';
import PriceCard from './PriceCard';
import './PriceCardList.css';

const PriceCardList = ({ plans }) => {
    return (
        <div className="price-card-list-container">
        <div className="price-card-list">
            {plans.map((plan, index) => (
                <PriceCard key={index} plan={plan} />
            ))}
        </div>
        </div>
    );
};

PriceCardList.propTypes = {
    plans: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            price: PropTypes.string.isRequired,
            features: PropTypes.arrayOf(
                PropTypes.shape({
                    feature: PropTypes.string.isRequired,
                    available: PropTypes.bool.isRequired,
                })
            ).isRequired,
        })
    ).isRequired,
};

export default PriceCardList;
