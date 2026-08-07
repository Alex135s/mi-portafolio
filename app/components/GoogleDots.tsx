export default function GoogleDots({ size = 6 }: { size?: number }) {
  const colors = ["bg-google-blue", "bg-google-red", "bg-google-yellow", "bg-google-green"];
  return (
    <span className="inline-flex items-center gap-1 align-middle" aria-hidden="true">
      {colors.map((color) => (
        <span
          key={color}
          className={`rounded-full ${color}`}
          style={{ width: size, height: size }}
        />
      ))}
    </span>
  );
}
