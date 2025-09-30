export default function LatestLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      {/* Add any layout elements specific to the latest route */}
      {children}
    </section>
  );
}