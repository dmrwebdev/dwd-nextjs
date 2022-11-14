/* export default Terminal */
export function TerminalSectionHeading({ className, children }) {
  return (
    <h2 className={`text-2xl my-6 ${className}`}>
      <span className="text-teal-700">{"// "}</span>
      {children}
    </h2>
  );
}

export function TerminalLocationLine({ className, directory, customLocation }) {
  return (
    <span className={className}>
      <span className="text-terminal-location">{customLocation || "derek@server"}</span>:
      <span className="text-terminal-tilde mr-2">{directory} $</span>
    </span>
  );
}
