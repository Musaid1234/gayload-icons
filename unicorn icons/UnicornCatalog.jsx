import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { unicornCatalog } from "./catalog.js";
import "./catalog.css";

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
    <article className="unicorn-tile" ref={ref}>
      <div className="unicorn-preview">
        {visible ? (
          <Suspense fallback={null}>
            <Component />
          </Suspense>
        ) : null}
      </div>
      <p className="unicorn-name">{icon.name}</p>
      <span className="unicorn-meta">{icon.category}</span>
    </article>
  );
}

export function UnicornCatalog() {
  const [query, setQuery] = useState("");
  const icons = useMemo(() => {
    const needle = query.trim().toLowerCase();
    if (!needle) return unicornCatalog;
    return unicornCatalog.filter((icon) =>
      `${icon.name} ${icon.slug} ${icon.category} ${icon.style}`.toLowerCase().includes(needle),
    );
  }, [query]);

  return (
    <div className="unicorn">
      <div className="unicorn-header">
        <div>
          <h1>Unicorn icons</h1>
          <p>{unicornCatalog.length} outline icons. Pointer enter plays the webm from each icon file.</p>
        </div>
        <input
          type="search"
          value={query}
          placeholder="Search unicorn icons"
          onChange={(event) => setQuery(event.target.value)}
        />
      </div>
      <p className="unicorn-count">{icons.length} shown</p>
      <section className="unicorn-grid">
        {icons.map((icon, index) => (
          <Tile key={`${icon.id}-${index}`} icon={icon} />
        ))}
      </section>
    </div>
  );
}
