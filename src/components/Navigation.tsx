import { Accessor, createSignal, Setter } from "solid-js";
import "../styles/navigation.css";

const [showNavigation, setShowNavigation] = createSignal(false);
const toggleNavigation = () => setShowNavigation(!showNavigation());

const MobileNavigation = () => {
  return (
    <main
      class="mobile"
      style={`
      --show-mobile: ${showNavigation() ? 100 : 0}; 
      --hide-mobile: ${showNavigation() ? 0 : 100}; 
      --pointer-events: ${showNavigation() ? "all" : "none"}`}
    >
      <nav>
        <img
          onClick={toggleNavigation}
          class="exit-button"
          src="/assets/x-mark.svg"
          alt="close"
        />
        <a class="link-underline" href="/">
          <button>
            <span>Home</span>
          </button>
        </a>
        <a class="link-underline" href="/randbeveiliging">
          <button>
            <span> Randbeveiliging</span>
          </button>
        </a>
        <a class="link-underline" href="/diensten">
          <button>
            <span> Diensten</span>
          </button>
        </a>
        <a class="link-underline" href="/contact">
          <button>
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
            <button>
              <span>Home</span>
            </button>
          </a>
          <a class="link-underline" href="/randbeveiliging">
            <button>
              <span> Randbeveiliging</span>
            </button>
          </a>
          <a class="link-underline" href="/diensten">
            <button>
              <span> Diensten</span>
            </button>
          </a>
          <a class="link-underline" href="/contact">
            <button>
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
