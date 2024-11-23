import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
};

function FeaturesSection() {
    return (
        <motion.section
        variants={sectionVariants}
            initial='hidden'
            animate='visible'
            transition={{ duration: 0.5 }}
        className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800">Features of ElectroHack</h2>
            <p className="mt-4 text-lg text-center text-gray-600">Explore the powerful features that connect investors and startups.</p>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
                <Link to={"/"} className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition" href="#">
                    <div className="p-5">
                        <h3 className="group-hover:text-blue-600 font-semibold text-gray-800">Investor Profiles</h3>
                        <p className="text-sm text-gray-500">Create detailed profiles showcasing your investment interests and past projects.</p>
                    </div>
                </Link>

                <Link to={"/"} className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition" href="#">
                    <div className="p-5">
                        <h3 className="group-hover:text-blue-600 font-semibold text-gray-800">Startup Listings</h3>
                        <p className="text-sm text-gray-500">Startups can list their projects with comprehensive details for investors to find opportunities.</p>
                    </div>
                </Link>

                <Link to={"/"} className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition" href="#">
                    <div className="p-5">
                        <h3 className="group-hover:text-blue-600 font-semibold text-gray-800">Advanced Matching Algorithm</h3>
                        <p className="text-sm text-gray-500">Our intelligent matching system connects investors with startups based on shared interests.</p>
                    </div>
                </Link>
                <Link to={"/"} className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition" href="#">
                    <div className="p-5">
                        <h3 className="group-hover:text-blue-600 font-semibold text-gray-800">Secure Messaging</h3>
                        <p className="text-sm text-gray-500">Communicate securely with potential partners through our in-platform messaging system.</p>
                    </div>
                </Link>

                <Link to={"/"} className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition" href="#">
                    <div className="p-5">
                        <h3 className="group-hover:text-blue-600 font-semibold text-gray-800">Resource Center</h3>
                        <p className="text-sm text-gray-500">Access valuable resources, guides, and insights to navigate the funding landscape.</p>
                    </div>
                </Link>

                <Link to={"/"} className="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition" href="#">
                    <div className="p-5">
                        <h3 className="group-hover:text-blue-600 font-semibold text-gray-800">Performance Analytics</h3>
                        <p className="text-sm text-gray-500">Track the performance of investments and startup growth through our analytics dashboard.</p>
                    </div>
                </Link>
            </div>
        </motion.section>
    );
}

export default FeaturesSection;