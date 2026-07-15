export default function HelloWorldLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="bg-red-400">{children}</body>
    </html>
  );
}
