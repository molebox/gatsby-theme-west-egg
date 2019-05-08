import * as React from 'react';

interface BreakPoints {
	smallMobile: string;
	largeMobile: string;
	small: string;
	medium: string;
	large: string;
	[key: string]: string;
}

const breakpoints: BreakPoints = {
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
export function useBreakPoint(breakpoint: string) {
	const [bp, setBreakpoint] = React.useState<string | undefined>(undefined);

	React.useEffect(() => {
		const bpArray = Object.keys(breakpoints).map((key) => [key, breakpoints[key]]);

		const [result] = bpArray.reduce((acc, [name, size]) => {
			if (breakpoint === name) {
				return [...acc, `@media (max-width: ${size}px)`];
			}
			return acc;
		}, []);
		setBreakpoint(result);
	}, [breakpoint]);

	return bp;
}
