import PropTypes from "prop-types";

export const Card = ({children, reverse}) => {
    return (
        <div
            className={`card-container ${reverse && 'reverse'}`}
            style={{
                color: reverse ? 'white' : ''
            }}>
            {children}
        </div>
    )
}

Card.defaultProps = {
    reverse: false
}

Card.propTypes = {
    children: PropTypes.node.isRequired,
    reverse: PropTypes.bool
}
