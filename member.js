function skillsMember() {
  return {
    name: 'John',
    skills: ['JavaScript', 'React', 'Node'],
    showSkills: function() {
      this.skills.forEach(function(skill) {
        console.log(`${this.name} knows ${skill}`);
      });
    }
  };
}