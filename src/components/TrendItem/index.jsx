import PropTypes from 'prop-types';

export function TrendItem({ category, name, tweetCount }) {
    return (
        <div className='py-3 hover:bg-gray-800 transition duration-200 cursor-pointer'>
            <p className='text-gray-500 text-sm'>{category}</p>
            <p className='font-bold'>{name}</p>
            {tweetCount && <p className='text-gray-500 text-sm'>{tweetCount}</p>}
        </div>
    );
}

TrendItem.propTypes = {
    category: PropTypes.string,
    name: PropTypes.string,
    tweetCount: PropTypes.string
};
