import React, { useState } from 'react';
import { repositories } from './data/repositories';
import { RepositoryCard } from './components/RepositoryCard';
import { CategoryFilter } from './components/CategoryFilter';
import { Repository } from './types/Repository';

function App() {
  const [selectedCategory, setSelectedCategory] = useState<Repository['category'] | 'All'>('All');

  const categories = Array.from(new Set(repositories.map(repo => repo.category)));
  
  const filteredRepos = selectedCategory === 'All'
    ? repositories
    : repositories.filter(repo => repo.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Farama Foundation Repositories
          </h1>
          <p className="text-lg text-gray-600">
            Open source reinforcement learning tools and environments
          </p>
        </div>

        <CategoryFilter
          categories={categories}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredRepos.map((repo) => (
            <RepositoryCard key={repo.name} repository={repo} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;