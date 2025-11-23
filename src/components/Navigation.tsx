import { Accessor, createSignal, Setter } from "solid-js";
import "../styles/navigation.css";

const [showNavigation, setShowNavigation] = createSignal(false);
const toggleNavigation = () => setShowNavigation(!showNavigation());

const MobileNavigation = () => {
  const tabIndex = showNavigation() ? "1" : "-1";
  return (
    <main
      class="mobile"
      aria-hidden={showNavigation() ? "false" : "true"}
      style={`
      --show-mobile: ${showNavigation() ? 100 : 0}; 
      --hide-mobile: ${showNavigation() ? 0 : 100}; 
      --pointer-events: ${showNavigation() ? "all" : "none"};
      opacity: ${showNavigation() ? 1 : 0};
      `}
    >
      <nav>
        <img
          onClick={toggleNavigation}
          class="exit-button"
          src="/assets/x-mark.svg"
          alt="close"
        />
        <a tabIndex={tabIndex} class="link-underline" href="/">
          <button tabIndex="-1" aria-hidden="true">
            <span>Home</span>
          </button>
        </a>
        <a tabIndex={tabIndex} class="link-underline" href="/randbeveiliging">
          <button tabIndex="-1" aria-hidden="true">
            <span> Randbeveiliging</span>
          </button>
        </a>
        <a tabIndex={tabIndex} class="link-underline" href="/diensten">
          <button tabIndex="-1" aria-hidden="true">
            <span> Diensten</span>
          </button>
        </a>
        <a tabIndex={tabIndex} class="link-underline" href="/contact">
          <button tabIndex="-1" aria-hidden="true">
            <span> Contact</span>
          </button>
        </a>
      </nav>
    </main>
  );
};

const Navigation = () => {
  return (
    <>
      <MobileNavigation />
      <header>
        <section>
          <h1>
            VALNETTEN<span>.</span>NL
          </h1>
        </section>
        <nav style={`--show-mobile: ${showNavigation() ? "100" : "0"}`}>
          <a class="link-underline" href="/">
            <button tabIndex="-1">
              <span>Home</span>
            </button>
          </a>
          <a class="link-underline" href="/randbeveiliging">
            <button tabIndex="-1">
              <span> Randbeveiliging</span>
            </button>
          </a>
          <a class="link-underline" href="/diensten">
            <button tabIndex="-1">
              <span> Diensten</span>
            </button>
          </a>
          <a class="link-underline" href="/contact">
            <button tabIndex="-1">
              <span> Contact</span>
            </button>
          </a>
        </nav>
        <img
          onClick={toggleNavigation}
          class="menu-icon"
          src="/assets/menu-icon.svg"
          alt="menu"
        />
      </header>
    </>
  );
};

export default Navigation;
