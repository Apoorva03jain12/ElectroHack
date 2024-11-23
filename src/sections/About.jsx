function AboutSection() {
    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-800">About Us</h2>
                <p className="mt-4 text-lg text-center text-gray-600">
                    At ElectroHack, we are dedicated to bridging the gap between investors and innovative startups. Our platform is designed to facilitate meaningful connections that foster growth and success.
                </p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800">Our Mission</h3>
                        <p className="mt-2 text-gray-600">
                            We aim to empower startups by providing them with the resources and connections they need to thrive. Our mission is to create a supportive ecosystem where innovative ideas can flourish through strategic investments.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800">Our Vision</h3>
                        <p className="mt-2 text-gray-600">
                            We envision a world where every startup has access to the funding and mentorship required to bring their ideas to life. By connecting passionate investors with visionary entrepreneurs, we strive to drive innovation and economic growth.
                        </p>
                    </div>
                    </div>
                    </div>
        </section>
    );
}

export default AboutSection;