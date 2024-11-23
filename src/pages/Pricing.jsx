function PricingSection() {
    return (
        <section className="py-16 bg-gray-100">
            <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl font-bold text-center text-gray-800">Pricing Plans</h2>
                <p className="mt-4 text-lg text-center text-gray-600">Choose a plan that fits your needs.</p>

                <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800">Basic Plan</h3>
                        <p className="mt-2 text-gray-600">₹549/month</p>
                        <ul className="mt-4 space-y-2">
                            <li className="text-gray-500">Access to basic features</li>
                            <li className="text-gray-500">Profile creation</li>
                            <li className="text-gray-500">Limited messaging</li>
                        </ul>
                        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Select Plan</button>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800">Pro Plan</h3>
                        <p className="mt-2 text-gray-600">₹999/month</p>
                        <ul className="mt-4 space-y-2">
                            <li className="text-gray-500">All Basic features</li>
                            <li className="text-gray-500">Unlimited messaging</li>
                            <li className="text-gray-500">Access to premium resources</li>
                        </ul>
                        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Select Plan</button>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-semibold text-gray-800">Enterprise Plan</h3>
                        <p className="mt-2 text-gray-600">₹1,999/month</p>
                        <ul className="mt-4 space-y-2">
                            <li className="text-gray-500">All Pro features</li>
                            <li className="text-gray-500">Dedicated account manager</li>
                            <li className="text-gray-500">Custom solutions and support</li>
                        </ul>
                        <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">Select Plan</button>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default PricingSection;