"use client";
import { Separator } from "@/components/Separator";
import { Button } from "@/components/Button";
import React, { useState } from "react";
import { OtherProjectEntry } from "@/components/root/other-projects/OtherProjectEntry";
import { TextLink } from "@/components/TextLink";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

interface OtherProjectsProps {

}

export const OtherProjects: React.FC<OtherProjectsProps> = ({ }) => {

      const [projectIndex, setProjectIndex] = useState(0);

      const projectInfos = [
            {
                  src: "https://marketplace-demo.prosavage.net",
                  github: "https://github.com/prosavage/marketplace",
                  title: "Marketplace Demo",
                  description: <React.Fragment>
                        <p>I wrote this software to serve as a hub for my minecraft plugins. The software allowed my users to purchase, download, review, and get support for plugins.
                              It was built using <TextLink href={"https://typescriptlang.org"}>TypeScript</TextLink>, <TextLink href={"https://react.dev/"}>React</TextLink>, and <TextLink href={"https://nextjs.org"}>Next.js</TextLink> on the frontend.
                              For the backend, I used <TextLink href={"https://typescriptlang.org"}>TypeScript</TextLink> again, <TextLink href={"https://expressjs.com/"}>Express</TextLink>, and <TextLink href={"https://www.mongodb.com/"}>MongoDB</TextLink>.
                              Using the same programming language across both the frontend and backend allowed me to share code between the two, which was a huge productivity boost. I could share types easily and even share some utility functions for things like validation.
                              Which can be a really big deal when you are building so many endpoints, and you don&apos;t want discrepancies between the frontend and backend&apos;s validation. I also used <TextLink href={"https://www.docker.com/"}>Docker</TextLink> to containerize the application and <TextLink href={"https://www.nginx.com/"}>Nginx</TextLink> to serve the frontend. I used <TextLink href={"https://bunny.net"}>BunnyCDN</TextLink> for
                              delivering the software downloads & images for resources, users, and other icons.
                        </p>
                        <br />
                        <p>There is also a feature to allow external users to upload their own software and monetize it. I built support for this using <TextLink href={"https://stripe.com/connect"}>Stripe Connect</TextLink>, this allowed users to directly recieve payouts to their bank account.
                              There is also a system for creating coupons, sales, and managing licenses. My platform took a 3% fee on all sales. If a creator uses CI/CD, I also built a webhook system to allow updating the software automatically on the marketplace.</p>
                  </React.Fragment >
            },
            {
                  src: "https://data-table-demo.prosavage.net",
                  github: "https://github.com/prosavage/data-table-demo",
                  title: "React Data Table",
                  description: <React.Fragment>
                        <p>A React data table component that I created for a technical interview.
                              The table has features like live sorting through the search bar, and filters for other relevant columns. The filters can be mixed and matched as desired.
                              The data table functionality itself is built from scratch without any UI frameworks. The table also supports editing data directly,
                              you can find controls for on the right-most column on the demo table. Columns can also be sorted in ascending or descending order.</p>
                  </React.Fragment>
            },

      ];

      const renderEntry = () => {
            const entry = projectInfos[projectIndex];
            return <OtherProjectEntry src={entry.src} description={entry.description} title={entry.title} github={entry.github} key={entry.src + "-" + projectIndex} />;
      };


      return (
            <div className="w-full flex flex-col">
                  <Separator />
                  <div className="flex flex-col justify-between mb-2">
                        <p className="text-xl md:text-2xl font-bold">Project Demos</p>
                        <div className="flex flex-row mt-4">
                              <Button className={"mr-1"} icon={<HiArrowLeft />} onClick={() => setProjectIndex(Math.max(projectIndex - 1, 0))}>Prev. Project</Button>
                              <Button className={"ml-1"} icon={<HiArrowRight />} alignIcon={"right"} onClick={() => setProjectIndex(Math.min(projectIndex + 1, projectInfos.length - 1))}>Next Project</Button>
                        </div>
                  </div>
                  {renderEntry()}
            </div>
      );
};
