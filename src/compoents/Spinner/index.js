import React from 'react';
import { connect } from 'react-redux';

const Spinner = ({ isLoading }) => {
    if (!isLoading) return null;

    return (
        <div>
            Loading...
        </div>
    )
}

const mapStoreToProps = (store) => {
    return {
        isLoading: store.spinnerReducer.isLoading
    }
};

export default connect(mapStoreToProps, null)(Spinner);