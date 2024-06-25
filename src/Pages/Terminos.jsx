import React from "react";
import { useTranslation } from "react-i18next";


export default function Terminos() {
    const { t, i18n } = useTranslation();
    return (
        <div className="h-auto w-full font-Encode-Sans pt-20 px-10 sm:px-10 md:px-20 lg:px-40 xl:px-40">
            <div className="h-auto w-full py-16">
                <div>
                    <h1 className="text-5xl font-semibold text-bluemunsell">{t("userterms_maintitle")}</h1>
                </div>
                <div className="pt-12">
                    <div className="border-l-4 border-oldgold">
                        <div className="pl-8">
                            <h2 className="text-xl text-bluemunsell">{t("useterms_title")}</h2>
                            <p className="text-lg leading-2">{t("userterms_description_1")}</p>

                            <h2 className="text-xl text-bluemunsell pt-4">{t("userterms_title2")}</h2>
                            <p className="text-lg leading-2">{t("userterms_description_2")}</p>
                            <ul className="text-lg gap-y-4 list-disc list-inside pt-2">
                                <li>{t("userterms_item1")}</li>
                                <li>{t("userterms_item2")}</li>
                                <li>{t("userterms_item3")}</li>
                                <li>{t("userterms_item4")}</li>
                                <li>{t("userterms_item5")}</li>
                                <li>{t("userterms_items6")}</li>
                            </ul>
                            <p className="text-lg leading-2">{t("userterms_subdescription")}</p>

                            <h2 className="text-xl text-bluemunsell pt-4">{t("useterms_title3")}</h2>
                            <p className="text-lg leading-2">{t("userterms_description_3")}</p>

                            <h2 className="text-xl text-bluemunsell pt-4">{t("userterms_title4")}</h2>
                            <p className="text-lg leading-2">{t("userterms_description")}</p>

                            <h2 className="text-xl text-bluemunsell pt-4">{t("userterms_title5")}</h2>
                            <p className="text-lg leading-2">{t("userterms_description_5")}</p>

                            <h2 className="text-xl text-bluemunsell pt-4">{t("userterms_title6")}</h2>
                            <p className="text-lg leading-2">{t("userterms_description_6")}</p>

                            <h2 className="text-xl text-bluemunsell pt-4">{t("userterms_title7")}</h2>
                            <p className="text-lg leading-2">{t("userterms_description_7")}</p>

                            <h2 className="text-xl text-bluemunsell pt-4">{t("userterms_title8")}</h2>
                            <p className="text-lg leading-2">{t("userterms_description_8")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}