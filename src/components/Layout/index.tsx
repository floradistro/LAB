"use client";

import Navigation from '../Navigation';
import Footer from '../Footer';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
  currentPage?: 'home' | 'about' | 'services' | 'contact' | 'client-portal' | 'submit-sample';
}

export default function Layout({ children, currentPage = 'home' }: LayoutProps) {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navigation currentPage={currentPage} />
      {children}
      <Footer />
    </div>
  );
} 