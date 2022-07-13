type Props = {
  children: JSX.Element;
};
export default function MainLayout({ children }: Props) {
  return (
    <>
      <p>header</p>
      {children}
      <p>footer</p>
    </>
  );
}
