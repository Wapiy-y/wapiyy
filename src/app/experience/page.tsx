import {Timeline} from "antd";
import { MoveLeft } from 'lucide-react';
import Link from "next/link";

const Experience = () => (
    <>
        <div className="flex flex-col items-center min-h-screen px-6 py-8 sm:px-0 bg-gray-950 text-white">
            <div className="flex flex-col gap-6 max-w-md w-full">

                <div className="px-6 flex justify-start ">
                    <Link href="/" className="flex items-center gap-2 text-sm text-gray-400 hover:underline">
                        <MoveLeft className="w-3 h-3"/> Home
                    </Link>
                </div>

                {/* Experience Section */}
                <div className="px-6 pt-4">
                    <p className="text-[16px] font-semibold text-gray-400 pb-2">Experience</p>
                    <Timeline
                        items={[
                            {
                                children: (
                                    <>
                                        <p className="text-[16px] text-white">AGTIV Consulting</p>
                                        <p className="text-[15px] text-white">Fullstack Developer Intern</p>
                                        <p className="text-[14px] text-white">Jan 2024 - Present</p>
                                        <p className="text-[14px] text-gray-400">
                                            • Developed search, report, and administration modules for an internal Management of Change (MOC) system for a leading client in oil and gas sector, utilizing ASP.NET and SharePoint.
                                        </p>
                                        <p className="text-[14px] text-gray-400">
                                            • Designed and built a migration console tool, successfully transferring 100+ legacy manual records into the new MOC system, significantly reducing data migration time.
                                        </p>
                                        <p className="text-[14px] text-gray-400">
                                            • Contributed to the migration of the Electronic Document Management System (EDMS) to the upgraded Electronic Document Control System (EDCS) using ASP.NET 9, ensuring system compatibility and long-term support.
                                        </p>
                                        <p className="text-[14px] text-gray-400">
                                            • Assisted in debugging, refactoring, and implementing new features in the upgraded EDCS system, enhancing functionality and user experience.
                                        </p>

                                    </>
                                ),
                            },
                            {
                                children: (
                                    <>
                                        <p className="text-[16px] text-white">Universiti Teknologi MARA</p>
                                        <p className="text-[15px] text-white">Full-time Student</p>
                                        <p className="text-[14px] text-white">Oct 2021 - March 2025</p>
                                        <p className="text-[14px] text-gray-400">
                                            Pursuing a degree in Computer Science (Netcentric Computing), gaining expertise in web technologies, networking, database design, and cybersecurity.
                                        </p>
                                    </>
                                ),
                            },
                        ]}
                    />
                </div>
            </div>
        </div>

    </>
)

export default Experience;