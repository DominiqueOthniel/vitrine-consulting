'use client';

import React from 'react';
import { outlinePaths } from './iconPaths';

type IconVariant = 'outline' | 'solid';

interface IconProps {
  name: string;
  variant?: IconVariant;
  size?: number;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  [key: string]: unknown;
}

function Icon({
  name,
  variant = 'outline',
  size = 24,
  className = '',
  onClick,
  disabled = false,
  ...props
}: IconProps) {
  const d = outlinePaths[name] ?? outlinePaths.QuestionMarkCircleIcon;
  const strokeWidth = variant === 'solid' ? 2.5 : 1.5;

  const svgProps = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    className: [
      'inline-block flex-shrink-0',
      disabled ? 'opacity-50 cursor-not-allowed' : '',
      onClick && !disabled ? 'cursor-pointer hover:opacity-80' : '',
      className,
    ]
      .filter(Boolean)
      .join(' '),
    onClick: disabled ? undefined : onClick,
    ...props,
  };

  return (
    <svg {...svgProps}>
      <path d={d} />
    </svg>
  );
}

export default Icon;
