import { clsx } from "clsx";

export const Product = (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li
        className={clsx(
            'group overflow-hidden min-w-0',
            'relative w-fit max-w-full rounded-xl',
            'dark:bg-light/5 bg-dark/5',
            'transition-colors duration-333',
        )}
        {...props} />
)