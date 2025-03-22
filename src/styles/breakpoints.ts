type Breakpoint =
    | 'phone'
    | 'tablet'
    | 'tabletLarge'
    | 'desktop'
    | 'desktopWide';

export const breakpoints: Record<Breakpoint, number> = {
    phone: 320,
    tablet: 768,
    tabletLarge: 990,
    desktop: 1200,
    desktopWide: 1400,
};
