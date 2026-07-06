// Placeholder — image optimization via next-image-export-optimizer
// requires `npm install next-image-export-optimizer` and updating next.config.ts
// For now, images are served unoptimized (see next.config.ts)
export default function imageLoader({
  src,
}: {
  src: string;
  width: number;
  quality?: number;
}) {
  return src;
}
