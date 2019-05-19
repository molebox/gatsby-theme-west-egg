import * as React from 'react';
var breakpoints = {
    smallMobile: '300',
    largeMobile: '480',
    small: '500',
    medium: '768',
    large: '1130',
};
/**
 * Hook to provide media query to css elements.
 * Pass in the breakpoint and get back the media query
 * @param breakpoint A breakpoint represented as a string value
 */
export function useBreakPoint(breakpoint) {
    var _a = React.useState(undefined), bp = _a[0], setBreakpoint = _a[1];
    React.useEffect(function () {
        var bpArray = Object.keys(breakpoints).map(function (key) { return [key, breakpoints[key]]; });
        var result = bpArray.reduce(function (acc, _a) {
            var name = _a[0], size = _a[1];
            if (breakpoint === name) {
                return acc.concat(["@media (max-width: " + size + "px)"]);
            }
            return acc;
        }, [])[0];
        setBreakpoint(result);
    }, [breakpoint]);
    return bp;
}
//# sourceMappingURL=hooks.js.map