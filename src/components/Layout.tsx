export default function Layout(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={
        `mx-auto flex max-w-screen-lg items-center px-8 py-4` +
        (props.className ? ` ${props.className}` : "")
      }
    >
      {props.children}
    </section>
  );
}
