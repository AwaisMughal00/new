import React, { useState, useRef, useEffect } from 'react';
import '../css/Portfolio.css';

const Portfolio = () => {
  const [projects, setProjects] = useState([]);
  const inputRef = useRef(null);
  const isAdmin = true;

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.setAttribute('webkitdirectory', '');
    }

    const savedProjects = localStorage.getItem('portfolioProjects');
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

  const handleUpload = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) {
      alert('No files detected. Make sure the folder is not empty.');
      return;
    }

    const folderNames = new Set();
    files.forEach((file) => {
      const parts = file.webkitRelativePath.split('/');
      folderNames.add(parts[0]);
    });

    const newProjects = Array.from(folderNames).map((name) => ({ title: name }));
    const updatedProjects = [...projects, ...newProjects];
    setProjects(updatedProjects);
    localStorage.setItem('portfolioProjects', JSON.stringify(updatedProjects));
  };

  const removeProject = (name) => {
    const updated = projects.filter((p) => p.title !== name);
    setProjects(updated);
    localStorage.setItem('portfolioProjects', JSON.stringify(updated));
  };

  const clearAllProjects = () => {
    setProjects([]);
    localStorage.removeItem('portfolioProjects');
  };

  return (
    <section className="portfolio">
      <h1 className="portfolio-title">My Projects</h1>
      <p className="portfolio-intro">Upload folders as full project packages. Admins can also remove them.</p>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-placeholder">📁</div>
            <h3>{project.title}</h3>
            {isAdmin && (
              <button className="delete-btn" onClick={() => removeProject(project.title)}>
                🗑 Remove
              </button>
            )}
          </div>
        ))}
      </div>

      {isAdmin && (
        <div className="upload-area">
          <label htmlFor="folderUpload" className="upload-btn">
            Add Your Project (Folder)
          </label>
          <input
            id="folderUpload"
            type="file"
            multiple
            hidden
            ref={inputRef}
            onChange={handleUpload}
          />
        </div>
      )}

      {isAdmin && projects.length > 0 && (
        <button
          className="delete-btn"
          style={{ marginTop: '1rem', backgroundColor: '#555' }}
          onClick={clearAllProjects}
        >
          ❌ Clear All Projects
        </button>
      )}
    </section>
  );
};

export default Portfolio;
