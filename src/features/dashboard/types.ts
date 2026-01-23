export type StatusCardProps = {
  title: string;
  count: number;
};

export type ProjectCardProps = {
    title: string;
    description: string;
    status: 'Active' | 'Pending' | 'Completed';
    date: string;
}

export type ProjectCardListProps = {
    projects: ProjectCardProps[];
}