'use client';

import { Article, Desc, Figure, Item, Title as Titl } from "./elements/tools";
import { Section, Strong, Title } from "./elements";
import { useTranslation } from "react-i18next";
import Link from "next/link";

export const Tools = (props: React.HTMLAttributes<HTMLElement>) => {

    const { t } = useTranslation("global");

    return (
        <Section
            id="tools"
            aria-labelledby="tools-title"
            className="gap-12"
            {...props}
        >
            <header>
                <Title id="tools-title">
                    {t('pages.main.sections.tools.title')} <Strong>{t('pages.main.sections.tools.strong')}</Strong>
                </Title>
            </header>
            <ul className="grid grid-cols-2 gap-x-3 gap-y-6 insm:gap-x-1">
                <Item>
                    <Link
                        href="https://nodejs.org/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-labelledby="nodejs-title"
                        aria-describedby="nodejs-desc"
                        className="outline-none"
                    >
                        <Article>
                            <Figure figure="/svgs/tools/Node.svg" />
                            <div>
                                <Titl id="nodejs-title">{t('pages.main.sections.tools.items.nodejs.name')}</Titl>
                                <Desc id="nodejs-desc">{t('pages.main.sections.tools.items.nodejs.description')}</Desc>
                            </div>
                        </Article>
                    </Link>
                </Item>
                <Item>
                    <Link
                        href="https://expressjs.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-labelledby="express-title"
                        aria-describedby="express-desc"
                        className="outline-none"
                    >
                        <Article>
                            <Figure figure="/svgs/tools/express.svg" />
                            <div>
                                <Titl id="express-title">{t('pages.main.sections.tools.items.express.name')}</Titl>
                                <Desc id="express-desc">{t('pages.main.sections.tools.items.express.description')}</Desc>
                            </div>
                        </Article>
                    </Link>
                </Item>
                <Item>
                    <Link
                        href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-labelledby="javascript-title"
                        aria-describedby="javascript-desc"
                        className="outline-none"
                    >
                        <Article>
                            <Figure figure="/svgs/tools/javascript.svg" />
                            <div>
                                <Titl id="javascript-title">{t('pages.main.sections.tools.items.javascript.name')}</Titl>
                                <Desc id="javascript-desc">{t('pages.main.sections.tools.items.javascript.description')}</Desc>
                            </div>
                        </Article>
                    </Link>
                </Item>
                <Item>
                    <Link
                        href="https://www.typescriptlang.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-labelledby="typescript-title"
                        aria-describedby="typescript-desc"
                        className="outline-none"
                    >
                        <Article>
                            <Figure figure="/svgs/tools/typescript-original.svg" />
                            <div>
                                <Titl id="typescript-title">{t('pages.main.sections.tools.items.typescript.name')}</Titl>
                                <Desc id="typescript-desc">{t('pages.main.sections.tools.items.typescript.description')}</Desc>
                            </div>
                        </Article>
                    </Link>
                </Item>
                <Item>
                    <Link
                        href="https://react.dev"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-labelledby="react-title"
                        aria-describedby="react-desc"
                        className="outline-none"
                    >
                        <Article>
                            <Figure figure="/svgs/tools/react-original.svg" />
                            <div>
                                <Titl id="react-title">{t('pages.main.sections.tools.items.reactjs.name')}</Titl>
                                <Desc id="react-desc">{t('pages.main.sections.tools.items.reactjs.description')}</Desc>
                            </div>
                        </Article>
                    </Link>
                </Item>
                <Item>
                    <Link
                        href="https://nextjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-labelledby="next-title"
                        aria-describedby="next-desc"
                        className="outline-none"
                    >
                        <Article>
                            <Figure figure="/svgs/tools/nextjs-original.svg" />
                            <div>
                                <Titl id="next-title">{t('pages.main.sections.tools.items.nextjs.name')}</Titl>
                                <Desc id="next-desc">{t('pages.main.sections.tools.items.nextjs.description')}</Desc>
                            </div>
                        </Article>
                    </Link>
                </Item>
                <Item>
                    <Link
                        href="https://www.mongodb.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-labelledby="mongodb-title"
                        aria-describedby="mongodb-desc"
                        className="outline-none"
                    >
                        <Article>
                            <Figure figure="/svgs/tools/MongoDB.svg" />
                            <div>
                                <Titl id="mongodb-title">{t('pages.main.sections.tools.items.mongodb.name')}</Titl>
                                <Desc id="mongodb-desc">{t('pages.main.sections.tools.items.mongodb.description')}</Desc>
                            </div>
                        </Article>
                    </Link>
                </Item>
                  <Item>
                    <Link
                        href="https://www.mysql.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-labelledby="mysql-title"
                        aria-describedby="mysql-desc"
                        className="outline-none"
                    >
                        <Article>
                            <Figure figure="/svgs/tools/mysql.svg" />
                            <div>
                                <Titl id="mysql-title">{t('pages.main.sections.tools.items.mysql.name')}</Titl>
                                <Desc id="mysql-desc">{t('pages.main.sections.tools.items.mysql.description')}</Desc>
                            </div>
                        </Article>
                    </Link>
                </Item>
                  <Item>
                    <Link
                        href="https://www.docker.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-labelledby="docker-title"
                        aria-describedby="docker-desc"
                        className="outline-none"
                    >
                        <Article>
                            <Figure figure="/svgs/tools/docker-original.svg" />
                            <div>
                                <Titl id="docker-title">{t('pages.main.sections.tools.items.docker.name')}</Titl>
                                <Desc id="docker-desc">{t('pages.main.sections.tools.items.docker.description')}</Desc>
                            </div>
                        </Article>
                    </Link>
                </Item>
                <Item>
                    <Link
                        href="https://redis.io/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-labelledby="redis-title"
                        aria-describedby="redis-desc"
                        className="outline-none"
                    >
                        <Article>
                            <Figure figure="/svgs/tools/redis.svg" />
                            <div>
                                <Titl id="redis-title">{t('pages.main.sections.tools.items.redis.name')}</Titl>
                                <Desc id="redis-desc">{t('pages.main.sections.tools.items.redis.description')}</Desc>
                            </div>
                        </Article>
                    </Link>
                </Item>
                <Item>
                    <Link
                        href="https://www.hostinger.com/in"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-labelledby="hostinger-title"
                        aria-describedby="hostinger-desc"
                        className="outline-none"
                    >
                        <Article>
                            <Figure figure="/svgs/tools/hostinger.svg" />
                            <div>
                                <Titl id="hostinger-title">{t('pages.main.sections.tools.items.hostinger.name')}</Titl>
                                <Desc id="hostinger-desc">{t('pages.main.sections.tools.items.hostinger.description')}</Desc>
                            </div>
                        </Article>
                    </Link>
                </Item>
                <Item>
                    <Link
                        href="https://vercel.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-labelledby="vercel-title"
                        aria-describedby="vercel-desc"
                        className="outline-none"
                    >
                        <Article>
                            <Figure figure="/svgs/tools/vercel-original.svg" />
                            <div>
                                <Titl id="vercel-title">{t('pages.main.sections.tools.items.vercel.name')}</Titl>
                                <Desc id="vercel-desc">{t('pages.main.sections.tools.items.vercel.description')}</Desc>
                            </div>
                        </Article>
                    </Link>
                </Item>
            </ul>
        </Section>
    )

}