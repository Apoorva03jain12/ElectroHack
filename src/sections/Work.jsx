function WorkSection() {
    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-800">How Smart Connect Works</h2>
                <p className="mt-4 text-lg text-center text-gray-600">A streamlined process for connecting startups with investors.</p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                        <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full mb-4">1</div>
                        <h3 className="text-xl font-semibold text-gray-800">Create Your Profile</h3>
                        <p className="mt-2 text-gray-600 text-center">Investors and startups begin by creating detailed profiles that highlight their goals, interests, and project specifics.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                        <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full mb-4">2</div>
                        <h3 className="text-xl font-semibold text-gray-800">Explore Opportunities</h3>
                        <p className="mt-2 text-gray-600 text-center">Users can browse through a variety of startup projects or investor profiles to find suitable matches based on their preferences.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                        <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full mb-4">3</div>
                        <h3 className="text-xl font-semibold text-gray-800">Connect and Communicate</h3>
                        <p className="mt-2 text-gray-600 text-center">Once a match is found, users can initiate secure conversations to discuss potential collaborations and funding opportunities.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                        <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full mb-4">4</div>
                        <h3 className="text-xl font-semibold text-gray-800">Analyze and Decide</h3>
                        <p className="mt-2 text-gray-600 text-center">Investors can analyze startup performance metrics and analytics provided on the platform to make informed decisions.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                        <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full mb-4">5</div>
                        <h3 className="text-xl font-semibold text-gray-800">Secure Funding</h3>
                        <p className="mt-2 text-gray-600 text-center">Upon reaching an agreement, the funding process is initiated through our secure platform, ensuring safety for both parties.</p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
                        <div className="w-12 h-12 flex items-center justify-center bg-blue-600 text-white rounded-full mb-4">6</div>
                        <h3 className="text-xl font-semibold text-gray-800">Continuous Support</h3>
                        <p className="mt-2 text-gray-600 text-center">ElectroHack provides ongoing support and resources to both investors and startups throughout their journey.</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default WorkSection;