"use client";
import { useState, type FormEvent, type ChangeEvent } from "react";
import { useReCaptcha } from "next-recaptcha-v3";
import Image from "next/image";
import Link from "next/link";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const { executeRecaptcha } = useReCaptcha();
    const [submitted, setSubmitted] = useState(false);
    const [error, setError] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Generate ReCaptcha token
        const token = await executeRecaptcha("form");


        // Attach generated token to your API requests and validate it on the server
        const res = await fetch(
            "https://contact-forms-serverless.adopstar.dev/api/sma-roofing",
            {
                method: "post",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    data: formData,
                    token,
                }),
            },
        );

        if (res.status !== 200) {
            setSubmitted(false);
            setError(true);
            return;
        }

        setFormData({ name: "", email: "", message: "" });
        setSubmitted(true);
    };
    return (
        <div
            id="contact-us"
            className="relative flex flex-col items-center justify-center bg-white pb-8 border-[#154992] border-2 m-6 rounded-md w-fit sm:w-fit md:max-w-5xl px-1 mx-2"
        >
            <div className="px-6 py-4 sm:p-4">
                <div className="mx-auto max-w-xl lg:max-w-none">
                    <div className="text-center">
                        <h1 className="text-4xl secondary primary-blue font-semibold tracking-tight text-gray-900 p-10">Get in touch</h1>
                        <p className="primary text-black text-xl">Contact us today for all your roofing and building needs in Cullompton and surrounding areas.</p>
                    </div>
                </div>
            </div>

            <div className="px-0 py-4 sm:p-4 grid grid-cols-1 md:grid-cols-2">
                <div className="px-0 py-4 sm:p-2 grid">
                    <div className="mx-auto max-w-xl lg:max-w-none">
                        <div className="text-center">
                            <Image className="inline"
                                width={40}
                                height={40}
                                alt="Location"
                                src="/images/icon-location.png"
                            />
                            <p className="text-base sm:text-xl primary primary-blue font-semibold tracking-tight p-2">5 Dukes Mead,<br />Cullompton, EX15 1QT</p>
                        </div>
                    </div>
                    <div className="mx-auto max-w-xl lg:max-w-none">
                        <div className="text-center">
                            <Image className="inline"
                                width={40}
                                height={40}
                                alt="Email"
                                src="/images/icon-email.png"
                            />
                            <p className="text-base sm:text-xl primary primary-blue font-semibold tracking-tight p-2"><Link href="mailto:info@smabuildingandroofing.co.uk">info@smabuildingandroofing.co.uk</Link></p>
                        </div>
                    </div>
                    <div className="mx-auto max-w-xl lg:max-w-none">
                        <div className="text-center">
                            <Image className="inline"
                                width={40}
                                height={40}
                                alt="Phone"
                                src="/images/icon-phone.png"
                            />
                            <p className="text-base sm:text-xl primary primary-blue font-semibold tracking-tight p-2"><Link href="tel:07308 655572">07308 655572</Link></p>
                        </div>
                    </div>
                </div>
                <div className="py-4 sm:p-4 grid">
                    <form
                        className="z-10 flex flex-col primary sm:text-xl md:text-lg lg:text-lg mt-6"
                        onSubmit={handleSubmit}
                    >
                        <input
                            className="bg-[#154992]/25 px-2 pb-8 pt-4 placeholder-black"
                            type="text"
                            id="name"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />
                        <input
                            className="my-6 bg-[#154992]/25 px-2 pb-8 pt-4 placeholder-black"
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                        <textarea
                            id="message"
                            name="message"
                            cols={30}
                            rows={5}
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            className="bg-[#154992]/25 px-2 pt-4 placeholder-black"
                        ></textarea>
                        <button className="group mx-auto mt-6 flex w-40 flex-row-reverse items-center justify-center secondary gap-2 bg-[#154992] py-2 text-white md:w-60 md:gap-8  md:text-2xl">
                            <span className="font-bold uppercase group-hover:text-highlight-yellow">
                                Send
                            </span>
                        </button>

                        {submitted && (
                            <p className="pt-8 text-center text-green-500">
                                Message sent successfully.
                            </p>
                        )}
                        {!submitted && error && (
                            <p className="pt-8 text-center text-red-500">
                                Error, message not sent, please try again.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </div>
    );
}