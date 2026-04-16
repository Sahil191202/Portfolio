import { Item } from "./elements";

export const LanguageContent = (props: React.HTMLAttributes<HTMLDivElement>) => {

    return (
        <div
            className="p-1 flex flex-col gap-1"
            {...props}
        >
            <Item lng="en" />
            <Item lng="de" />
            <Item lng="hi" />
            <Item lng="es" />
            <Item lng="gu" />
            <Item lng="fr" />
            <Item lng="mr" />

        </div>
    )

}