export default function HooksLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div
            style={{
                maxWidth: "1000px",
                marginLeft: "auto",
                marginRight: "auto",
                padding: "24px",
            }}
        >
            <h1 style={{ fontSize: "24px", marginBottom: "16px" }}>
                React Hooks
            </h1>

            {children}
        </div>
    )
}
