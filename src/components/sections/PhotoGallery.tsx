"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { flushSync } from "react-dom";

import { Photo } from "@/components/ui/Photo";
import type { Photo as PhotoSource } from "@/content/photos";

type GalleryItem = { photo: PhotoSource; caption: string };

/** Photo tiles that open a modal viewer with previous/next and arrow-key navigation. */
export function PhotoGallery({ className, items }: { className: string; items: GalleryItem[] }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const tileRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const [index, setIndex] = useState(0);
  const [opened, setOpened] = useState(false);
  const current = opened ? items[index] : undefined;

  const show = (i: number) => setIndex((i + items.length) % items.length);

  const open = (i: number) => {
    flushSync(() => {
      show(i);
      setOpened(true);
    });
    dialogRef.current?.showModal();
  };

  const onKeyDown = (event: KeyboardEvent<HTMLDialogElement>) => {
    if (event.key === "ArrowRight") {
      event.preventDefault();
      show(index + 1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      show(index - 1);
    }
  };

  return (
    <>
      <div className={className}>
        {items.map((item, i) => (
          <button
            key={item.caption}
            ref={(el) => {
              tileRefs.current[i] = el;
            }}
            className="photo-tile"
            aria-label={`Enlarge: ${item.caption}`}
            onClick={() => open(i)}
          >
            <Photo photo={item.photo} alt={item.caption} />
            <span aria-hidden="true">＋</span>
          </button>
        ))}
      </div>
      <dialog
        ref={dialogRef}
        className="photo-dialog"
        aria-label="Photo viewer"
        onClick={(event) => {
          if (event.target === event.currentTarget) event.currentTarget.close();
        }}
        onKeyDown={onKeyDown}
        onClose={() => tileRefs.current[index]?.focus()}
      >
        <button className="dialog-close" aria-label="Close photo viewer" onClick={() => dialogRef.current?.close()}>
          ×
        </button>
        <figure>
          {/* eslint-disable-next-line @next/next/no-img-element -- full-size original, shown on demand */}
          <img src={current?.photo.full.src} alt={current?.caption ?? ""} />
          <figcaption>{current?.caption}</figcaption>
        </figure>
        <div className="photo-controls">
          <button aria-label="Previous photo" onClick={() => show(index - 1)}>
            ←
          </button>
          <span>{current && `${index + 1} / ${items.length}`}</span>
          <button aria-label="Next photo" onClick={() => show(index + 1)}>
            →
          </button>
        </div>
      </dialog>
    </>
  );
}
