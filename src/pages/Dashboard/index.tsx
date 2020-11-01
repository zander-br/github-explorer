import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="/">
          <img
            src="https://avatars3.githubusercontent.com/u/51419725?s=400&u=b79bcdcdefb88e6f91e47ea92521da7fade82500&v=4"
            alt="Anderson Santos"
          />
          <div>
            <strong>zander-br/markdown-course</strong>
            <p>
              Aprenda a usar a linguagem de marcação markdown, e valorize ainda
              mais o seu projeto.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="/">
          <img
            src="https://avatars3.githubusercontent.com/u/51419725?s=400&u=b79bcdcdefb88e6f91e47ea92521da7fade82500&v=4"
            alt="Anderson Santos"
          />
          <div>
            <strong>zander-br/markdown-course</strong>
            <p>
              Aprenda a usar a linguagem de marcação markdown, e valorize ainda
              mais o seu projeto.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>

        <a href="/">
          <img
            src="https://avatars3.githubusercontent.com/u/51419725?s=400&u=b79bcdcdefb88e6f91e47ea92521da7fade82500&v=4"
            alt="Anderson Santos"
          />
          <div>
            <strong>zander-br/markdown-course</strong>
            <p>
              Aprenda a usar a linguagem de marcação markdown, e valorize ainda
              mais o seu projeto.
            </p>
          </div>
          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
