export function ProductImage({ src, alt }) {
  return (
    <div className="flex justify-center">
      <img src={src} alt={alt} className="rounded-lg" />
      <svg className="absolute w-64 h-64 z-0" viewBox="0 0 200 200">
    <polygon points="50,0 150,0 200,100 150,200 50,200 0,100" fill="rgba(255,255,255,0.05)" />
  </svg>
    </div>
  );
}
