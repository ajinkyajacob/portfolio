import { Card, CardHeader, CardContent } from "@/components/ui/card"
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

function PlaceholderImage({className, alt,src}:{className: string, alt:string ,src?:string | StaticImport}) {
  return (
    <Image
                    src={src??'/placeholder.svg'}
                    width="550"
                    height="310"
                    alt={alt}
                    className={className}
                  ></Image>
  )
}

function ProjectCard({projectName,projectDetail,index}:{projectName:string,projectDetail:string,index:number}) {
  return (
  <Card className="group">
                <CardHeader>
                <PlaceholderImage alt={`Project #{i+1}`} key={projectName} className="mx-auto aspect-video overflow-hidden rounded-t-xl object-cover object-center"/>                  
                </CardHeader>
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold">{projectName ? projectName: `Project ${index+1}`}</h3>
                    <p className="text-muted-foreground">
                      {projectDetail}
                    </p>
                  </div>
                  <div className="mt-4 flex justify-end">
                    <Link
                      href="#"
                      className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus:bg-primary/90 focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                      prefetch={false}
                    >
                      View Project
                    </Link>
                  </div>
                </CardContent>
              </Card>
  )
}

export default function Projects() {
  const projects=[
    {projectName:'', projectDetail:'A web application that helps users manage their tasks and projects.'},
    {projectName:'',projectDetail:'A web application that helps users manage their tasks and projects.'},
    {projectName:'',projectDetail:'A web application that helps users manage their tasks and projects.'},
  ]
    return (
        <section id="projects" className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Featured Projects</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Check out my work</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  These are some of the projects I've worked on. I'm always excited to take on new challenges and create
                  innovative solutions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
              {
                projects.map((p,i) => (<> 
                <ProjectCard projectName={p.projectName} projectDetail={p.projectDetail} index={i} key={p.projectName} />
                </>))
              }
            </div>
          </div>
        </section>
    )
}