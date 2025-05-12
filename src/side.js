const createSidebar = () => {
  const sidebar = document.createElement('aside');
  sidebar.style.width = '250px';
  sidebar.style.height = '100vh';
  sidebar.style.backgroundColor = '#D50B8B';
  sidebar.style.padding = '20px';
  sidebar.style.boxShadow = '2px 0 5px rgba(0, 0, 0, 0.1)';
  sidebar.style.display = 'flex';
  sidebar.style.flexDirection = 'column';

 

  // Sections
  const sections = ['Tasks', 'Notes', 'Projects', 'Archive'];
  sections.forEach((section) => {
    const sectionButton = document.createElement('button');
    sectionButton.textContent = section;
    sectionButton.style.marginBottom = '70px';
    sectionButton.style.padding = '20px';
    sectionButton.style.border = 'none';
    sectionButton.style.borderRadius = '5px';
    sectionButton.style.backgroundColor = '#D50B8B';
    sectionButton.style.color = '#fff';
    sectionButton.style.fontSize = '16px';
    sectionButton.style.cursor = 'pointer';
    sectionButton.style.textAlign = 'left';

    sectionButton.addEventListener('mouseover', () => {
      sectionButton.style.backgroundColor = '#C06ACF';
    });

    sectionButton.addEventListener('mouseout', () => {
      sectionButton.style.backgroundColor = '#D50B8B';
    });

    sidebar.appendChild(sectionButton);
  });



  document.body.appendChild(sidebar);
};



export default createSidebar;