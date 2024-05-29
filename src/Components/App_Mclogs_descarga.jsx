import React from "react";

//Logos
import apple from "../Icons/Apple.png"; // Logo de apple
import android from "../Icons/Android.png"; // Logo de android

//Video
import App_descarga from "../Videos/App_Mclogs.mp4";

export default function App_Mclogs(){
    return(
        <div className="h-auto w-full bg-zinc-100 ">
        <div className="flex flex-col items-center justify-center py-16">
            <div className="flex flex-col h-44 items-center justify-center">
                <h1 className="text-6xl text-bluemunsell font-bold">McLogs</h1>
                <p className="pt-4 text-md font-bold">Descarga nuestra app en tu dispositivo</p>
                <div className="flex flex-row items-center justify-center gap-x-10">
                    <div>
                    <a href='https://apps.apple.com/do/app/mclogs/id1504701375'>
                            <div className="pt-4 py-2 gap-x-2 flex flex-row">
                                <img className="h-6 w-6" src={apple} alt="Apple Store" />
                                <p className="text-xl">Apple Store</p>
                            </div>
                        </a>
                    </div>
                    <div>
                    <a href='https://play.google.com/store/apps/details?id=com.mclogs.www'>
                            <div className="pt-4 py-2 gap-x-2 flex flex-row">
                                <img className=" h-6 w-6" src={android} alt="Google Play" />
                                <p className="flex text-xl">Google Play</p>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full h-auto flex justify-center">
                <video className="w-full h-full lg:w-2/3 xl:w-2/3 lg:h-2/3 xl:h-2/3 object-center lg:object-cover  " src={App_descarga} loop autoPlay muted></video>
            </div>
        </div>
    </div>
    )
}