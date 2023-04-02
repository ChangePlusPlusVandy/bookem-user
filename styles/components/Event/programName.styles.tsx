import styled from 'styled-components';

/**
 * Contain program name, spots filled, and status
 */
export const ProgramNameBox = styled.div`
  height: auto;
  margin-left: 82px;

  @media (max-width: 767px) {
    padding-top: 30px;
  }
`;

/**
 * Contain program name and spots filled
 */
export const NameAndSpot = styled.div`
  @media (min-width: 768px) {
    font-size: 30px;
    line-height: 50px;
  }

  @media (max-width: 767px) {
    font-size: 25px;
    line-height: 40px;
  }
`;

/**
 * Contain a bullet point and a status
 */
export const StatusBox = styled.div`
  display: flex;
  align-items: center;
`;

/**
 * Bullet point before status
 */
export const StatusBullet = styled.li`
  font-size: 40px;
`;

/**
 * Ongoing/Complete
 */
export const Status = styled.span`
  font-size: 25px;
  line-height: 40px;
  margin-left: 20px;
`;
