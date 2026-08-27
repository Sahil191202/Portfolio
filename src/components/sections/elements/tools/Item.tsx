import { clsx } from "clsx";

export const Item = (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li
        className={clsx(
            'group min-w-0',
            'p-2 insm:p-1 rounded-xl',
            'transition-colors duration-333',
            'hover:bg-primary',
            'focus-within:bg-primary',
        )}
        {...props} />
)