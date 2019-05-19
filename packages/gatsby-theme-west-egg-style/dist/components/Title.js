import * as tslib_1 from "tslib";
import * as React from 'react';
import colors from '../utils/colors';
import { css } from '@emotion/core';
/**
 * A configurable title
 * @param fontSize Optional font size - defaults to 3rem
 * @param fontWeight Optional font weight (300,400,400i,700) - defaults to 300
 * @param children The contents of the title
 */
export default (function (_a) {
    var fontSize = _a.fontSize, fontWeight = _a.fontWeight, children = _a.children;
    return (React.createElement("div", { css: css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\t\t\tfont-family: Montserrat;\n\t\t\tfont-weight: ", ";\n\t\t\tline-height: 110%;\n\t\t\tfont-size: ", ";\n\t\t\tletter-spacing: 2px;\n\t\t\tmargin: 0 0 12px 0;\n\t\t\tpadding: 0;\n\t\t\tcolor: ", ";\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\tword-wrap: break-word;\n\t\t"], ["\n\t\t\tfont-family: Montserrat;\n\t\t\tfont-weight: ", ";\n\t\t\tline-height: 110%;\n\t\t\tfont-size: ", ";\n\t\t\tletter-spacing: 2px;\n\t\t\tmargin: 0 0 12px 0;\n\t\t\tpadding: 0;\n\t\t\tcolor: ", ";\n\t\t\tdisplay: flex;\n\t\t\talign-items: center;\n\t\t\tjustify-content: center;\n\t\t\tword-wrap: break-word;\n\t\t"])), fontWeight ? fontWeight : '300', fontSize ? fontSize : '3rem', colors.primary) }, children));
});
var templateObject_1;
//# sourceMappingURL=Title.js.map