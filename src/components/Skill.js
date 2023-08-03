import React from 'react';
import { styled } from 'styled-components';
import { motion } from 'framer-motion';

const Skill = ({ title, level, key }) => {
  return (
    <Wrapper>
      <SkillTitle
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        transition={{
          duration: 1,
          delay: 2 + key * 0.5,
        }}
        viewport={{ once: true }}
      >
        {title}
      </SkillTitle>
      <SkillLevelContainer>
        <SkillLevel
          width={level}
          initial={{
            scaleX: 0,
            originX: 0,
          }}
          whileInView={{
            scaleX: 1,
          }}
          transition={{
            ease: [0.165, 0.84, 0.44, 1],
            duration: 2,
            delay: 2 + key * 0.75,
          }}
          viewport={{ once: true }}
        />
      </SkillLevelContainer>
    </Wrapper>
  );
};

export default Skill;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 7.5px;
`;

const SkillTitle = styled(motion.h3)`
  font-size: 20px;
  padding: 0;
  margin: 0;
`;

const SkillLevelContainer = styled.div`
  height: 5px;
  width: 100%;
`;

const SkillLevel = styled(motion.div)`
  height: 100%;
  background-color: var(--color-text);
  border-radius: 5px;
  width: ${({ width }) => `${width}%`};
`;
