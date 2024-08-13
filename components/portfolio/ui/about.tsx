import Link from "next/link";

export default function About() {
    return (
        <section id="about" className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">About Me</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {`I'm a software engineer and designer with a passion for creating innovative and user-friendly
                  applications. I have experience working with a variety of technologies and frameworks, and I'm always
                  eager to learn new skills.`}
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:bg-primary/90 focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Contact Me
                </Link>
                <Link
                  href="/AjinkyaJacobCV.pdf"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View Resume
                </Link>
              </div>
            </div>
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Skills</h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  {`I have a wide range of skills, including front-end development, back-end development, design, and
                  project management. I'm proficient in languages like JavaScript, Typescript, and I'm experienced
                  with frameworks and libraries like Angular, React, Node.js`}
                </p>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2 rounded-md bg-background px-3 py-2 text-sm font-medium text-muted-foreground">
              <PiIcon className="w-5 h-5" />
                  Angular
                </div>
                <div className="flex items-center gap-2 rounded-md bg-background px-3 py-2 text-sm font-medium text-muted-foreground">
                  <CodepenIcon className="w-5 h-5" />
                  React
                </div>
                <div className="flex items-center gap-2 rounded-md bg-background px-3 py-2 text-sm font-medium text-muted-foreground">
                  <NetworkIcon className="w-5 h-5" />
                  Node.js
                </div>
                {/* <div className="flex items-center gap-2 rounded-md bg-background px-3 py-2 text-sm font-medium text-muted-foreground">
                  <WrenchIcon className="w-5 h-5" />
                  Rust
                </div> */}
                <div className="flex items-center gap-2 rounded-md bg-background px-3 py-2 text-sm font-medium text-muted-foreground">
                  <EclipseIcon className="w-5 h-5" />
                  JavaScript
                </div>
                {/* <div className="flex items-center gap-2 rounded-md bg-background px-3 py-2 text-sm font-medium text-muted-foreground">
                  <PiIcon className="w-5 h-5" />
                  Python
                </div> */}
                {/* <div className="flex items-center gap-2 rounded-md bg-background px-3 py-2 " /> */}
              </div>
            </div>
          </div>
        </section>
    )
}


function CodepenIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2" />
        <line x1="12" x2="12" y1="22" y2="15.5" />
        <polyline points="22 8.5 12 15.5 2 8.5" />
        <polyline points="2 15.5 12 8.5 22 15.5" />
        <line x1="12" x2="12" y1="2" y2="8.5" />
      </svg>
    )
  }
  
  
  function EclipseIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 2a7 7 0 1 0 10 10" />
      </svg>
    )
  }


function NetworkIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="16" y="16" width="6" height="6" rx="1" />
        <rect x="2" y="16" width="6" height="6" rx="1" />
        <rect x="9" y="2" width="6" height="6" rx="1" />
        <path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" />
        <path d="M12 12V8" />
      </svg>
    )
  }
  

function PiIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <line x1="9" x2="9" y1="4" y2="20" />
        <path d="M4 7c0-1.7 1.3-3 3-3h13" />
        <path d="M18 20c-1.7 0-3-1.3-3-3V4" />
      </svg>
    )
  }
  
  
  function WrenchIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    )
  }
  