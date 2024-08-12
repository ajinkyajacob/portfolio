// import Link from "next/link";
import Image from 'next/image'
import profilePic from "@/public/profile_pic/1711278309053.jpeg";
import { Link } from 'next-view-transitions';

export default function Hero({name,designation}:{name:string,designation:string}){
    return (
        <section id="hero" className="flex justify-center w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 grid gap-6 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">{name}</h1>
                <p className="max-w-[600px] text-primary-foreground/80 md:text-xl">{designation}</p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link
                  href="#"
                  className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90 focus:bg-primary-foreground/90 focus:text-primary focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  View Projects
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex h-10 items-center justify-center rounded-md border border-primary-foreground bg-primary px-8 text-sm font-medium shadow-sm transition-colors hover:bg-primary/90 hover:text-primary-foreground focus:bg-primary/90 focus:text-primary-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50"
                  prefetch={false}
                >
                  Contact Me
                </Link>
              </div>
            </div>
            <Image
            priority={true}
              src={profilePic}
              width={550}
              height={550}
              alt="Hero"
              className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:order-last "
            ></Image>
            {/* <img
            /> */}
          </div>
        </section>
    )
}