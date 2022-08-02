import React from 'react';
import FABmanager from '../FABmanager/FABmanager';
import './CardClientManager.css';

var CardClientManager = function CardClientManager() {
    return React.createElement(
        'div',
        null,
        React.createElement(
            'div',
            { className: 'cardClient' },
            React.createElement(
                'div',
                { className: 'grid-card' },
                React.createElement(
                    'div',
                    { id: 'name' },
                    'BENNAN manal'
                ),
                React.createElement(
                    'div',
                    { id: 'id' },
                    React.createElement(
                        'span',
                        null,
                        '12345665'
                    )
                ),
                React.createElement('div', { id: 'other' }),
                React.createElement(
                    'div',
                    { id: 'address' },
                    'address'
                ),
                React.createElement(
                    'div',
                    { id: 'tel' },
                    'tel'
                ),
                React.createElement(
                    'div',
                    { id: 'fab' },
                    React.createElement(FABmanager, null)
                ),
                React.createElement(
                    'select',
                    { id: 'reviewAction' },
                    React.createElement(
                        'option',
                        { className: 'noOrder' },
                        'No order'
                    ),
                    React.createElement(
                        'option',
                        { className: 'orderDone' },
                        'Order done'
                    ),
                    React.createElement(
                        'option',
                        { className: 'enCours' },
                        'En cours'
                    )
                )
            )
        )
    );
};

export default CardClientManager;