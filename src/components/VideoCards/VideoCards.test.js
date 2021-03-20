import React from 'react';
import {render, screen} from '@testing-library/react';
import VideoCards from './index';

test('renders all videos of mockfile', () => {
    render(<VideoCards />);

    expect(screen.getByText(/Video Tour/i)).toBeInTheDocument();
    expect(screen.getByText(/Bringing Silicon Valley to Mexico/i)).toBeInTheDocument();
    expect(screen.getByText(/Wizeline hace sentir/i)).toBeInTheDocument();
    expect(screen.getByText(/We Are Wizeline/i)).toBeInTheDocument();
    expect(screen.getByText(/Wizeline Thrives in Mexico City/i)).toBeInTheDocument();
    expect(screen.getByText(/El plan de Wizeline, una empresa/i)).toBeInTheDocument();
    expect(screen.getByText(/A Day in the Life/i)).toBeInTheDocument();
    expect(screen.getByText(/Wizeline Technical Writing Academy/i)).toBeInTheDocument();
    expect(screen.getByText(/Silicon Valley en México/i)).toBeInTheDocument();
    expect(screen.getByText(/featuring Juan Pablo Villa/i)).toBeInTheDocument();
    expect(screen.getByText(/2020 Year in Review/i)).toBeInTheDocument();
    expect(screen.getByText(/featuring Hugo Lopez/i)).toBeInTheDocument();
    expect(screen.getByText(/Hiring in Mexico/i)).toBeInTheDocument();
    expect(screen.getByText(/featuring Oswaldo Herrera/i)).toBeInTheDocument();
    expect(screen.getByText(/Caso de Éxito/i)).toBeInTheDocument();
    expect(screen.getByText(/2019 Year in Review/i)).toBeInTheDocument();
    expect(screen.getByText(/Wizeline CEO shares career/i)).toBeInTheDocument();
    expect(screen.getByText(/Wizeline Data Engineering/i)).toBeInTheDocument();
    expect(screen.getByText(/New Knowledge Economy/i)).toBeInTheDocument();
    expect(screen.getByText(/Miriam Godinez/i)).toBeInTheDocument();
    expect(screen.getByText(/Welcome Back to Wizeline Vietnam/i)).toBeInTheDocument();
    expect(screen.getByText(/How does Wizeline Work/i)).toBeInTheDocument();
    expect(screen.getByText(/12 Wishes from Wizeline/i)).toBeInTheDocument();
    expect(screen.getByText(/Hear from our employees directly /i)).toBeInTheDocument();

});