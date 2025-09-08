export function ProductImage({ src, alt }) {
  return (
    <div className="flex justify-center">
      <img src={src} alt={alt} className="rounded-lg z-10" />
      <svg className="absolute w-64 h-64 z-0" viewBox="0 0 200 200">
    <polygon points="50,0 150,0 200,100 150,200 50,200 0,100" fill="#FA6320" />
  </svg>
    </div>
  );
}
