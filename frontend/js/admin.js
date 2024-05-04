function showSection(sectionId) {
    var sections = document.querySelectorAll('.container');
    sections.forEach(function (section) {
        section.style.display = 'none';
    });

    var selectedSection = document.getElementById(sectionId);
    selectedSection.style.display = 'block';
}