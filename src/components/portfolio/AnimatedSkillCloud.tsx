type AnimatedSkillCloudProps = {
  skills: string[];
};

const AnimatedSkillCloud = ({ skills }: AnimatedSkillCloudProps) => {
  const loopedSkills = [...skills, ...skills,];

  return (
    <div className="skill-cloud" role="img" aria-label={`Skills: ${skills.join(", ")}`}>
      <div className="skill-cloud__track" aria-hidden="true">
        {loopedSkills.map((skill, index) => (
          <span
            key={`${skill}-${index}`}
            className={skill === ". . ." ? "skill-cloud__more" : "skill-cloud__item"}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnimatedSkillCloud;
