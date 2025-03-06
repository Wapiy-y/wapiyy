import { Link as LinkIcon, MoveLeft } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Project = () => (
    <>
        <div className="flex flex-col items-center min-h-screen px-6 py-8 sm:px-0 bg-gray-950 text-white">
            <div className="flex flex-col gap-6 max-w-md w-full">

                <div className="px-6 flex justify-start ">
                    <Link href="/" className="flex items-center gap-2 text-sm text-gray-400 hover:underline">
                        <MoveLeft className="w-3 h-3" /> Home
                    </Link>
                </div>

                {/* Personal Project */}
                <div className="px-6">
                    <p className="text-[16px] font-semibold text-gray-400 pb-2">Project</p>

                    <div className="grid grid-cols-1 gap-6">
                        {/* First Project */}
                        <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden group">
                            <div className="overflow-hidden">
                                <Image src="/collabFamily.png"
                                     alt="CollabFamily"
                                     width={200}
                                     height={200}
                                     className="w-full h-48 object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                                />
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-center">
                                    <a className="flex items-center text-[16px] font-semibold text-white gap-1" href="https://collabfamily.onrender.com" target="_blank">
                                        CollabFamily <LinkIcon className="w-3 h-3" />
                                    </a>
                                    <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded">Live</span>
                                </div>
                                <p className="mt-2 text-[16px] text-gray-400 flex gap-2">
                                    <span className="text-[12px]">ReactJs</span>
                                    <span className="text-[12px]">ExpressJs</span>
                                    <span className="text-[12px]">MongoDB</span>
                                    <span className="text-[12px]">Render</span>
                                </p>
                            </div>
                        </div>

                        {/* Second Project */}
                        <div className="bg-gray-800 border border-gray-700 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition duration-300 group">
                            <div className="overflow-hidden">
                                <Image src="/Qrder.png"
                                     alt="Qrder"
                                     width={200}
                                     height={200}
                                     className="w-full h-48 object-cover transform transition-transform duration-300 ease-in-out group-hover:scale-110"
                                />
                            </div>
                            <div className="p-4">
                                <div className="flex justify-between items-center">
                                    <h3 className="text-[16px] font-semibold text-white">Qrder</h3>
                                    <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">Progress</span>
                                </div>
                                <p className="mt-2 text-[16px] text-gray-400 flex gap-2">
                                    <span className="text-[12px]">NextJS</span>
                                    <span className="text-[12px]">PostgreSQL</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </>
);

export default Project;
