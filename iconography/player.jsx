"use client";

import { useEffect, useRef } from "react";
import lottie from "lottie-web/build/player/lottie_svg.js";
import { cssColorToRgb, recolorAnimation } from "./recolor.js";

const SUPPORTED_FLAGS = ["default"];

export function parseStates(animationData) {
  return (animationData.markers || [])
    .map((marker) => {
      const parts = String(marker.cm).split(":");
      const state = {
        time: marker.tm,
        duration: marker.dr,
        name: "",
        default: false,
        params: [],
      };
      while (SUPPORTED_FLAGS.includes(parts[0])) {
        if (parts[0] === "default") state.default = true;
        else throw new Error(`Unsupported state flag: ${parts[0]}`);
        parts.shift();
      }
      state.name = parts[0] || "";
      state.params = parts.slice(1);
      return state;
    })
    .filter((state) => state.duration > 0);
}

function resolveState(states, requested) {
  let active;
  for (const state of states) {
    if (state.name === requested || (state.default && requested == null)) active = state;
  }
  if (states.length && requested && requested !== "*" && !active) {
    active = states.find((state) => state.default);
  }
  return active;
}

function segmentOf(state) {
  return [state.time, state.time + state.duration + 1];
}

function triggerOf(state) {
  return (state?.name || "").split("-")[0] || "hover";
}

function morphSegments(state) {
  if (!state) return null;
  const ratio = parseFloat(state.params[0]);
  if (Number.isNaN(ratio) || ratio <= 0 || ratio >= 1) return null;
  const firstEnd = state.time + Math.floor((state.duration + 1) * ratio);
  return [
    [state.time, firstEnd],
    [firstEnd, state.time + state.duration + 1],
  ];
}

function cssSize(size) {
  if (size == null) return "100%";
  return typeof size === "number" ? `${size}px` : size;
}

export function Lordicon({
  animationData,
  state: requestedState,
  size,
  color,
  accent,
  className,
  style,
  title,
}) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return undefined;

    const states = parseStates(animationData);
    const active = resolveState(states, requestedState ?? null);
    const trigger = triggerOf(active);
    const data = structuredClone(animationData);
    recolorAnimation(
      data,
      cssColorToRgb(color, container),
      cssColorToRgb(accent, container),
    );
    if (states.length) {
      const first = states[0];
      const last = states[states.length - 1];
      data.ip = first.time;
      data.op = last.time + last.duration + 1;
    }

    const anim = lottie.loadAnimation({
      container,
      renderer: "svg",
      loop: false,
      autoplay: false,
      animationData: data,
      initialSegment: active ? segmentOf(active) : undefined,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid meet",
        progressiveLoad: true,
        hideOnTransparent: true,
      },
    });

    const hover = { current: false };
    const morph = {
      queue: [],
      segments: trigger === "morph" ? morphSegments(active) : null,
      entered: false,
    };

    const playFromStart = () => {
      anim.setDirection(1);
      if (active) anim.playSegments(segmentOf(active), true);
      else anim.goToAndPlay(0, true);
    };

    const switchSegment = (range) => {
      if (range) anim.setSegment(range[0], range[1]);
      else anim.resetSegments(true);
      anim.goToAndStop(0, true);
    };

    const processMorph = () => {
      if (!anim.isPaused) return;
      const drop = Math.floor(morph.queue.length / 2) * 2;
      if (drop > 0) morph.queue.splice(0, drop);
      if (!morph.queue.length) return;
      const step = morph.queue.shift();
      if (morph.segments) {
        anim.setDirection(1);
        switchSegment(morph.segments[step]);
      } else {
        anim.setDirection(step === 0 ? 1 : -1);
      }
      anim.play();
    };

    const onComplete = () => {
      if (trigger === "loop" && hover.current) playFromStart();
      else if (trigger === "morph") processMorph();
    };

    const parkAtEnd = () => {
      anim.goToAndStop(Math.max(0, anim.getDuration(true) - 1), true);
    };

    const fit = () => {
      const svg = container.querySelector("svg");
      if (!svg) return;
      svg.style.width = "100%";
      svg.style.height = "100%";
      svg.style.display = "block";
    };
    if (anim.isLoaded) fit();
    else anim.addEventListener("DOMLoaded", fit);

    anim.addEventListener("complete", onComplete);
    anim.addEventListener("loopComplete", onComplete);
    if (trigger === "in") {
      if (anim.isLoaded) parkAtEnd();
      else anim.addEventListener("config_ready", parkAtEnd);
    }

    const onEnter = () => {
      hover.current = true;
      if (trigger === "morph") {
        morph.entered = true;
        morph.queue.push(0);
        processMorph();
        return;
      }
      if (anim.isPaused) playFromStart();
    };

    const onLeave = () => {
      hover.current = false;
      if (trigger === "morph" && morph.entered) {
        morph.queue.push(1);
        processMorph();
      }
    };

    container.addEventListener("pointerenter", onEnter);
    container.addEventListener("pointerleave", onLeave);

    return () => {
      container.removeEventListener("pointerenter", onEnter);
      container.removeEventListener("pointerleave", onLeave);
      anim.removeEventListener("DOMLoaded", fit);
      anim.destroy();
    };
  }, [animationData, requestedState, color, accent]);

  const dimension = cssSize(size);
  return (
    <div
      className={["lordicon", className].filter(Boolean).join(" ")}
      ref={containerRef}
      title={title}
      role={title ? "img" : undefined}
      aria-label={title}
      style={{ width: dimension, height: dimension, display: "block", ...style }}
    />
  );
}
