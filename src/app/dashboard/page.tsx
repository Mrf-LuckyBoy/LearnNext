"use client";

import Navbar from "@/components/nav-bar";
import BannerDashboard from "@/features/dashboard/components/banner-dashboard";
import HeaderDashboard from "@/features/dashboard/components/header-dashboard";
import CardStatus from "@/features/dashboard/components/card-status";
import CardProject from "@/features/dashboard/components/card-project";
import type { ProjectCardProps } from "@/features/dashboard/types";
import CardProjectList from "@/features/dashboard/components/card-project-list";
import { useState } from "react";
import NoProject from "@/features/dashboard/components/no-project";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";


const card = [
  { title: "Active", count: 5 },
  { title: "Pending", count: 5 },
  { title: "Completed", count: 5 },
];

const cardProject: ProjectCardProps[] = [
  {
    title: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    status: "Active",
    date: "Jan 12, 2026",
  },
  {
    title: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    status: "Completed",
    date: "Jan 12, 2026",
  },
  {
    title: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    status: "Pending",
    date: "Jan 12, 2026",
  },
  {
    title: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    status: "Completed",
    date: "Jan 12, 2026",
  },
  {
    title: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    status: "Active",
    date: "Jan 12, 2026",
  },
  {
    title: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    status: "Completed",
    date: "Jan 12, 2026",
  },
  {
    title: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    status: "Pending",
    date: "Jan 12, 2026",
  },
  {
    title: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    status: "Completed",
    date: "Jan 12, 2026",
  },
  {
    title: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    status: "Active",
    date: "Jan 12, 2026",
  },
  {
    title: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    status: "Completed",
    date: "Jan 12, 2026",
  },
  {
    title: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    status: "Pending",
    date: "Jan 12, 2026",
  },
  {
    title: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    status: "Completed",
    date: "Jan 12, 2026",
  },
  {
    title: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    status: "Active",
    date: "Jan 12, 2026",
  },
  {
    title: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    status: "Completed",
    date: "Jan 12, 2026",
  },
  {
    title: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    status: "Pending",
    date: "Jan 12, 2026",
  },
  {
    title: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    status: "Completed",
    date: "Jan 12, 2026",
  },
  {
    title: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    status: "Active",
    date: "Jan 12, 2026",
  },
  {
    title: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    status: "Completed",
    date: "Jan 12, 2026",
  },
  {
    title: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    status: "Pending",
    date: "Jan 12, 2026",
  },
  {
    title: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    status: "Completed",
    date: "Jan 12, 2026",
  },
  {
    title: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    status: "Active",
    date: "Jan 12, 2026",
  },
  {
    title: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    status: "Completed",
    date: "Jan 12, 2026",
  },
  {
    title: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    status: "Pending",
    date: "Jan 12, 2026",
  },
  {
    title: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    status: "Completed",
    date: "Jan 12, 2026",
  },
  {
    title: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    status: "Active",
    date: "Jan 12, 2026",
  },
  {
    title: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    status: "Completed",
    date: "Jan 12, 2026",
  },
  {
    title: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    status: "Pending",
    date: "Jan 12, 2026",
  },
  {
    title: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    status: "Completed",
    date: "Jan 12, 2026",
  },
  {
    title: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    status: "Active",
    date: "Jan 12, 2026",
  },
  {
    title: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    status: "Completed",
    date: "Jan 12, 2026",
  },
  {
    title: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    status: "Pending",
    date: "Jan 12, 2026",
  },
  {
    title: "Website Redesign",
    description: "Complete overhaul of the company website with new branding",
    status: "Completed",
    date: "Jan 12, 2026",
  },
];

export default function DashboardPage() {
  const [isGrid, setIsGride] = useState(true);
  const [dialogCreate, setDialogCreate] = useState(true);

  return (
    <>
      <Navbar />
      <main className="p-8 ml-14 mr-14 flex flex-col justify-between gap-5">
        <BannerDashboard />
        <HeaderDashboard isGrid={isGrid} onViewChange={setIsGride} />
        <section className="grid grid-cols-3 gap-5 mb-8">
          {card.map((item) => (
            <CardStatus
              key={item.title}
              title={item.title}
              count={item.count}
            />
          ))}
        </section>
        {cardProject.length === 0 ? (
          <NoProject />
        ) : isGrid ? (
          <section className="grid grid-cols-3 gap-4">
            {cardProject.map((item, index) => (
              <CardProject
                key={index}
                title={item.title}
                description={item.description}
                status={item.status}
                date={item.date}
              />
            ))}
          </section>
        ) : (
          <section>
            <CardProjectList projects={cardProject} />
          </section>
        )}
        <form>
          <Dialog open={dialogCreate} onOpenChange={setDialogCreate}>
            <DialogTrigger asChild>
              <Button>Open Dialog</Button>
            </DialogTrigger>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Create project</DialogTitle>
                <DialogDescription>
                  Add a new project to your dashboard
                </DialogDescription>
              </DialogHeader>
              <div>
                <input placeholder="Project name" />
                <input placeholder="description" />
                <input placeholder="description" />
              </div>
              <DialogFooter>
                <Button variant="secondary">Cancel</Button>
                <Button>Save</Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </form>
      </main>
    </>
  );
}
