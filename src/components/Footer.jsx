function Footer() {
  return (
      <footer className="mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto bg-gray-800 text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
              <div className="col-span-full hidden lg:col-span-1 lg:block">
                  <a className="flex-none font-semibold text-xl text-white focus:outline-none focus:opacity-80" href="#" aria-label="Brand">Smart Connect</a>
              </div>
              <div>
                  <h4 className="text-xs font-semibold uppercase">Product</h4>
                  <div className="mt-3 grid space-y-3 text-sm">
                      <p><a className="inline-flex gap-x-2 text-gray-300 hover:text-gray-200 focus:outline-none" href="#">Pricing</a></p>
                      <p><a className="inline-flex gap-x-2 text-gray-300 hover:text-gray-200 focus:outline-none" href="#">Changelog</a></p>
                      <p><a className="inline-flex gap-x-2 text-gray-300 hover:text-gray-200 focus:outline-none" href="#">Docs</a></p>
                      <p><a className="inline-flex gap-x-2 text-gray-300 hover:text-gray-200 focus:outline-none" href="#">Download</a></p>
                  </div>
              </div>
              <div>
                  <h4 className="text-xs font-semibold uppercase">Company</h4>
                  <div className="mt-3 grid space-y-3 text-sm">
                      <p><a className="inline-flex gap-x-2 text-gray-300 hover:text-gray-200 focus:outline-none" href="#">About Us</a></p>
                      <p><a className="inline-flex gap-x-2 text-gray-300 hover:text-gray-200 focus:outline-none" href="#">Blog</a></p>
                      <p><a className="inline-flex gap-x-2 text-gray-300 hover:text-gray-200 focus:outline-none" href="#">Careers</a> <span className="inline text-blue-400">— We're hiring</span></p>
                      <p><a className="inline-flex gap-x-2 text-gray-300 hover:text-gray-200 focus:outline-none" href="#">Customers</a></p>
                      <p><a className="inline-flex gap-x-2 text-gray-300 hover:text-gray-200 focus:outline-none" href="#">Newsroom</a></p>
                      <p><a className="inline-flex gap-x-2 text-gray-300 hover:text-gray-200 focus:outline-none" href="#">Sitemap</a></p>
                  </div>
              </div>
              <div>
                  <h4 className="text-xs font-semibold uppercase">Resources</h4>
                  <div className="mt-3 grid space-y-3 text-sm">
                      <p><a className="inline-flex gap-x-2 text-gray-300 hover:text-gray-200 focus:outline-none" href="#">Community</a></p>
                      <p><a className="inline-flex gap-x-2 text-gray-300 hover:text-gray-200 focus:outline-none" href="#">Help & Support</a></p>
                      <p><a className="inline-flex gap-x-2 text-gray-300 hover:text-gray-200 focus:outline-none" href="#">eBook</a></p>
                      <p><a className="inline-flex gap-x=2 text-gray-300 hover:text-gray=200 focus:outline-none" href="#">What's New</a></p>
                      <p><a className="inline-flex gap-x=2 text-gray=300 hover:text-gray=200 focus:outline-none" href="#">Status</a></p>
                  </div>
              </div>
              <div>
                  <h4 className="text-xs font-semibold uppercase">Connect with Us</h4>
                  <div className="mt-3 grid space-y=3 text-sm">
                      <p><a className="inline-flex gap-x=2 text-gray=300 hover:text-gray=200 focus:outline-none" href="#">Twitter</a></p>
                      <p><a className="inline-flex gap-x=2 text-gray=300 hover:text-gray=200 focus:outline-none" href="#">LinkedIn</a></p>
                      <p><a className="inline-flex gap-x=2 text-gray=300 hover:text-gray=200 focus:outline-none" href="#">Facebook</a></p>
                  </div>
              </div>
          </div>

          <div className="pt=5 mt=5 border-t border-gray=700">
              <div className="sm:flex sm:justify-between sm:items-center">
                  <div className="flex flex-wrap items-center gap-x=3">
                      <div className="space-x=4 text-sm">
                          <span>&copy; 2024 SmartConnect. All rights reserved.</span>
                      </div>
                  </div>

                  {/* Social Media Icons */}
                  <div className="flex flex-wrap justify-between items-center mt=3 sm:mt=0">
                      {/* Add social media icons here */}
                  </div> 
              </div> 
          </div> 
      </footer> 
  );
}

export default Footer;