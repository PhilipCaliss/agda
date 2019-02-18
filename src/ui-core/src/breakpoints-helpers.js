import bp from './breakpoints';

export const isTiny = width => width < bp.sm;
export const isSmall = width => width >= bp.sm;
export const isMedium = width => width >= bp.md;
export const isLarge = width => width >= bp.lg;