'use client';

import { Desc, Hero, Subtitle, Title, Role, Page as Image } from "../shared";
import { IconCode, IconDatabase, IconRocket, IconShield } from "@tabler/icons-react";
import { useTranslation } from "react-i18next";

const Page = () => {

    const { t } = useTranslation("global");

    const roles: { icon: React.ElementType, title: string, desc: string }[] = [
        { icon: IconCode, title: t('pages.products.paycraft.roles.development.title'), desc: t('pages.products.paycraft.roles.development.description') },
        { icon: IconDatabase, title: t('pages.products.paycraft.roles.storage.title'), desc: t('pages.products.paycraft.roles.storage.description') },
        { icon: IconShield, title: t('pages.products.paycraft.roles.security.title'), desc: t('pages.products.paycraft.roles.security.description') },
        { icon: IconRocket, title: t('pages.products.paycraft.roles.deploy.title'), desc: t('pages.products.paycraft.roles.deploy.description') },
    ]

    const images: { src: string, alt: string }[] = [
        { src: '/imgs/products/paycraft/dashboard.webp', alt: t('pages.products.paycraft.images.1.alt') },
        { src: '/imgs/products/paycraft/workforce.webp', alt: t('pages.products.paycraft.images.2.alt') },
        { src: '/imgs/products/paycraft/attendance.webp', alt: t('pages.products.paycraft.images.3.alt') },
        { src: '/imgs/products/paycraft/payroll-runs.webp', alt: t('pages.products.paycraft.images.4.alt') },
    ]

    return (
        <>
            <Hero
                src="/imgs/products/paycraft/dashboard.webp"
                alt={t('pages.products.paycraft.images.hero.alt')}
            />
            <header className="flex flex-col gap-6">
                <Title id="product-title">{t('pages.products.paycraft.title')}</Title>
                <Subtitle>{t('pages.products.paycraft.subtitle')}</Subtitle>
                <Desc id="product-desc">{t('pages.products.paycraft.description')}</Desc>
            </header>
            <ul
                aria-label={t('pages.products.paycraft.roles.ulAriaLabel')}
                className="grid grid-cols-2 gap-6 insm:grid-cols-1"
            >
                {roles.map((role, key) => (
                    <Role
                        key={key}
                        icon={role.icon}
                        title={role.title}
                        desc={role.desc}
                    />
                ))}
            </ul>
            <ul
                aria-label={t('pages.products.paycraft.images.ulAriaLabel')}
                className="flex flex-col gap-3"
            >
                {images.map((img, key) => (
                    <li key={key}>
                        <Image src={img.src} alt={img.alt} />
                    </li>
                ))}
            </ul>
        </>
    )

}

export default Page;
