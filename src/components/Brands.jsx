import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function Brands() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    return (
        <motion.div
            ref={ref}
            style={{
                transform: isInView ? "translateY(0px)" : "translateY(200px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
            }}
            className="bg-white py-24 sm:py-32"
        >
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <h2 className="text-center text-lg/8 font-semibold text-gray-900">
                    Trusted by the world's most innovative teams
                </h2>
                <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    {["Transistor", "Reform", "Tuple", "SavvyCal", "Statamic"].map((brand, index) => (
                        <img
                            key={brand}
                            alt={brand}
                            src={`https://tailwindui.com/plus-assets/img/logos/158x48/${brand.toLowerCase()}-logo-gray-900.svg`}
                            width={158}
                            height={48}
                            className={`col-span-2 max-h-12 w-full object-contain ${
                                index === 3 ? 'sm:col-start-2' : ''
                            } ${index === 4 ? 'col-start-2 sm:col-start-auto' : ''} lg:col-span-1`}
                        />
                    ))}
                </div>
            </div>
        </motion.div>
    )
}
