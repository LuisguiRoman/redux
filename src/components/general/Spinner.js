import React from 'react';
import '../../css/spinner.css';

export const Spinner = (props) => (
    <div className="spinner-contanier">
        <div className="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    </div>
);