interface BadgeProps {
  children: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  borderRadius?: string;
}

const Badge: React.FC<BadgeProps> = ({
  children,
  backgroundColor = '#e2e8f0',
  textColor = '#1a202c',
  borderRadius = '0.375rem',
}) => {
  return (
    <span
      style={{
        backgroundColor,
        color: textColor,
        fontWeight: 700,
        borderRadius,
        padding: '0.25rem 0.75rem',
        display: 'inline-block',
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
      }}
    >
      {children}
    </span>
  );
};

export default Badge;
