export default function Layout(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={
        `max-w-screen-lg mx-auto flex items-center py-4 px-8 h-[300px]` +
        (props.className ? ` ${props.className}` : "")
      }
    >
      {props.children}
    </section>
  );
}
