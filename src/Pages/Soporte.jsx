import React, { useState } from "react";
import { Checkmark } from 'react-checkmark';

export default function Soporte() {
    const [submit, setSubmit] = useState(false);
    const [formData, setFormData] = useState({
        nombre: '',
        correo: '',
        titulo: '',
        descripcion: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:5001/submit-data', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            const data = await response.json();
            console.log('Submitted successfully:', data);
            setSubmit(true);
        } catch (error) {
            console.error('Error submitting form:', error);
        }
    }

    return (
        <div className="py-24 h-auto w-full font-Encode-Sans">
            <div className="px-10 sm:px-10 md:px-20 lg:px-40">
                {!submit ? (
                    <div className="flex flex-col items-center">
                        <form onSubmit={handleSubmit}>
                        <div className="py-2 lg:py-10 h-full w-full">
                                <div className="text-center">
                                    <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold">Soporte</h1>
                                    <p className="text-sm lg:text-regular pt-4">Estamos siempre prestos a servir, por favor, llene el formulario</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row w-full justify-between gap-4">
                                <div className="flex flex-col w-full md:w-1/2 ">
                                    <div className="pb-2">
                                        <h1 className="text-xl font-regular">Nombre</h1>
                                    </div>
                                    <div className="h-12">
                                        <input name="nombre" value={formData.nombre} className="p-2 h-full w-full rounded-md shadow-md bg-slate-100" onChange={handleChange} ></input>
                                    </div>
                                </div>

                                <div className="flex flex-col w-full md:w-1/2 ">
                                    <div className="pb-2">
                                        <h1 className="text-xl font-regular">Correo electrónico</h1>
                                    </div>
                                    <div className="h-12">
                                        <input name="correo" value={formData.correo} className="p-2 h-full w-full rounded-md shadow-md bg-slate-100" onChange={handleChange}></input>
                                    </div>
                                </div>
                            </div>

                            <div className="w-full pb-2 pt-4">
                                <h1 className="text-xl font-regular">Título</h1>
                            </div>
                            <div className="w-full h-12">
                                <input name="titulo" value={formData.titulo} className="p-2 h-full w-full rounded-md shadow-md bg-slate-100" onChange={handleChange}></input>
                            </div>

                            <div className="w-full pb-2 pt-4">
                                <h1 className="text-xl font-regular">Descripción</h1>
                            </div>
                            <div className="w-full  h-auto">
                                <textarea value={formData.descripcion} name="descripcion" className="p-2 h-32 w-full resize-y  rounded-md shadow-md bg-slate-100" onChange={handleChange}></textarea>
                            </div>


                            <div className=" pt-10">
                                <button type="submit" className="bg-bluemunsell hover:bg-cyan-600 text-white rounded-md h-12 w-full">Enviar</button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="h-auto w-full py-24">
                    <div className="h-full w-full flex ">
                        <div className="flex flex-col h-full w-full items-center justify-center">
                            <div className="py-12">
                                <Checkmark size='160px' />
                            </div>
                            <div className="w-1/2 h-1/2 p-6 flex justify-center items-center ">
                                <h1 className="text-3xl md:text-6xl font-bold text-bluemunsell">
                                    ORD00128720
                                </h1>
                            </div>
                            <div className="py-16">
                                <h1 className="text-xl">Su ticket ha sido generado exitosamente!</h1>
                            </div>
                        </div>
                    </div>
                </div>
                )}
            </div>
        </div>
    );
}


// import React, { useState } from "react";

// export default function Soporte() {
//     const [formData, setFormData] = useState({
//         message: '',  // Assuming 'message' is a field you want to send
//     });

//     const handleChange = (e) => {
//         setFormData({ ...formData, [e.target.name]: e.target.value });
//     }

//     const handleSubmit = async (e) => {
//         e.preventDefault();
//         try {
//             const response = await fetch('http://localhost:5001/submit-data', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify(formData),
//             });
//             const data = await response.json();  // Convert the response data into JSON
//             console.log('Submitted successfully:', data);  // Log the response data to the console
//         } catch (error) {
//             console.error('Error submitting form:', error);
//         }
//     }

//     return (
//         <div className="py-24 h-auto w-full font-Encode-Sans">
//             <div className="px-10 sm:px-10 md:px-20 lg:px-40">
//                 <form onSubmit={handleSubmit}>
//                     <input
//                         type="text"
//                         name="message"
//                         value={formData.message}
//                         onChange={handleChange}
//                         placeholder="Enter your message"
//                     />
//                     <button type="submit">Submit</button>
//                 </form>
//             </div>
//         </div>
//     );
// }

