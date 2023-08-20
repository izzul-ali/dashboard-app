import { AiOutlineSetting } from 'react-icons/ai';
import SwitchTheme from './theme';

export default function Header() {
  return (
    <header className="flex items-center gap-x-5 justify-end w-full text-lg p-3 bg-white">
      <SwitchTheme />
      <button>
        <AiOutlineSetting />
      </button>
      <div className="p-4 rounded-full bg-green-500"></div>
    </header>
  );
}
