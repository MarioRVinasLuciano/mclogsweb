import React , { useState } from "react";
import { Checkmark } from 'react-checkmark';
import { useTranslation } from "react-i18next";

export default function FormsSoporte () {
    const { t, i18n } = useTranslation();
    const [submit, setSubmit] = useState(false);
    const [codigo, setCodigo] = useState("");
    const [formData, setFormData] = useState({
        title: '',
        customer_name: '',
        customer_email: '',
        description: ''
    });
    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors({ ...errors, [e.target.name]: '' }); // Clear error on change
    }

    const validateForm = () => {
        let formErrors = {};
        if (!formData.customer_name) formErrors.customer_name = "El nombre es requerido.";
        if (!formData.customer_email) {
            formErrors.customer_email = "El correo electrónico es requerido.";
        } else if (!/\S+@\S+\.\S+/.test(formData.customer_email)) {
            formErrors.customer_email = "El correo electrónico no es válido.";
        }
        if (!formData.title) formErrors.title = "El título es requerido.";
        if (!formData.description) formErrors.description = "La descripción es requerida.";
        return formErrors;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formErrors = validateForm();
        if (Object.keys(formErrors).length > 0) {
            setErrors(formErrors);
            return;
        }
        try {
            const response = await fetch('https://api-connect.mclogs.com/client/tickets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }

            const data = await response.json();
            setCodigo(data);
            console.log('Enviado Exitosamente', data);
            setSubmit(true);
        } catch (error) {
            console.error('error', error);
            alert('Hubo un problema subiendo tus datos');
        }
    }
    return (
        <div className="py-24 h-auto w-full font-Encode-Sans">
            <div className="px-10 sm:px-10 md:px-20 lg:px-30 xl:px-30 2xl:px-40">
                {!submit ? (
                    <div className="flex flex-col items-center">
                        <form className="w-full md:w-2/3" onSubmit={handleSubmit} noValidate>
                            <div className="py-2 lg:py-10 h-full w-full">
                                <div className="text-center">
                                    <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold">{t("create_a_ticket")}</h1>
                                    <p className="text-sm lg:text-regular pt-4">{t("create_a_ticket_subtitle")}</p>
                                </div>
                            </div>
                            <div className="flex flex-col md:flex-row w-full justify-between gap-4 pt-4">
                                <div className="flex flex-col w-full md:w-1/2">
                                    <div className="pb-2">
                                        <h1 className="text-xl font-regular">{t("form_field_1")}</h1>
                                    </div>
                                    <div className={`h-12`}>
                                        <input
                                            name="customer_name"
                                            type="text"
                                            value={formData.customer_name}
                                            className={`p-2 h-full w-full rounded-md shadow-md bg-slate-100 ${errors.customer_name ? 'border border-red-500' : ''}`}
                                            onChange={handleChange}
                                            placeholder={t("form_placeholder1")}
                                        />
                                    </div>
                                    {errors.customer_name && <p className="text-red-500 text-xs mt-1">{errors.customer_name}</p>}
                                </div>

                                <div className="flex flex-col w-full md:w-1/2">
                                    <div className="pb-2">
                                        <h1 className="text-xl font-regular">{t("form_field_2")}</h1>
                                    </div>
                                    <div className={`h-12`}>
                                        <input
                                            type="email"
                                            name="customer_email"
                                            value={formData.customer_email}
                                            className={`p-2 h-full w-full rounded-md shadow-md bg-slate-100 ${errors.customer_email ? 'border border-red-500' : ''}`}
                                            onChange={handleChange}
                                            placeholder={t("form_placeholder2")}
                                        />
                                    </div>
                                    {errors.customer_email && <p className="text-red-500 text-xs mt-1">{errors.customer_email}</p>}
                                </div>
                            </div>

                            <div className="w-full pb-2 pt-4">
                                <h1 className="text-xl font-regular">{t("form_field_3")}</h1>
                            </div>
                            <div className={`w-full h-12`}>
                                <input
                                    name="title"
                                    type="text"
                                    value={formData.title}
                                    className={`p-2 h-full w-full rounded-md shadow-md bg-slate-100 ${errors.customer_email ? 'border border-red-500' : ''}`}
                                    onChange={handleChange}
                                    placeholder={t("form_placeholder3")}
                                />
                            </div>
                            {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title}</p>}

                            <div className="w-full pb-2 pt-4">
                                <h1 className="text-xl font-regular">{t("form_field_4")}</h1>
                            </div>
                            <div className={`w-full h-auto`}>
                                <textarea
                                    value={formData.description}
                                    name="description"
                                    className={`p-2 h-32 w-full resize-y rounded-md shadow-md bg-slate-100 ${errors.description ? 'border border-red-500' : ''}`}
                                    onChange={handleChange}
                                    placeholder={t("form_placeholder4")}
                                ></textarea>
                            </div>
                            {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description}</p>}

                            <div className="pt-5 xl:pt-10">
                                <button type="submit" className="bg-bluemunsell hover:bg-cyan-600 text-white rounded-md h-12 w-full">{t("form_btn")}</button>
                            </div>
                        </form>
                    </div>
                ) : (
                    <div className="h-auto w-full py-24">
                        <div className="h-full w-full flex">
                            <div className="flex flex-col h-full w-full items-center justify-center">
                                <div className="py-12">
                                    <Checkmark size='160px' />
                                </div>
                                <div className="w-1/2 h-1/2 p-6 flex justify-center items-center">
                                    <h1 className="text-3xl md:text-6xl font-bold text-bluemunsell">
                                        {codigo.code}
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
    )
}