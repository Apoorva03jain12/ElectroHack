import AboutSection from "../sections/About";
import FeaturesSection from "../sections/Features";
import WorkSection from "../sections/Work";

function Home() {
    return (
        <div className="bg-gray-100 min-h-screen">
<div class="relative overflow-hidden">
  <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
    <div class="max-w-2xl text-center mx-auto">
      <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl">Designed for you to get more <span class="text-blue-600">simple</span></h1>
      <p class="mt-3 text-lg text-gray-800">Build your business here. Take it anywhere.</p>
    </div>
    <div class="mt-10 relative max-w-5xl mx-auto">
    <div className="relative w-full object-cover h-96 sm:h-[480px] rounded-xl overflow-hidden">
    <video 
        className="absolute inset-0 w-full h-full object-cover" 
        src="https://videos.pexels.com/video-files/3255275/3255275-uhd_2560_1440_25fps.mp4" 
        autoPlay 
        loop 
        muted 
        playsInline
    />
</div>
      <div class="absolute bottom-12 -start-20 -z-[1] size-48 bg-gradient-to-b from-orange-500 to-white p-px rounded-lg">
        <div class="bg-white size-48 rounded-lg"></div>
      </div>

      <div class="absolute -top-12 -end-20 -z-[1] size-48 bg-gradient-to-t from-blue-600 to-cyan-400 p-px rounded-full">
        <div class="bg-white size-48 rounded-full"></div>
      </div>
    </div>
    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">

  <div class="grid sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-3 gap-3 sm:gap-6">

    <a class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition" href="#">
      <div class="p-4 md:p-5">
        <div class="flex justify-between items-center gap-x-3">
          <div class="grow">
            <h3 class="group-hover:text-blue-600 font-semibold text-gray-800">
            For Investors
            </h3>
            <p class="text-sm text-gray-500">
            Connect with potential investors to secure funding for your innovative ideas.
            </p>
          </div>
          <div>
            <svg class="shrink-0 size-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </div>
        </div>
      </div>
    </a>

    <a class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition" href="#">
      <div class="p-4 md:p-5">
        <div class="flex justify-between items-center gap-x-3">
          <div class="grow">
            <h3 class="group-hover:text-blue-600 font-semibold text-gray-800">
            For Startups
            </h3>
            <p class="text-sm text-gray-500">
            Discover promising startups seeking funding and support their growth.
            </p>
          </div>
          <div>
            <svg class="shrink-0 size-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </div>
        </div>
      </div>
    </a>

    <a class="group flex flex-col bg-white border shadow-sm rounded-xl hover:shadow-md focus:outline-none focus:shadow-md transition" href="#">
      <div class="p-4 md:p-5">
        <div class="flex justify-between items-center gap-x-3">
          <div class="grow">
            <h3 class="group-hover:text-blue-600 font-semibold text-gray-800">
            Resources
            </h3>
            <p class="text-sm text-gray-500">Access valuable resources, guides, and insights to navigate the funding landscape.
            </p>
          </div>
          <div>
            <svg class="shrink-0 size-5 text-gray-800" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>
          </div>
        </div>
      </div>
    </a>
  </div>
</div>

  </div>
  <FeaturesSection/>
  <WorkSection/>
  <AboutSection/>
  
</div>
        </div>
    );
}

export default Home;