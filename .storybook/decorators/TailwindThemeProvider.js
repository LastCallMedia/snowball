
export default function TailwindThemeProvider(props) {
  const cssPath = props.cssPath

  return (
    <div>
      <link rel="stylesheet" type="text/css" href={cssPath} />
      {props.children}
    </div>
  );
}
