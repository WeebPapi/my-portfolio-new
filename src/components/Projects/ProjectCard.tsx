import React from 'react';
import { Button, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

interface ProjectCardProps {
  title: string;
  desc: string;
  id: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, desc, id }) => {
  const navigate = useNavigate();

  return (
    <div className="project-card" style={{ padding: '1rem', marginBottom: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
      <Typography.Title level={4}>{title}</Typography.Title>
      <Typography.Paragraph>{desc}</Typography.Paragraph>
      <Button color='default' variant='solid' onClick={() => navigate(`/projects/${id}`)}>
        View Project
      </Button>
    </div>
  );
};

export default ProjectCard;
