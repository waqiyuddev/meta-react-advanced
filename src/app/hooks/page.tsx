import Link from "next/link"

export default function HooksPage() {
    return (
        <ul style={{ lineHeight: "28px" }}>
            <li>
                <Link href="/hooks/advanced">
                    Advanced Hooks
                </Link>
            </li>
            <li>
                <Link href="/hooks/fetch">
                    Fetch Hooks
                </Link>
            </li>
            <li>
                <Link href="/hooks/use-effect">
                    useEffect Hook
                </Link>
            </li>
        </ul>
    )
}
