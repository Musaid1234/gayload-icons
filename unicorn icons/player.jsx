"use client";

function cssSize(size) {
  if (size == null) return "100%";
  return typeof size === "number" ? `${size}px` : size;
}

export function UnicornIcon({ webmUrl, svgUrl, size, className, style, title }) {
  const dimension = cssSize(size);
  return (
    <div
      className={["unicorn-icon", className].filter(Boolean).join(" ")}
      title={title}
      role={title ? "img" : undefined}
      aria-label={title}
      style={{ width: dimension, height: dimension, display: "block", ...style }}
    >
      <video
        poster={svgUrl}
        className="unicorn-video"
        src={webmUrl}
        autoPlay={false}
        loop
        muted
        playsInline
        preload="none"
        style={{ width: "100%", height: "100%", objectFit: "contain", display: "block" }}
        onMouseEnter={(event) => {
          event.currentTarget.play().catch(() => {});
        }}
        onMouseLeave={(event) => {
          const node = event.currentTarget;
          const pending = node.play();
          if (pending !== undefined) {
            pending
              .then(() => {
                node.pause();
                node.currentTime = 0;
              })
              .catch(() => {});
          } else {
            node.pause();
            node.currentTime = 0;
          }
        }}
      />
    </div>
  );
}
