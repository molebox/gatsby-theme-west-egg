import * as tslib_1 from "tslib";
import * as React from 'react';
import { css } from '@emotion/core';
import colors from '../utils/colors';
export var buttonBorderLeft = css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  left: -2px;\n  bottom: -2px;\n  width: 2px;\n  height: 0;\n"], ["\n  left: -2px;\n  bottom: -2px;\n  width: 2px;\n  height: 0;\n"])));
export var buttonBorderRight = css(templateObject_2 || (templateObject_2 = tslib_1.__makeTemplateObject(["\n  right: -2px;\n  top: -2px;\n  width: 2px;\n  height: 0;\n"], ["\n  right: -2px;\n  top: -2px;\n  width: 2px;\n  height: 0;\n"])));
export var buttonBorderTop = css(templateObject_3 || (templateObject_3 = tslib_1.__makeTemplateObject(["\n  left: -2px;\n  top: -2px;\n  width: 0;\n  height: 2px;\n"], ["\n  left: -2px;\n  top: -2px;\n  width: 0;\n  height: 2px;\n"])));
export var buttonBorderBottom = css(templateObject_4 || (templateObject_4 = tslib_1.__makeTemplateObject(["\n  right: -2px;\n  bottom: -2px;\n  width: 0;\n  height: 2px;\n"], ["\n  right: -2px;\n  bottom: -2px;\n  width: 0;\n  height: 2px;\n"])));
export var buttonDark = css(templateObject_5 || (templateObject_5 = tslib_1.__makeTemplateObject(["\n  & .top {\n    border: 2px solid ", ";\n  }\n  & .top .label {\n    color: ", ";\n  }\n"], ["\n  & .top {\n    border: 2px solid ", ";\n  }\n  & .top .label {\n    color: ", ";\n  }\n"])), colors.secondary, colors.secondary);
export var buttonBorder = css(templateObject_6 || (templateObject_6 = tslib_1.__makeTemplateObject(["\n  position: absolute;\n  background-color: ", ";\n  -webkit-transition: all .25s ease-out;\n  -moz-transition: all .25s ease-out;\n  -o-transition: all .25s ease-out;\n  transition: all .25s ease-out;\n"], ["\n  position: absolute;\n  background-color: ", ";\n  -webkit-transition: all .25s ease-out;\n  -moz-transition: all .25s ease-out;\n  -o-transition: all .25s ease-out;\n  transition: all .25s ease-out;\n"])), colors.primary);
export var button = css(templateObject_7 || (templateObject_7 = tslib_1.__makeTemplateObject(["\ndisplay: inline-block;\ntext-decoration: none;\nposition: relative;\nbackground-color: Transparent;\nborder: none;\ncursor:pointer;\noutline:none;\n\n& .bottom {\n  position: absolute;\n  left: 7px;\n  top: 9px;\n  width: 99%;\n  height: 100%;\n  background-color: ", ";\n  display: block;\n  -webkit-transition: all 0.20s ease-out;\n  -moz-transition: all 0.20s ease-out;\n  -o-transition: all 0.20s ease-out;\n  transition: all 0.20s ease-out;\n}\n\n& .top {\n  position: relative;\n  left: 10px;\n  top: 0;\n  padding: 24px 34px 22px 34px;\n  border: 2px solid ", ";\n}\n\n& .top .label {\n  font-family: Montserrat;\n  font-weight: 700;\n  color: ", ";\n  font-size: 1rem;\n  line-height: 110%;\n  letter-spacing: 2px;\n  text-align: center;\n  // text-transform: uppercase;\n  -webkit-transition: all 0.15s ease-out;\n  -moz-transition: all 0.15s ease-out;\n  -o-transition: all 0.15s ease-out;\n  transition: all 0.15s ease-out;\n}\n&:active:enabled {\n  ", "\n}\n\n&:disabled {\n  opacity: 0.55;\n}\n\n&:hover:enabled .bottom {\n  left: 10px;\n  top: 0;\n  background-color: ", ";\n}\n&:hover:enabled .top .label {\n  color: ", ";\n  cursor: pointer;\n}\n&:hover:enabled\n  .top\n  .", ",\n  &:hover\n  .top\n  .", " {\n  height: calc(100% + 2px);\n  cursor: pointer;\n}\n&:hover:enabled\n  .top\n  .", ",\n  &:hover\n  .top\n  .", " {\n  width: calc(100% + 2px);\n  cursor: pointer;\n}"], ["\ndisplay: inline-block;\ntext-decoration: none;\nposition: relative;\nbackground-color: Transparent;\nborder: none;\ncursor:pointer;\noutline:none;\n\n& .bottom {\n  position: absolute;\n  left: 7px;\n  top: 9px;\n  width: 99%;\n  height: 100%;\n  background-color: ", ";\n  display: block;\n  -webkit-transition: all 0.20s ease-out;\n  -moz-transition: all 0.20s ease-out;\n  -o-transition: all 0.20s ease-out;\n  transition: all 0.20s ease-out;\n}\n\n& .top {\n  position: relative;\n  left: 10px;\n  top: 0;\n  padding: 24px 34px 22px 34px;\n  border: 2px solid ", ";\n}\n\n& .top .label {\n  font-family: Montserrat;\n  font-weight: 700;\n  color: ", ";\n  font-size: 1rem;\n  line-height: 110%;\n  letter-spacing: 2px;\n  text-align: center;\n  // text-transform: uppercase;\n  -webkit-transition: all 0.15s ease-out;\n  -moz-transition: all 0.15s ease-out;\n  -o-transition: all 0.15s ease-out;\n  transition: all 0.15s ease-out;\n}\n&:active:enabled {\n  ", "\n}\n\n&:disabled {\n  opacity: 0.55;\n}\n\n&:hover:enabled .bottom {\n  left: 10px;\n  top: 0;\n  background-color: ", ";\n}\n&:hover:enabled .top .label {\n  color: ", ";\n  cursor: pointer;\n}\n&:hover:enabled\n  .top\n  .", ",\n  &:hover\n  .top\n  .", " {\n  height: calc(100% + 2px);\n  cursor: pointer;\n}\n&:hover:enabled\n  .top\n  .", ",\n  &:hover\n  .top\n  .", " {\n  width: calc(100% + 2px);\n  cursor: pointer;\n}"])), colors.secondary, colors.primary, colors.primary, buttonDark, colors.light, colors.primary, buttonBorderLeft, buttonBorderRight, buttonBorderTop, buttonBorderBottom);
/**
 * A button with an off center foreground shadow
 *
 * The button is built with a natural 1.5rem margin
 *
 * @param text The buttons text
 * @param onClick The onClick event of the button - optional
 */
export default (function (_a) {
    var text = _a.text, onClick = _a.onClick, type = _a.type, disabled = _a.disabled;
    return (React.createElement("div", { css: {
            display: 'flex',
            margin: '1.5rem'
        } },
        React.createElement("button", { disabled: disabled, type: type, "aria-label": text, name: text, onClick: onClick, css: button },
            React.createElement("div", { className: "bottom" }),
            React.createElement("div", { className: "top" },
                React.createElement("div", { className: "label" }, text),
                React.createElement("div", { css: buttonBorder }),
                React.createElement("div", { css: buttonBorderLeft }),
                React.createElement("div", { css: buttonBorder }),
                React.createElement("div", { css: buttonBorderTop }),
                React.createElement("div", { css: buttonBorder }),
                React.createElement("div", { css: buttonBorderRight }),
                React.createElement("div", { css: buttonBorder }),
                React.createElement("div", { css: buttonBorderBottom })))));
});
var templateObject_1, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7;
//# sourceMappingURL=Button.js.map