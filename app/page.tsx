import Image from "next/image";
import Link from 'next/link';

export default function Home() {
  return (
    <main className="">
      <div className="h-screen w-screen flex justify-center items-center">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5" >
          <div>
            <Link href={'/word_card/first'} >
              1st
            </Link>
          </div>
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5" >
          <div>
            <Link href={'/word_card/second'} >
              2nd
            </Link>
          </div>
        </button>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5" >
          <div>
            <Link href={'/word_card/therd'} >
              3rd
            </Link>
          </div>
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded my-5" >
          <div>
            <Link href={'/word_card/force'} >
              4th
            </Link>
          </div>
        </button>
      </div>
    </main>
  );
}
