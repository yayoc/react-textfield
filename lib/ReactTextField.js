"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ReactTextField = function (_React$Component) {
  _inherits(ReactTextField, _React$Component);

  function ReactTextField(props) {
    _classCallCheck(this, ReactTextField);

    var _this = _possibleConstructorReturn(this, (ReactTextField.__proto__ || Object.getPrototypeOf(ReactTextField)).call(this, props));

    _this.state = {

      typing: false,

      message: null,

      valid: false
    };
    return _this;
  }

  _createClass(ReactTextField, [{
    key: "onChange",
    value: function onChange(e) {
      var value = e.target.value;
      this.validate(value);
      if (this.state.valid && this.props.successMessage) {
        this.setState({ message: this.props.successMessage });
      }
    }
  }, {
    key: "validate",
    value: function validate(value) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this.props.errors[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var err = _step.value;

          if (!err.validator(value)) {
            this.setState({ message: err.message, valid: false });
            break;
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      this.setState({ valid: true });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        null,
        _react2.default.createElement("input", { type: "text", onChange: this.onChange }),
        this.state.message ? _react2.default.createElement(
          "span",
          null,
          this.state.message
        ) : false
      );
    }
  }]);

  return ReactTextField;
}(_react2.default.Component);

exports.default = ReactTextField;


ReactTextField.propTypes = {

  // Success message when validator passed.
  successMessage: _react.PropTypes.string,

  // One of Error object includes validater and error message.
  errors: _react.PropTypes.array

};