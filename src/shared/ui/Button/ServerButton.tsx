/* eslint-disable react/button-has-type */
type ServerButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
};

export default function ServerButton(props: ServerButtonProps): React.ReactNode {
  const { type, children } = props;
  return (
    <button
      type={type || 'button'}
      {...props}
      className="inline-block text-sm px-4 py-2 leading-none border rounded text-teal-200 border-teal-400 hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
    >
      {children}
    </button>
  );
}
