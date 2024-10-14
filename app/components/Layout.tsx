export default function RouteLayout(props: { children: React.ReactNode }) {
    return (
        <section className="max-w-screen-xl mx-auto flex items-center justify-between py-4 px-8">
            {props.children}
        </section>
    );
}
