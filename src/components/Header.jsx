import PropTypes from "prop-types";

export const Header = ({text, bgColor, textColor}) => {
    const headerStyles =
        {
            backgroundColor: bgColor,
            color: textColor
        };
    return (
        <header style={headerStyles}>
            <div className="header-container">
                <h2>{text}</h2>
            </div>
        </header>
    )
}

Header.defaultProps = {
    text: 'Fallback Title',
    bgColor: 'rgba(0,0,0,.4)',
    textColor: '#ff6e95'
};

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string
}
