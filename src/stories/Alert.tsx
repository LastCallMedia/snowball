
interface AlertProps {
    /**
     * Is this the principal call to action on the page?
     */
    palette: "warning"| "info"|"success"|"error";
  
    headline: string;

    text: string;

    action: {
      href: string,
      title: string
    }
}

const getPalette = (palette: string) : string => {
  switch (palette){
    case "warning":
      return "sb-alert-palette-warning"
    case "error":
      return "sb-alert-palette-error"
    case "success":
      return "sb-alert-palette-success"
  }
  return 'sb-alert-palette-info'
}

export const Alert = ({
    palette = "info",
    text = "hello world",
    headline = "Warning",
    action,
    ...props
  }: AlertProps) => {
    
    return ( 
      <figure className={['sb-alert', getPalette(palette), "sb-alert_bg-surface", "sb-alert_border-accent", "flex", "space-x-2", "border-l-4", "border-solid", "font-mono", "sb-alert_rounded-bla "].join(" ")}>
        <div className="sb-alert_text-accent">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm8.706-1.442c1.146-.573 2.437.463 2.126 1.706l-.709 2.836.042-.02a.75.75 0 01.67 1.34l-.04.022c-1.147.573-2.438-.463-2.127-1.706l.71-2.836-.042.02a.75.75 0 11-.671-1.34l.041-.022zM12 9a.75.75 0 100-1.5.75.75 0 000 1.5z" clipRule="evenodd" />
          </svg>
        </div>

        <div className="sb-alert_text-ink space-y-2 sb-alert_surface-accent">
          <div className="font-bold sb-alert_font-title">
            {headline}
          </div>
          <div className="sb-alert_font-body">
            {text}
          </div>
          { action && (
            <div>
              <a href={action.href} className="sb-alert_decoration-accent underline-offset-4 underline hover:no-underline">{action.title}</a>
          </div>
          )}
          
        </div>
      </figure>
    );
  }
  