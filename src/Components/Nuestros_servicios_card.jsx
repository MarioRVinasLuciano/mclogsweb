import React from "react";
import { useTranslation } from "react-i18next";

export default function NuestrosServicios(props) {
    const { t, i18n } = useTranslation();

    return (
        <a className={props.espacio} href={props.link}>
            <div className="w-auto">
                <img className={props.claseImagen} src={props.imagen} alt="" />
            </div>
            <div className="w-auto py-4">
                <h1 className="text-xl">{t(props.titulo)}</h1>
            </div>
            <div className="w-auto relative group">
                <p className={props.claselink}>{t("know_more")}</p>
                <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-cyan-500 group-hover:w-3/6"></span>
                <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-cyan-500 group-hover:w-3/6"></span>
            </div>
        </a>
    );
}
