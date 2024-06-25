import React from "react";
import { useTranslation } from "react-i18next";



import imagen_background from "../Images/Soporte/soporte3.webp";

export default function CentrodeAyuda() {
    const { t, i18n } = useTranslation();


    return (
        <div className="h-auto w-full font-Encode-Sans pb-12 pt-16 ">
            <div className="flex justify-center items-center bg-top w-full h-44 md:h-72 px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40" style={{ backgroundImage: `url(${imagen_background})`, backgroundSize: 'cover', backgroundPosition: "top" }}>
                <div className="flex flex-col items-center  justify-between w-full gap-y-8">
                    <h1 className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-semibold ">{t("Howcanwehelp")}</h1>
                    {/* <div className="relative flex w-2/3 justify-center items-center">
                        <input
                            className="h-12 w-full rounded-md border-gray-20 border-2 p-2"
                            placeholder={t("search")}
                        />
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute right-0  w-8 h-8 text-gray-400 pr-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div> */}
                </div>
            </div>
            <div className="h-auto py-20 w-full px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40">
                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-10 justify-items-center">

                    <a href="/#/soporte" className="flex flex-col justify-center items-center border-2 h-56 border-slate-200 rounded-md hover:bg-slate-100 w-full">
                        <div className="h-16 w-16 my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                                <path fill="#038EA3ff" d="M64 64C28.7 64 0 92.7 0 128v64c0 8.8 7.4 15.7 15.7 18.6C34.5 217.1 48 235 48 256s-13.5 38.9-32.3 45.4C7.4 304.3 0 311.2 0 320v64c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V320c0-8.8-7.4-15.7-15.7-18.6C541.5 294.9 528 277 528 256s13.5-38.9 32.3-45.4c8.3-2.9 15.7-9.8 15.7-18.6V128c0-35.3-28.7-64-64-64H64zm64 112l0 160c0 8.8 7.2 16 16 16H432c8.8 0 16-7.2 16-16V176c0-8.8-7.2-16-16-16H144c-8.8 0-16 7.2-16 16zM96 160c0-17.7 14.3-32 32-32H448c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H128c-17.7 0-32-14.3-32-32V160z" />
                            </svg>
                        </div>
                        <div className="text-center">
                            <h1 className="text-bluemunsell font-bold text-2xl ">{t("support")}</h1>
                            <p className="text-gray-400 p-4">{t("support_description")}</p>
                        </div>
                    </a>

                    <a href="tel:18095653265" className="flex flex-col justify-center items-center border-2 h-56 border-slate-200 rounded-md p-4 hover:bg-slate-100 w-full">
                        <div className="h-16 w-16 my-2">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path fill="#A6A403ff" d="M256 48C141.1 48 48 141.1 48 256v40c0 13.3-10.7 24-24 24s-24-10.7-24-24V256C0 114.6 114.6 0 256 0S512 114.6 512 256V400.1c0 48.6-39.4 88-88.1 88L313.6 488c-8.3 14.3-23.8 24-41.6 24H240c-26.5 0-48-21.5-48-48s21.5-48 48-48h32c17.8 0 33.3 9.7 41.6 24l110.4 .1c22.1 0 40-17.9 40-40V256c0-114.9-93.1-208-208-208zM144 208h16c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H144c-35.3 0-64-28.7-64-64V272c0-35.3 28.7-64 64-64zm224 0c35.3 0 64 28.7 64 64v48c0 35.3-28.7 64-64 64H352c-17.7 0-32-14.3-32-32V240c0-17.7 14.3-32 32-32h16z" />
                            </svg>
                        </div>
                        <div className="text-center">
                            <h1 className="text-oldgold font-bold text-2xl ">{t("call_us")}</h1>
                            <p className="text-gray-400 p-4">{t("call_us_description")}</p>
                        </div>

                    </a>

                    <a href="/#/pregunasfrecuentes" className="flex flex-col justify-center items-center border-2 h-56 border-slate-200 rounded-md p-4 hover:bg-slate-100 w-full">
                        <div className="h-16 w-16 my-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="#038EA3ff" d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm169.8-90.7c7.9-22.3 29.1-37.3 52.8-37.3h58.3c34.9 0 63.1 28.3 63.1 63.1c0 22.6-12.1 43.5-31.7 54.8L280 264.4c-.2 13-10.9 23.6-24 23.6c-13.3 0-24-10.7-24-24V250.5c0-8.6 4.6-16.5 12.1-20.8l44.3-25.4c4.7-2.7 7.6-7.7 7.6-13.1c0-8.4-6.8-15.1-15.1-15.1H222.6c-3.4 0-6.4 2.1-7.5 5.3l-.4 1.2c-4.4 12.5-18.2 19-30.6 14.6s-19-18.2-14.6-30.6l.4-1.2zM224 352a32 32 0 1 1 64 0 32 32 0 1 1 -64 0z"/>
                        </svg>
                        </div>
                        <div className="text-center">
                            <h1 className="text-bluemunsell font-bold text-2xl ">{t("frequent_questions")}</h1>
                            <p className="text-gray-400 pt-2">{t("frequent_questions_description")}</p>
                        </div>

                    </a>


                    <a href="https://wa.me/18095653265" className="flex flex-col justify-center items-center border-2 h-56 border-slate-200 rounded-md p-4 hover:bg-slate-100 w-full">
                        <div className="h-16 w-16 my-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <path fill="#A6A403ff" d="M284 224.8a34.1 34.1 0 1 0 34.3 34.1A34.2 34.2 0 0 0 284 224.8zm-110.5 0a34.1 34.1 0 1 0 34.3 34.1A34.2 34.2 0 0 0 173.6 224.8zm220.9 0a34.1 34.1 0 1 0 34.3 34.1A34.2 34.2 0 0 0 394.5 224.8zm153.8-55.3c-15.5-24.2-37.3-45.6-64.7-63.6-52.9-34.8-122.4-54-195.7-54a406 406 0 0 0 -72 6.4 238.5 238.5 0 0 0 -49.5-36.6C99.7-11.7 40.9 .7 11.1 11.4A14.3 14.3 0 0 0 5.6 34.8C26.5 56.5 61.2 99.3 52.7 138.3c-33.1 33.9-51.1 74.8-51.1 117.3 0 43.4 18 84.2 51.1 118.1 8.5 39-26.2 81.8-47.1 103.5a14.3 14.3 0 0 0 5.6 23.3c29.7 10.7 88.5 23.1 155.3-10.2a238.7 238.7 0 0 0 49.5-36.6A406 406 0 0 0 288 460.1c73.3 0 142.8-19.2 195.7-54 27.4-18 49.1-39.4 64.7-63.6 17.3-26.9 26.1-55.9 26.1-86.1C574.4 225.4 565.6 196.4 548.3 169.5zM285 409.9a345.7 345.7 0 0 1 -89.4-11.5l-20.1 19.4a184.4 184.4 0 0 1 -37.1 27.6 145.8 145.8 0 0 1 -52.5 14.9c1-1.8 1.9-3.6 2.8-5.4q30.3-55.7 16.3-100.1c-33-26-52.8-59.2-52.8-95.4 0-83.1 104.3-150.5 232.8-150.5s232.9 67.4 232.9 150.5C517.9 342.5 413.6 409.9 285 409.9z"/>
                        </svg>
                        </div>
                        <div className="text-center">
                            <h1 className="text-oldgold font-bold text-2xl ">{t("write_to_us")}</h1>
                            <p className="text-gray-400 pt-2">{t("write_to_us_description")}</p>
                        </div>

                    </a>
                </div>
            </div>
        </div>
    )
}
