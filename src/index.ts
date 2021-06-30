import { hello } from './hello';

export const helloWorld = hello('world');
export default (): void => {
  console.log(helloWorld);
};
