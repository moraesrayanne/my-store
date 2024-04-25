import packageJson from '../../package.json';

const { version } = packageJson;

const uri: { [key: string]: string } = {
  development: 'https://fakestoreapi.com',
};

const NODE_ENV = import.meta.env.NODE_ENV;

export { uri, version, NODE_ENV };
