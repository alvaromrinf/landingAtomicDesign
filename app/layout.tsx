export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es">
            <head>
                <title>Landing demo</title>
                <meta charSet="UTF-8" />
                <meta name="title" content="Landing demo" />
                <meta name="description" content="Landing demo" />
            </head>
            <body>{children}</body>
        </html>
    )
}