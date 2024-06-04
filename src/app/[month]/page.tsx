export default function Page ({ params }: { params: { month: string } }) {
    return <h2>
        { params.month }
    </h2>
}