import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { catalog } from "../iconography/catalog.js";
import { UnicornCatalog } from "../unicorn icons/UnicornCatalog.jsx";

function Tile({ icon }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  const Component = icon.Component;

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { rootMargin: "240px" },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <article className="tile" ref={ref}>
      <div className="preview">
        {visible ? (
          <Suspense fallback={null}>
            <Component />
          </Suspense>
        ) : null}
      </div>
      <p className="title">{icon.title}</p>
      <p className="meta">
        {icon.name}
        <span>{icon.defaultState}</span>
      </p>
    </article>
  );
}

export function App() {
  const [set, setSet] = useState("iconography");
  const [query, setQuery] = useState("");
  const icons = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return catalog;
    return catalog.filter((icon) =>
      `${icon.title} ${icon.name} ${icon.defaultState}`.toLowerCase().includes(needle),
    );
  }, [query]);

  return (
    <>
      <nav className="sets">
        <button
          type="button"
          className={set === "iconography" ? "active" : ""}
          onClick={() => setSet("iconography")}
        >
          Iconography
        </button>
        <button
          type="button"
          className={set === "unicorn" ? "active" : ""}
          onClick={() => setSet("unicorn")}
        >
          Unicorn icons
        </button>
      </nav>
      {set === "unicorn" ? (
        <UnicornCatalog />
      ) : (
        <main>
          <header>
            <div>
              <h1>Iconography</h1>
              <p>
                {catalog.length} system / outline icons. Pointer enter plays the default state from
                each icon file.
              </p>
            </div>
            <input
              type="search"
              value={query}
              placeholder="Search icons"
              onChange={(event) => setQuery(event.target.value)}
            />
          </header>
          <p className="count">{icons.length} shown</p>
          <section className="grid">
            {icons.map((icon) => (
              <Tile key={`${icon.family}-${icon.style}-${icon.index}-${icon.name}`} icon={icon} />
            ))}
          </section>
        </main>
      )}
    </>
  );
}
