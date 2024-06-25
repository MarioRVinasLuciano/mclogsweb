import React from "react";
import { useTranslation } from "react-i18next";


export default function SeguridadyPrivacidad() {
    const { t, i18n } = useTranslation();
    return (
        <div className="h-auto w-full font-Encode-Sans pt-20 px-10 sm:px-10 md:px-20 lg:px-40 xl:px-40">
            <div className="h-auto w-full py-16">
                <div>
                    <h1 className="text-6xl text-bluemunsell font-semibold">{t("security_policies")}</h1>
                </div>
                <div className="pt-12">
                    <div className="border-l-4 border-oldgold">
                    <p className="text-xl leading-loose pl-4">{t("security_policies_description")}</p>
                    </div>
                </div>
            </div>
            <div className="h-auto w-full py-16">
                <div>
                    <h1 className="text-6xl text-bluemunsell font-semibold">{t("privacy_policies")}</h1>
                </div>
                <div className="pt-12">
                <p className="text-2xl">{t("privacy_policies_description1")}</p>
                    <div className="border-l-4 border-oldgold text-justify mt-6">

                        <ul className="list-disc list-outside text-xl pl-10 text-start">
                            <li className="">{t("privacy_policies_item1")}</li>
                            <li className="pt-6">{t("privacy_policies_item2")}</li>
                            <li className="pt-6">{t("privacy_policies_item3")}</li>
                            <li className="pt-6">{t("privacy_policies_item4")}</li>
                            <li className="pt-6">{t("privacy_policies_item5")}</li>
                            <li className="pt-6">{t("privacy_policies_item6")}</li>
                        </ul>

                        <p className="pl-6 pt-4 text-xl">{t("privacy_policies_item7")}</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}