export default function Layout({ children, params }) {
  return (
    <html lang={params.locale}>
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  );
}
