type IconProps = { size?: number; className?: string };

export function GithubIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M12 2C6.48 2 2 6.58 2 12.2c0 4.49 2.87 8.3 6.84 9.65.5.1.68-.22.68-.49 0-.24-.01-.87-.01-1.71-2.78.62-3.37-1.37-3.37-1.37-.45-1.18-1.11-1.5-1.11-1.5-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.63-1.37-2.22-.26-4.56-1.15-4.56-5.11 0-1.13.39-2.05 1.03-2.77-.1-.26-.45-1.3.1-2.72 0 0 .84-.28 2.75 1.06a9.3 9.3 0 0 1 5 0c1.91-1.34 2.75-1.06 2.75-1.06.55 1.42.2 2.46.1 2.72.64.72 1.03 1.64 1.03 2.77 0 3.97-2.34 4.85-4.57 5.1.36.32.68.95.68 1.92 0 1.39-.01 2.51-.01 2.85 0 .27.18.6.69.49A10.03 10.03 0 0 0 22 12.2C22 6.58 17.52 2 12 2Z" />
    </svg>
  );
}

export function LinkedinIcon({ size = 18, className }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.94 5a2 2 0 1 1-4-.02 2 2 0 0 1 4 .02ZM3.28 8.63h3.6V21h-3.6V8.63ZM9.4 8.63h3.45v1.7h.05c.48-.9 1.66-1.86 3.42-1.86 3.66 0 4.33 2.4 4.33 5.53V21h-3.6v-6.14c0-1.46-.03-3.35-2.04-3.35-2.05 0-2.36 1.6-2.36 3.25V21H9.4V8.63Z" />
    </svg>
  );
}
