const QuantityMinus = ({
    width = 15,
    height = 15,
    color = '#21272A',
}: React.ComponentPropsWithoutRef<'svg'>) => (
    <svg
        width={width}
        height={height}
        viewBox="0 0 15 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M2.8125 7.5C2.8125 7.24112 3.02237 7.03125 3.28125 7.03125H11.7188C11.9776 7.03125 12.1875 7.24112 12.1875 7.5C12.1875 7.75888 11.9776 7.96875 11.7188 7.96875H3.28125C3.02237 7.96875 2.8125 7.75888 2.8125 7.5Z"
            fill={color}
        />
    </svg>
);

export default QuantityMinus;
