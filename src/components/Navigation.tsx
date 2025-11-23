import { createSignal } from "solid-js";

const [showNavigation, setShowNavigation] = createSignal(false);
const toggleNavigation = () => setShowNavigation(!showNavigation());

const MobileNavigation = () => {
  const tabIndex = showNavigation() ? "1" : "-1";
  return (
    <div
      class={`fixed inset-0 z-50 transition-all duration-300 ${
        showNavigation() ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
      style={`background: rgba(0, 0, 0, ${showNavigation() ? 0.5 : 0});`}
      aria-hidden={showNavigation() ? "false" : "true"}
      onClick={toggleNavigation}
    >
      <nav
        class={`fixed left-0 top-0 h-full w-80 bg-white shadow-xl flex flex-col items-start justify-start pt-20 transition-transform duration-300 ${
          showNavigation() ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={toggleNavigation}
          class="absolute top-6 right-6 w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-900 transition-colors"
          aria-label="Close menu"
        >
          <img
            src="/assets/x-mark.svg"
            alt="close"
            class="w-6 h-6"
          />
        </button>
        <a tabIndex={tabIndex} href="/" class="w-full" onClick={toggleNavigation}>
          <div class="w-full text-left px-6 py-4 text-lg font-medium text-gray-900 hover:text-orange-600 hover:bg-orange-50 transition-colors">
            Home
          </div>
        </a>
        <a tabIndex={tabIndex} href="/randbeveiliging" class="w-full" onClick={toggleNavigation}>
          <div class="w-full text-left px-6 py-4 text-lg font-medium text-gray-900 hover:text-orange-600 hover:bg-orange-50 transition-colors">
            Randbeveiliging
          </div>
        </a>
        <a tabIndex={tabIndex} href="/diensten" class="w-full" onClick={toggleNavigation}>
          <div class="w-full text-left px-6 py-4 text-lg font-medium text-gray-900 hover:text-orange-600 hover:bg-orange-50 transition-colors">
            Diensten
          </div>
        </a>
        <a tabIndex={tabIndex} href="/contact" class="w-full" onClick={toggleNavigation}>
          <div class="w-full text-left px-6 py-4 text-lg font-medium text-gray-900 hover:text-orange-600 hover:bg-orange-50 transition-colors">
            Contact
          </div>
        </a>
      </nav>
    </div>
  );
};

const Navigation = () => {
  return (
    <>
      <MobileNavigation />
      <header class="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-sm border-b border-gray-200 shadow-sm">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div class="flex items-center justify-between h-16">
            <a href="/" class="flex items-center">
              <h1 class="text-lg font-bold text-gray-900">
                VALNETTEN<span class="text-orange-600">.</span>NL
              </h1>
            </a>
            <nav class="hidden lg:flex items-center space-x-1">
              <a 
                href="/" 
                class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors rounded-md hover:bg-orange-50"
              >
                Home
              </a>
              <a 
                href="/randbeveiliging" 
                class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors rounded-md hover:bg-orange-50"
              >
                Randbeveiliging
              </a>
              <a 
                href="/diensten" 
                class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors rounded-md hover:bg-orange-50"
              >
                Diensten
              </a>
              <a 
                href="/contact" 
                class="px-4 py-2 text-sm font-medium text-gray-700 hover:text-orange-600 transition-colors rounded-md hover:bg-orange-50"
              >
                Contact
              </a>
            </nav>
            <button
              onClick={toggleNavigation}
              class="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
              aria-label="Open menu"
            >
              <img
                src="/assets/menu-icon.svg"
                alt="menu"
                class="w-6 h-6"
              />
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Navigation;
