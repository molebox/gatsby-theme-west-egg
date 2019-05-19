import * as tslib_1 from "tslib";
import * as React from 'react';
import colors from '../utils/colors';
import { css } from '@emotion/core';
/**
 * A configurable box
 * @param noBackground Choose if the box should have no background color
 * @param noBorder Choose if the box should have no border
 * @param color Supply your own color for the background
 * @param height Optional box height
 * @param width Optional box width
 * @param children The contents of the box
 */
export default (function (_a) {
    var children = _a.children, noBackground = _a.noBackground, noBorder = _a.noBorder, color = _a.color, height = _a.height, width = _a.width, rounded = _a.rounded;
    return (React.createElement("div", { css: css(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n\t\t\t\tposition: relative;\n\t\t\t\theight: ", ";\n\t\t\t\twidth: ", ";\n\t\t\t\tmargin: 0.5rem;\n\t\t\t\t& .boxBottom {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tleft: 4px;\n\t\t\t\t\ttop: 7px;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tbackground-color: ", ";\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tborder-radius: ", "\n\n\t\t\t\t}\n\t\t\t\t& .boxTop {\n\t\t\t\t\tposition: relative;\n\t\t\t\t\tleft: 10px;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tpadding: 24px 34px 22px 34px;\n\t\t\t\t\tborder: 2px ", " ", ";\n\t\t\t\t\tborder-radius: ", "\n\t\t\t\t}\n\t\t\t"], ["\n\t\t\t\tposition: relative;\n\t\t\t\theight: ", ";\n\t\t\t\twidth: ", ";\n\t\t\t\tmargin: 0.5rem;\n\t\t\t\t& .boxBottom {\n\t\t\t\t\tposition: absolute;\n\t\t\t\t\tleft: 4px;\n\t\t\t\t\ttop: 7px;\n\t\t\t\t\twidth: 100%;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tbackground-color: ", ";\n\t\t\t\t\tdisplay: block;\n\t\t\t\t\tborder-radius: ", "\n\n\t\t\t\t}\n\t\t\t\t& .boxTop {\n\t\t\t\t\tposition: relative;\n\t\t\t\t\tleft: 10px;\n\t\t\t\t\ttop: 0;\n\t\t\t\t\theight: 100%;\n\t\t\t\t\tpadding: 24px 34px 22px 34px;\n\t\t\t\t\tborder: 2px ", " ", ";\n\t\t\t\t\tborder-radius: ", "\n\t\t\t\t}\n\t\t\t"])), height ? height : '100%', width ? width : '100%', noBackground ? 'none' : color ? color : undefined, rounded ? '35px' : '0', noBorder ? 'none' : 'solid', colors.primary, rounded ? '35px' : '0') },
        React.createElement("div", { className: "boxBottom" }),
        React.createElement("div", { className: "boxTop" }, children)));
});
var templateObject_1;
//# sourceMappingURL=Box.js.map