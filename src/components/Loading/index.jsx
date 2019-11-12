import React from 'react';
import PropTypes from 'prop-types';

const Loading = ({ active, ...props }) => {
    if (active) {
        return (<div { ...props }>Loading...</div>);
    }

    return null;
};

Loading.defaultProps = {
    active: true,
};

Loading.propTypes = {
    active: PropTypes.bool
};

export default Loading;