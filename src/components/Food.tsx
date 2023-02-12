import Eu from '../assets/Eu.jpeg';

export function Food() {
    return (
        <div className="flex items-center gap-1 w-full bg-white rounded-lg border-2 border-zinc-400 my-3 p-2">

            <img src={Eu} alt="Eu" className='w-16 h-16 rounded-lg' />

            FOOD NAME
        </div>
    );
}