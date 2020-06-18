'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * This Component shows a Modal Box with default close button.
 * The background will be grayed out till user closes the window.
 *
 */

module.exports = _react2.default.createClass({
    displayName: 'exports',

    propTypes: {
        /**
         * Title of the modal
         */
        title: _react2.default.PropTypes.oneOfType([_react2.default.PropTypes.object, _react2.default.PropTypes.string]),
        /**
         * Callback function which will be called after user clicks close button.
         */
        onClose: _react2.default.PropTypes.func,
        /**
         * Size of the modal
         */
        size: _react2.default.PropTypes.oneOf(['small', 'medium', 'large', 'full']),
        /**
         * CSS class for any style overrides
         */
        className: _react2.default.PropTypes.string,
        /**
         * CSS style for any style overrides
         */
        style: _react2.default.PropTypes.object,
        /**
         * Setting show to true will render the modal and false will return null. ( equivalant of hiding modal)
         */
        show: _react2.default.PropTypes.bool

    },
    getDefaultProps: function getDefaultProps() {
        return {
            show: false,
            size: 'medium',
            className: '',
            style: { display: 'block' }
        };
    },
    render: function render() {
        if (!this.props.show) {
            return null;
        }

        var dialogSizeClassMap = {
            'small': 'modal-sm',
            'medium': '',
            'full': 'modal-full',
            'large': 'modal-lg'
        };

        var closeStyle = { float: 'right', fontSize: '16px', cursor: 'pointer' };
        return _react2.default.createElement(
            'div',
            { className: "modal fade in " + this.props.className, style: this.props.style },
            _react2.default.createElement(
                'div',
                { className: "modal-dialog " + dialogSizeClassMap[this.props.size] },
                _react2.default.createElement(
                    'div',
                    { className: 'modal-content' },
                    _react2.default.createElement(
                        'div',
                        { className: 'modal-header' },
                        _react2.default.createElement(
                            'span',
                            { onClick: this.props.onClose, style: closeStyle },
                            '\u2715'
                        ),
                        _react2.default.createElement(
                            'h4',
                            { className: 'modal-title' },
                            this.props.title
                        )
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'modal-body' },
                        this.props.children
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'modal-footer' },
                        this.props.footer
                    )
                )
            )
        );
    }
});